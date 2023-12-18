webpackJsonp(
  [1],
  {
    "+jvt": function (e, t) {},
    "0Kyw": function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("8o1w"),
        o = a("NHnr"),
        n = {
          name: "Logout",
          beforeMount: function () {
            var e = this;
            r.a.get("logout").then(function (t) {
              o.EventBus.$emit("ponerNombreDeUsuario", ""),
                o.EventBus.$emit("ocultarMenu"),
                o.EventBus.$emit("ocultarToolbar"),
                o.EventBus.$emit("ponerDatosUsuario", {}),
                e.$router.push({ name: "Login" });
            });
          },
        },
        i = {
          render: function () {
            var e = this.$createElement;
            return (this._self._c || e)("div");
          },
          staticRenderFns: [],
        },
        s = a("VU/8")(n, i, !1, null, null, null);
      t.default = s.exports;
    },
    "1JZ5": function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("c/Tr"),
        o = a.n(r),
        n = a("woOf"),
        i = a.n(n),
        s = a("8o1w"),
        c = {
          name: "DialogoCambiarPrecioVenta",
          watch: {
            mostrar: function (e) {
              var t = this;
              e &&
                this.$nextTick(function () {
                  t.$refs.nuevoPrecio.focus(), t.$refs.formulario.reset();
                });
            },
          },
          data: function () {
            return {
              nuevoPrecio: null,
              reglas: {
                nuevoPrecio: [
                  function (e) {
                    return !isNaN(e) && e <= 0
                      ? "Escriba un número mayor a 0"
                      : !!e || "Escriba un precio";
                  },
                ],
              },
            };
          },
          methods: {
            cerrarDialogo: function () {
              this.$emit("cerrar");
            },
            guardarNuevoPrecio: function () {
              this.$refs.formulario.validate() &&
                ((this.producto.PrecioVenta = this.nuevoPrecio),
                (this.producto.Total =
                  this.producto.PrecioVenta * this.producto.Cantidad),
                this.$refs.formulario.reset(),
                this.cerrarDialogo());
            },
          },
          props: ["mostrar", "producto"],
        },
        l = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-dialog",
              {
                attrs: { persistent: "", "max-width": "500" },
                model: {
                  value: e.mostrar,
                  callback: function (t) {
                    e.mostrar = t;
                  },
                  expression: "mostrar",
                },
              },
              [
                a(
                  "v-card",
                  [
                    a("v-card-title", { staticClass: "headline" }, [
                      e._v("Cambiar precio"),
                    ]),
                    e._v(" "),
                    a(
                      "v-card-text",
                      [
                        a("p", [
                          a("strong", [e._v("Precio original: ")]),
                          e._v(
                            e._s(
                              e._f("currency")(e.producto.PrecioVentaOriginal)
                            ) + "\n      "
                          ),
                        ]),
                        e._v(" "),
                        a(
                          "v-form",
                          { ref: "formulario" },
                          [
                            a(
                              "v-container",
                              { attrs: { fluid: "", "grid-list-md": "" } },
                              [
                                a(
                                  "v-layout",
                                  { attrs: { row: "", wrap: "" } },
                                  [
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "" } },
                                      [
                                        a("v-text-field", {
                                          ref: "nuevoPrecio",
                                          attrs: {
                                            rules: e.reglas.nuevoPrecio,
                                            "prepend-icon": "attach_money",
                                            label: "Nuevo precio de venta",
                                            type: "number",
                                            hint: "Escriba el nuevo precio de venta",
                                            required: "",
                                          },
                                          nativeOn: {
                                            keydown: function (t) {
                                              return "button" in t ||
                                                !e._k(
                                                  t.keyCode,
                                                  "enter",
                                                  13,
                                                  t.key,
                                                  "Enter"
                                                )
                                                ? (t.preventDefault(),
                                                  e.guardarNuevoPrecio(t))
                                                : null;
                                            },
                                          },
                                          model: {
                                            value: e.nuevoPrecio,
                                            callback: function (t) {
                                              e.nuevoPrecio = e._n(t);
                                            },
                                            expression: "nuevoPrecio",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-card-actions",
                      [
                        a("v-spacer"),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: { color: "gray", flat: "flat" },
                            nativeOn: {
                              click: function (t) {
                                e.cerrarDialogo();
                              },
                            },
                          },
                          [e._v("Cancelar")]
                        ),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: { color: "green darken-1", flat: "flat" },
                            on: {
                              click: function (t) {
                                e.guardarNuevoPrecio();
                              },
                            },
                          },
                          [e._v("Ok")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        d = a("VU/8")(c, l, !1, null, null, null).exports,
        u = {
          components: { Publicidad: a("nBfo").a, DialogoCambiarPrecioVenta: d },
          beforeMount: function () {
            this.obtenerModoDeLecturaDeCodigosDeBarras();
          },
          computed: {
            totalVenta: function () {
              return this.listaDeProductos.length <= 0
                ? 0
                : this.listaDeProductos.reduce(
                    function (e, t) {
                      return { Total: e.Total + t.Total };
                    },
                    { Total: 0 }
                  ).Total;
            },
          },
          data: function () {
            return {
              urlBase: "producto",
              dialogos: { cambiarPrecio: !1 },
              productoParaCambiarPrecioDeVenta: {},
              codigo: null,
              fab: !1,
              listaDeProductos: [],
              headers: [
                { text: "#", align: "left", value: "Numero" },
                {
                  text: "Código de barras",
                  align: "left",
                  value: "CodigoBarras",
                },
                { text: "Descripción", value: "Descripcion" },
                { text: "Cantidad", value: "Cantidad" },
                { text: "Precio", value: "PrecioVenta" },
                { text: "Total", value: "Total" },
                { text: "Opciones", sortable: !1 },
              ],
            };
          },
          methods: {
            actualizarCantidad: function (e) {
              e.Total = e.PrecioVenta * e.Cantidad;
            },
            cambiarPrecio: function (e) {
              (this.productoParaCambiarPrecioDeVenta =
                this.listaDeProductos.find(function (t) {
                  return t.Numero === e;
                })),
                (this.dialogos.cambiarPrecio = !0);
            },
            obtenerModoDeLecturaDeCodigosDeBarras: function () {
              var e = this;
              s.b.get("ajustes/otros").then(function (t) {
                "codigo" === t.ModoLecturaProductos &&
                  (e.urlBase = "producto/codigo/barras");
              });
            },
            quiereBuscarProducto: function () {
              this.$emit("buscar-producto");
            },
            cancelarVenta: function () {
              this.listaDeProductos = [];
            },
            aumentarCantidad: function (e) {
              var t = this.listaDeProductos.find(function (t) {
                return t.Numero === e;
              });
              t &&
                t.Existencia > t.Cantidad &&
                (this.$set(t, "Cantidad", t.Cantidad + 1),
                this.$set(t, "Total", t.PrecioVenta * t.Cantidad));
            },
            disminuirCantidad: function (e) {
              var t = this.listaDeProductos.find(function (t) {
                return t.Numero === e;
              });
              t &&
                t.Cantidad > 1 &&
                (this.$set(t, "Cantidad", t.Cantidad - 1),
                this.$set(t, "Total", t.PrecioVenta * t.Cantidad));
            },
            quitarDeLaLista: function (e) {
              var t = this.listaDeProductos.findIndex(function (t) {
                return t.Numero === e;
              });
              -1 !== t && this.listaDeProductos.splice(t, 1);
            },
            agregarOModificarExistenciaDeProductoEnLista: function (e) {
              var t = this.listaDeProductos.findIndex(function (t) {
                return t.Numero === e.Numero;
              });
              if (-1 === t)
                this.listaDeProductos.push({
                  Numero: e.Numero,
                  Descripcion: e.Descripcion,
                  Cantidad: 1,
                  CodigoBarras: e.CodigoBarras,
                  Existencia: e.Existencia,
                  PrecioVenta: e.PrecioVenta,
                  PrecioVentaOriginal: e.PrecioVenta,
                  PrecioCompra: e.PrecioCompra,
                  Total: e.PrecioVenta,
                });
              else {
                var a = this.listaDeProductos[t];
                a.Cantidad < a.Existencia &&
                  (a.Cantidad++, (a.Total = a.Cantidad * a.PrecioVenta));
              }
            },
            buscarYAgregarProductoSiExiste: function () {
              var e = this;
              this.codigo &&
                s.b.get(this.urlBase + "/" + this.codigo).then(function (t) {
                  null !== t
                    ? e.agregarOModificarExistenciaDeProductoEnLista(t)
                    : e.$emit("producto-no-existente"),
                    (e.codigo = null);
                });
            },
          },
        },
        v = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "div",
              [
                a("dialogo-cambiar-precio-venta", {
                  attrs: {
                    producto: e.productoParaCambiarPrecioDeVenta,
                    mostrar: e.dialogos.cambiarPrecio,
                  },
                  on: {
                    cerrar: function (t) {
                      e.dialogos.cambiarPrecio = !1;
                    },
                  },
                }),
                e._v(" "),
                a("v-text-field", {
                  attrs: {
                    label:
                      "Escanear código o escribir el número y presionar Enter",
                    "prepend-icon": "search",
                    solo: "",
                    clearable: "",
                  },
                  on: {
                    "click:prepend": e.quiereBuscarProducto,
                    keyup: function (t) {
                      if (
                        !("button" in t) &&
                        e._k(t.keyCode, "enter", 13, t.key, "Enter")
                      )
                        return null;
                      e.buscarYAgregarProductoSiExiste();
                    },
                  },
                  model: {
                    value: e.codigo,
                    callback: function (t) {
                      e.codigo = t;
                    },
                    expression: "codigo",
                  },
                }),
                e._v(" "),
                a("br"),
                e._v(" "),
                a("v-flex", { attrs: { xs12: "" } }, [a("Publicidad")], 1),
                e._v(" "),
                a("h1", { staticClass: "title" }, [
                  e._v(
                    "Total de la venta: " + e._s(e._f("currency")(e.totalVenta))
                  ),
                ]),
                e._v(" "),
                a("br"),
                e._v(" "),
                a(
                  "div",
                  { staticClass: "contenedor-lista-de-productos" },
                  [
                    a(
                      "v-data-table",
                      {
                        staticClass: "elevation-1",
                        attrs: {
                          headers: e.headers,
                          items: e.listaDeProductos,
                          "hide-actions": "",
                        },
                        scopedSlots: e._u([
                          {
                            key: "items",
                            fn: function (t) {
                              return [
                                a("td", [e._v(e._s(t.item.Numero))]),
                                e._v(" "),
                                a("td", [e._v(e._s(t.item.CodigoBarras))]),
                                e._v(" "),
                                a("td", [e._v(e._s(t.item.Descripcion))]),
                                e._v(" "),
                                a(
                                  "td",
                                  [
                                    a("input", { attrs: { type: "text" } }),
                                    e._v(" "),
                                    a("v-text-field", {
                                      attrs: {
                                        hint: "Escriba la cantidad y presione Enter",
                                        type: "number",
                                        placeholder: "Cantidad",
                                      },
                                      on: {
                                        change: function (a) {
                                          e.actualizarCantidad(t.item);
                                        },
                                      },
                                      model: {
                                        value: t.item.Cantidad,
                                        callback: function (a) {
                                          e.$set(t.item, "Cantidad", e._n(a));
                                        },
                                        expression: "props.item.Cantidad",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                e._v(" "),
                                a("td", [
                                  e._v(
                                    e._s(e._f("currency")(t.item.PrecioVenta))
                                  ),
                                ]),
                                e._v(" "),
                                a("td", [
                                  e._v(e._s(e._f("currency")(t.item.Total))),
                                ]),
                                e._v(" "),
                                a(
                                  "td",
                                  { staticClass: "justify-center layout px-0" },
                                  [
                                    a(
                                      "v-btn",
                                      {
                                        staticClass: "mx-0",
                                        attrs: {
                                          title: "Cambiar precio",
                                          icon: "",
                                        },
                                        on: {
                                          click: function (a) {
                                            e.cambiarPrecio(t.item.Numero);
                                          },
                                        },
                                      },
                                      [
                                        a(
                                          "v-icon",
                                          { attrs: { color: "blue" } },
                                          [e._v("edit")]
                                        ),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a(
                                      "v-btn",
                                      {
                                        staticClass: "mx-0",
                                        attrs: {
                                          title: "Aumentar uno",
                                          icon: "",
                                        },
                                        on: {
                                          click: function (a) {
                                            e.aumentarCantidad(t.item.Numero);
                                          },
                                        },
                                      },
                                      [
                                        a(
                                          "v-icon",
                                          { attrs: { color: "green" } },
                                          [e._v("add_shopping_cart")]
                                        ),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a(
                                      "v-btn",
                                      {
                                        staticClass: "mx-0",
                                        attrs: {
                                          title: "Restar uno",
                                          icon: "",
                                        },
                                        on: {
                                          click: function (a) {
                                            e.disminuirCantidad(t.item.Numero);
                                          },
                                        },
                                      },
                                      [
                                        a(
                                          "v-icon",
                                          { attrs: { color: "orange" } },
                                          [e._v("remove_shopping_cart")]
                                        ),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a(
                                      "v-btn",
                                      {
                                        staticClass: "mx-0",
                                        attrs: {
                                          title: "Quitar de la lista",
                                          icon: "",
                                        },
                                        on: {
                                          click: function (a) {
                                            e.quitarDeLaLista(t.item.Numero);
                                          },
                                        },
                                      },
                                      [
                                        a(
                                          "v-icon",
                                          { attrs: { color: "red" } },
                                          [e._v("delete")]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ];
                            },
                          },
                        ]),
                      },
                      [
                        a(
                          "template",
                          { slot: "no-data" },
                          [
                            a(
                              "v-alert",
                              { attrs: { value: !0, color: "info" } },
                              [
                                a(
                                  "div",
                                  { staticClass: "text-xs-center" },
                                  [
                                    a("h1", [e._v("Lista vacía")]),
                                    e._v(" "),
                                    a(
                                      "v-icon",
                                      { staticClass: "icono-grande" },
                                      [e._v("shopping_basket")]
                                    ),
                                    e._v(" "),
                                    a("p", [
                                      e._v(
                                        "Aquí aparecerá la lista de productos para la venta"
                                      ),
                                    ]),
                                  ],
                                  1
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      2
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        p = a("VU/8")(u, v, !1, null, null, null).exports,
        m = a("EgEd"),
        f = a("Xxa5"),
        h = a.n(f),
        g = a("exGp"),
        b = a.n(g),
        A = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-flex",
              [
                a(
                  "v-alert",
                  {
                    attrs: {
                      value:
                        !e.clienteSeleccionado || !e.clienteSeleccionado.Numero,
                      type: "error",
                    },
                  },
                  [e._v("\n    No ha seleccionado ningún cliente\n  ")]
                ),
                e._v(" "),
                a(
                  "v-alert",
                  { attrs: { value: e.hayClienteSeleccionado, type: "info" } },
                  [
                    a("strong", [e._v("Cliente seleccionado")]),
                    e._v(" "),
                    a("br"),
                    e._v(" "),
                    e.hayClienteSeleccionado
                      ? a("span", [
                          a("strong", [e._v("ID: ")]),
                          e._v(
                            " " +
                              e._s(e.clienteSeleccionado.Numero) +
                              "\n      "
                          ),
                          a("br"),
                        ])
                      : e._e(),
                    e._v(" "),
                    e.hayClienteSeleccionado
                      ? a("span", [
                          a("strong", [e._v("Nombre: ")]),
                          e._v(
                            " " +
                              e._s(e.clienteSeleccionado.Nombre) +
                              "\n      "
                          ),
                          a("br"),
                        ])
                      : e._e(),
                    e._v(" "),
                    e.hayClienteSeleccionado
                      ? a("span", [
                          a("strong", [e._v("Teléfono: ")]),
                          e._v(
                            " " +
                              e._s(e.clienteSeleccionado.NumeroTelefono) +
                              "\n      "
                          ),
                          a("br"),
                        ])
                      : e._e(),
                  ]
                ),
                e._v(" "),
                a("br"),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        _ = a("VU/8")(
          {
            props: ["clienteSeleccionado"],
            computed: {
              hayClienteSeleccionado: function () {
                return !!(
                  this.clienteSeleccionado &&
                  this.clienteSeleccionado.Nombre &&
                  this.clienteSeleccionado.NumeroTelefono
                );
              },
            },
          },
          A,
          !1,
          null,
          null,
          null
        ).exports,
        x = {
          data: function () {
            return {
              clientes: [],
              cliente: {},
              cargando: !1,
              busquedaAutocompletado: "",
            };
          },
          methods: {
            limpiar: function () {
              (this.busqueda = ""), (this.cliente = {});
            },
            agregarNuevoCliente: function () {
              this.$emit("agregar-cliente");
            },
            buscarClientes: function (e) {
              var t = this;
              (this.cargando = !0),
                s.b
                  .get("autocompletado/clientes/" + encodeURIComponent(e))
                  .then(function (e) {
                    (t.clientes = e), (t.cargando = !1);
                  });
            },
          },
          watch: {
            busquedaAutocompletado: function (e) {
              e && this.buscarClientes(e);
            },
            cliente: function (e) {
              null === e
                ? this.$emit("cliente-cancelado")
                : e.Numero && this.$emit("cliente-seleccionado", e);
            },
          },
        },
        k = {
          render: function () {
            var e = this,
              t = e.$createElement;
            return (e._self._c || t)("v-autocomplete", {
              attrs: {
                loading: e.cargando,
                items: e.clientes,
                "search-input": e.busquedaAutocompletado,
                label: "Nombre del cliente",
                "return-object": "",
                "item-text": "Nombre",
                "item-value": "Nombre",
                clearable: "",
                solo: "",
                "prepend-icon": "add",
                required: "",
              },
              on: {
                "update:searchInput": function (t) {
                  e.busquedaAutocompletado = t;
                },
                "click:prepend": e.agregarNuevoCliente,
              },
              model: {
                value: e.cliente,
                callback: function (t) {
                  e.cliente = t;
                },
                expression: "cliente",
              },
            });
          },
          staticRenderFns: [],
        },
        C = a("VU/8")(x, k, !1, null, null, null).exports,
        E = a("65o/"),
        y = {
          components: {
            DetallesClienteSeleccionado: _,
            AutocompletadoClientes: C,
          },
          computed: {
            cambio: function () {
              return this.datosVenta && this.pagoDelCliente > 0
                ? this.pagoDelCliente - this.datosVenta.total
                : -1;
            },
          },
          watch: {
            mostrar: function (e) {
              e && this.enfocarInputPrincipal();
            },
          },
          methods: {
            prepararNuevaVenta: function () {
              this.setCliente({}),
                this.$refs.formulario.reset(),
                this.$refs.autocompletado.limpiar(),
                (this.tipoCliente = "mostrador");
            },
            setCliente: function (e) {
              this.clienteSeleccionado = e;
            },
            onClienteSeleccionado: function (e) {
              this.setCliente(i()({}, e));
            },
            onClienteCancelado: function () {
              this.setCliente({});
            },
            agregarNuevoCliente: function () {
              this.$emit("agregar-cliente");
            },
            enfocarInputPrincipal: function () {
              this.$nextTick(this.$refs.pagoCliente.focus);
            },
            resetearFormulario: function () {
              this.$refs.formulario.reset();
            },
            cerrarDialogo: function () {
              this.resetearFormulario(), this.$emit("cerrar-dialogo");
            },
            guardar: function () {
              var e = this;
              return b()(
                h.a.mark(function t() {
                  var a, r, o;
                  return h.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (!e.$refs.formulario.validate()) {
                              t.next = 21;
                              break;
                            }
                            if (!(e.cambio < 0)) {
                              t.next = 3;
                              break;
                            }
                            return t.abrupt(
                              "return",
                              e.$emit("error-pago-incompleto")
                            );
                          case 3:
                            if (
                              ((a = i()({}, e.clienteSeleccionado)),
                              "existenteONuevo" !== e.tipoCliente)
                            ) {
                              t.next = 9;
                              break;
                            }
                            if (null !== a && a.Nombre) {
                              t.next = 7;
                              break;
                            }
                            return t.abrupt(
                              "return",
                              e.$emit("no-hay-cliente")
                            );
                          case 7:
                            t.next = 10;
                            break;
                          case 9:
                            a.Numero = 1;
                          case 10:
                            return (
                              (r = {
                                Total: e.datosVenta.total,
                                Productos: e.datosVenta.lista,
                                Cliente: a,
                                Pago: e.pagoDelCliente,
                              }),
                              (e.cargando = !0),
                              (t.next = 14),
                              s.b.post("venta/contado", r)
                            );
                          case 14:
                            if (((o = t.sent), (e.cargando = !1), !o)) {
                              t.next = 21;
                              break;
                            }
                            return (
                              e.$emit("venta-realizada"),
                              e.prepararNuevaVenta(),
                              (t.next = 21),
                              E.a.imprimirTicketVentaContado(o.Numero)
                            );
                          case 21:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
          },
          props: ["mostrar", "datosVenta"],
          data: function () {
            return {
              cargando: !1,
              clienteSeleccionado: {},
              pagoDelCliente: null,
              tipoCliente: "mostrador",
              reglas: {
                pago: [
                  function (e) {
                    return !(e <= 0) || "Introduzca un valor mayor que 0";
                  },
                ],
              },
            };
          },
        },
        P = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-dialog",
              {
                attrs: { persistent: "", "max-width": "700" },
                model: {
                  value: e.mostrar,
                  callback: function (t) {
                    e.mostrar = t;
                  },
                  expression: "mostrar",
                },
              },
              [
                a(
                  "v-card",
                  [
                    a("v-card-title", { staticClass: "headline" }, [
                      e._v("Terminar venta al contado"),
                    ]),
                    e._v(" "),
                    a(
                      "v-card-text",
                      [
                        a(
                          "v-form",
                          { ref: "formulario" },
                          [
                            a(
                              "v-container",
                              { attrs: { fluid: "", "grid-list-md": "" } },
                              [
                                a(
                                  "v-layout",
                                  { attrs: { row: "", wrap: "" } },
                                  [
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "" } },
                                      [
                                        a("v-text-field", {
                                          ref: "pagoCliente",
                                          attrs: {
                                            "prepend-icon": "attach_money",
                                            label: "Cantidad recibida",
                                            type: "number",
                                            rules: e.reglas.pago,
                                            hint: "¿Con cuánto paga el cliente?",
                                            required: "",
                                          },
                                          on: {
                                            keyup: function (t) {
                                              if (
                                                !("button" in t) &&
                                                e._k(
                                                  t.keyCode,
                                                  "enter",
                                                  13,
                                                  t.key,
                                                  "Enter"
                                                )
                                              )
                                                return null;
                                              e.guardar();
                                            },
                                          },
                                          model: {
                                            value: e.pagoDelCliente,
                                            callback: function (t) {
                                              e.pagoDelCliente = e._n(t);
                                            },
                                            expression: "pagoDelCliente",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-flex",
                              { attrs: { xs12: "" } },
                              [
                                a("span", { staticClass: "body-2" }, [
                                  e._v("Tipo de cliente"),
                                ]),
                                e._v(" "),
                                a(
                                  "v-radio-group",
                                  {
                                    attrs: { row: "" },
                                    model: {
                                      value: e.tipoCliente,
                                      callback: function (t) {
                                        e.tipoCliente = t;
                                      },
                                      expression: "tipoCliente",
                                    },
                                  },
                                  [
                                    a("v-radio", {
                                      attrs: {
                                        label: "Mostrador",
                                        value: "mostrador",
                                      },
                                    }),
                                    e._v(" "),
                                    a("v-radio", {
                                      attrs: {
                                        label: "Buscar o crear nuevo",
                                        value: "existenteONuevo",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-flex",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: "existenteONuevo" === e.tipoCliente,
                                    expression:
                                      "tipoCliente === 'existenteONuevo'",
                                  },
                                ],
                              },
                              [
                                a("detalles-cliente-seleccionado", {
                                  attrs: {
                                    clienteSeleccionado: e.clienteSeleccionado,
                                  },
                                }),
                                e._v(" "),
                                a("autocompletado-clientes", {
                                  ref: "autocompletado",
                                  on: {
                                    "cliente-cancelado": e.onClienteCancelado,
                                    "cliente-seleccionado":
                                      e.onClienteSeleccionado,
                                    "agregar-cliente": e.agregarNuevoCliente,
                                  },
                                }),
                                e._v(" "),
                                a("br"),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        e._v(" "),
                        a("v-flex", { attrs: { xs12: "" } }, [
                          a(
                            "p",
                            {
                              staticClass: "title text-xs-right",
                              attrs: { color: "blue" },
                            },
                            [
                              e._v(
                                "\n          Total: " +
                                  e._s(e._f("currency")(e.datosVenta.total)) +
                                  "\n        "
                              ),
                            ]
                          ),
                          e._v(" "),
                          a(
                            "p",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: e.pagoDelCliente > 0,
                                  expression: "pagoDelCliente > 0",
                                },
                              ],
                              staticClass: "title text-xs-right",
                              attrs: { color: "blue" },
                            },
                            [
                              e._v(
                                "\n          Pago: " +
                                  e._s(e._f("currency")(e.pagoDelCliente)) +
                                  "\n        "
                              ),
                            ]
                          ),
                          e._v(" "),
                          a(
                            "p",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: e.cambio >= 0,
                                  expression: "cambio >= 0",
                                },
                              ],
                              staticClass: "title text-xs-right",
                              attrs: { color: "blue" },
                            },
                            [
                              e._v(
                                "\n          Cambio: " +
                                  e._s(e._f("currency")(e.cambio)) +
                                  "\n        "
                              ),
                            ]
                          ),
                        ]),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-card-actions",
                      [
                        a("v-spacer"),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: {
                              loading: e.cargando,
                              color: "green darken-1",
                              flat: "flat",
                            },
                            nativeOn: {
                              click: function (t) {
                                e.guardar();
                              },
                            },
                          },
                          [e._v("Terminar venta")]
                        ),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: { color: "gray", flat: "flat" },
                            nativeOn: {
                              click: function (t) {
                                e.cerrarDialogo();
                              },
                            },
                          },
                          [e._v("Cerrar")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        w = a("VU/8")(y, P, !1, null, null, null).exports,
        I = {
          mounted: function () {
            var e = new Date();
            this.fechasRecomendadas = [14, 29, 59].map(function (t) {
              return new Date(e.getTime() + 864e5 * t)
                .toISOString()
                .substr(0, 10);
            });
          },
          components: {
            DetallesClienteSeleccionado: _,
            AutocompletadoClientes: C,
          },
          computed: {
            cambio: function () {
              return this.datosVenta && this.pago > 0 && this.anticipo
                ? this.pago - this.anticipo
                : -1;
            },
          },
          watch: {
            mostrar: function (e) {
              e && this.enfocarInputPrincipal();
            },
          },
          methods: {
            prepararNuevaVenta: function () {
              this.setCliente({}),
                this.$refs.formulario.reset(),
                this.$refs.autocompletado.limpiar();
            },
            setCliente: function (e) {
              this.clienteSeleccionado = e;
            },
            onClienteSeleccionado: function (e) {
              this.setCliente(i()({}, e));
            },
            onClienteCancelado: function () {
              this.setCliente({});
            },
            agregarNuevoCliente: function () {
              this.$emit("agregar-cliente");
            },
            enfocarInputPrincipal: function () {
              this.$nextTick(this.$refs.pago.focus);
            },
            resetearFormulario: function () {
              this.$refs.formulario.reset();
            },
            cerrarDialogo: function () {
              this.resetearFormulario(), this.$emit("cerrar-dialogo");
            },
            guardar: function () {
              var e = this;
              return b()(
                h.a.mark(function t() {
                  var a, r;
                  return h.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (e.$refs.formulario.validate()) {
                              t.next = 2;
                              break;
                            }
                            return t.abrupt("return");
                          case 2:
                            if (!(e.anticipo >= e.datosVenta.total)) {
                              t.next = 4;
                              break;
                            }
                            return t.abrupt(
                              "return",
                              e.$emit("error-pago-excedido")
                            );
                          case 4:
                            if (null !== e.fechaVencimiento) {
                              t.next = 8;
                              break;
                            }
                            return (
                              e.$emit("no-hay-fecha"),
                              (e.mostrarDialogoFecha = !0),
                              t.abrupt("return")
                            );
                          case 8:
                            if (
                              null !== e.clienteSeleccionado &&
                              e.clienteSeleccionado.Nombre
                            ) {
                              t.next = 10;
                              break;
                            }
                            return t.abrupt(
                              "return",
                              e.$emit("no-hay-cliente")
                            );
                          case 10:
                            return (
                              (a = {
                                Total: e.datosVenta.total,
                                Productos: e.datosVenta.lista,
                                Cliente: e.clienteSeleccionado,
                                FechaVencimiento: E.a.agregarHoraCeroAFecha(
                                  e.fechaVencimiento
                                ),
                                Anticipo: e.anticipo,
                                Pago: e.pago,
                              }),
                              (e.cargando = !0),
                              (t.next = 14),
                              s.b.post("apartado", a)
                            );
                          case 14:
                            (r = t.sent),
                              (e.cargando = !1),
                              r &&
                                (e.$emit("apartado-realizado"),
                                e.prepararNuevaVenta(),
                                E.a.imprimirTicketApartado(r.Numero));
                          case 17:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
          },
          props: ["mostrar", "datosVenta"],
          data: function () {
            return {
              cargando: !1,
              mostrarDialogoFecha: null,
              fechasRecomendadas: null,
              hoy: E.a.hoyComoCadena(),
              fechaVencimiento: null,
              clienteSeleccionado: {},
              anticipo: null,
              pago: null,
              reglas: {
                pago: [
                  function (e) {
                    return !(e < 0) || "Introduzca un valor mayor que 0";
                  },
                ],
                anticipo: [
                  function (e) {
                    return !(e < 0) || "Introduzca un valor mayor que 0";
                  },
                ],
              },
            };
          },
        },
        N = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-dialog",
              {
                attrs: { persistent: "", "max-width": "700" },
                model: {
                  value: e.mostrar,
                  callback: function (t) {
                    e.mostrar = t;
                  },
                  expression: "mostrar",
                },
              },
              [
                a(
                  "v-card",
                  [
                    a("v-card-title", { staticClass: "headline" }, [
                      e._v("Hacer apartado"),
                    ]),
                    e._v(" "),
                    a(
                      "v-card-text",
                      [
                        a(
                          "v-form",
                          { ref: "formulario" },
                          [
                            a(
                              "v-container",
                              { attrs: { fluid: "", "grid-list-md": "" } },
                              [
                                a(
                                  "v-layout",
                                  { attrs: { row: "", wrap: "" } },
                                  [
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "", sm4: "" } },
                                      [
                                        a("v-text-field", {
                                          ref: "pago",
                                          attrs: {
                                            "prepend-icon": "attach_money",
                                            label: "Pago del cliente",
                                            type: "number",
                                            rules: e.reglas.pago,
                                            hint: "¿Con cuánto paga el cliente (para calcular el cambio)?",
                                            required: "",
                                          },
                                          nativeOn: {
                                            keydown: function (t) {
                                              if (
                                                !("button" in t) &&
                                                e._k(
                                                  t.keyCode,
                                                  "enter",
                                                  13,
                                                  t.key,
                                                  "Enter"
                                                )
                                              )
                                                return null;
                                              e.guardar();
                                            },
                                          },
                                          model: {
                                            value: e.pago,
                                            callback: function (t) {
                                              e.pago = e._n(t);
                                            },
                                            expression: "pago",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "", sm4: "" } },
                                      [
                                        a("v-text-field", {
                                          ref: "anticipo",
                                          attrs: {
                                            "prepend-icon": "attach_money",
                                            label: "Anticipo",
                                            type: "number",
                                            rules: e.reglas.anticipo,
                                            hint: "¿Cuál es el anticipo del cliente?",
                                            required: "",
                                          },
                                          nativeOn: {
                                            keydown: function (t) {
                                              if (
                                                !("button" in t) &&
                                                e._k(
                                                  t.keyCode,
                                                  "enter",
                                                  13,
                                                  t.key,
                                                  "Enter"
                                                )
                                              )
                                                return null;
                                              e.guardar();
                                            },
                                          },
                                          model: {
                                            value: e.anticipo,
                                            callback: function (t) {
                                              e.anticipo = e._n(t);
                                            },
                                            expression: "anticipo",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "", sm4: "" } },
                                      [
                                        a(
                                          "v-menu",
                                          {
                                            ref: "menu",
                                            attrs: {
                                              "close-on-content-click": !1,
                                              "nudge-right": 40,
                                              "return-value":
                                                e.fechaVencimiento,
                                              lazy: "",
                                              transition: "scale-transition",
                                              "offset-y": "",
                                              "full-width": "",
                                              "min-width": "290px",
                                            },
                                            on: {
                                              "update:returnValue": function (
                                                t
                                              ) {
                                                e.fechaVencimiento = t;
                                              },
                                            },
                                            model: {
                                              value: e.mostrarDialogoFecha,
                                              callback: function (t) {
                                                e.mostrarDialogoFecha = t;
                                              },
                                              expression: "mostrarDialogoFecha",
                                            },
                                          },
                                          [
                                            a("v-text-field", {
                                              attrs: {
                                                slot: "activator",
                                                label: "Fecha de vencimiento",
                                                "prepend-icon": "event",
                                                readonly: "",
                                              },
                                              slot: "activator",
                                              model: {
                                                value: e.fechaVencimiento,
                                                callback: function (t) {
                                                  e.fechaVencimiento = t;
                                                },
                                                expression: "fechaVencimiento",
                                              },
                                            }),
                                            e._v(" "),
                                            a(
                                              "v-date-picker",
                                              {
                                                attrs: {
                                                  color: "green lighten-1",
                                                  events: e.fechasRecomendadas,
                                                  locale: "es-419",
                                                  min: e.hoy,
                                                },
                                                model: {
                                                  value: e.fechaVencimiento,
                                                  callback: function (t) {
                                                    e.fechaVencimiento = t;
                                                  },
                                                  expression:
                                                    "fechaVencimiento",
                                                },
                                              },
                                              [
                                                a("v-spacer"),
                                                e._v(" "),
                                                a(
                                                  "v-btn",
                                                  {
                                                    attrs: {
                                                      flat: "",
                                                      color: "primary",
                                                    },
                                                    on: {
                                                      click: function (t) {
                                                        e.mostrarDialogoFecha =
                                                          !1;
                                                      },
                                                    },
                                                  },
                                                  [e._v("Cerrar")]
                                                ),
                                                e._v(" "),
                                                a(
                                                  "v-btn",
                                                  {
                                                    attrs: {
                                                      flat: "",
                                                      color: "primary",
                                                    },
                                                    on: {
                                                      click: function (t) {
                                                        e.$refs.menu.save(
                                                          e.fechaVencimiento
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [e._v("OK")]
                                                ),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        e._v(" "),
                        a("detalles-cliente-seleccionado", {
                          attrs: { clienteSeleccionado: e.clienteSeleccionado },
                        }),
                        e._v(" "),
                        a("autocompletado-clientes", {
                          ref: "autocompletado",
                          on: {
                            "cliente-cancelado": e.onClienteCancelado,
                            "cliente-seleccionado": e.onClienteSeleccionado,
                            "agregar-cliente": e.agregarNuevoCliente,
                          },
                        }),
                        e._v(" "),
                        a("br"),
                        e._v(" "),
                        a("v-flex", { attrs: { xs12: "" } }, [
                          a(
                            "p",
                            {
                              staticClass: "title text-xs-right",
                              attrs: { color: "blue" },
                            },
                            [
                              e._v(
                                "\n          Total: " +
                                  e._s(e._f("currency")(e.datosVenta.total)) +
                                  "\n        "
                              ),
                            ]
                          ),
                          e._v(" "),
                          a(
                            "p",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: e.pago > 0 && e.cambio >= 0,
                                  expression: "pago > 0 && cambio >= 0",
                                },
                              ],
                              staticClass: "title text-xs-right",
                              attrs: { color: "blue" },
                            },
                            [
                              e._v(
                                "\n          Pago: " +
                                  e._s(e._f("currency")(e.pago)) +
                                  "\n        "
                              ),
                            ]
                          ),
                          e._v(" "),
                          a(
                            "p",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: e.pago > 0 && e.cambio >= 0,
                                  expression: "pago > 0 && cambio >= 0",
                                },
                              ],
                              staticClass: "title text-xs-right",
                              attrs: { color: "blue" },
                            },
                            [
                              e._v(
                                "\n          Anticipo: " +
                                  e._s(e._f("currency")(e.anticipo)) +
                                  "\n        "
                              ),
                            ]
                          ),
                          e._v(" "),
                          a(
                            "p",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: e.cambio >= 0,
                                  expression: "cambio >= 0",
                                },
                              ],
                              staticClass: "title text-xs-right",
                              attrs: { color: "blue" },
                            },
                            [
                              e._v(
                                "\n          Cambio: " +
                                  e._s(e._f("currency")(e.cambio)) +
                                  "\n        "
                              ),
                            ]
                          ),
                          e._v(" "),
                          a(
                            "p",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: e.cambio >= 0,
                                  expression: "cambio >= 0",
                                },
                              ],
                              staticClass: "title text-xs-right",
                              attrs: { color: "blue" },
                            },
                            [
                              e._v(
                                "\n          Restante: " +
                                  e._s(
                                    e._f("currency")(
                                      e.datosVenta.total - e.anticipo
                                    )
                                  ) +
                                  "\n        "
                              ),
                            ]
                          ),
                        ]),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-card-actions",
                      [
                        a("v-spacer"),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: {
                              loading: e.cargando,
                              color: "green darken-1",
                              flat: "flat",
                            },
                            nativeOn: {
                              click: function (t) {
                                e.guardar();
                              },
                            },
                          },
                          [e._v("Terminar apartado\n      ")]
                        ),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: { color: "gray", flat: "flat" },
                            nativeOn: {
                              click: function (t) {
                                e.cerrarDialogo();
                              },
                            },
                          },
                          [e._v("Cerrar")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        D = a("VU/8")(I, N, !1, null, null, null).exports,
        V = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-speed-dial",
              {
                attrs: {
                  fixed: "",
                  transition: "slide-x",
                  bottom: "",
                  right: "",
                  direction: "top",
                },
                model: {
                  value: e.fab,
                  callback: function (t) {
                    e.fab = t;
                  },
                  expression: "fab",
                },
              },
              [
                a(
                  "v-btn",
                  {
                    attrs: {
                      slot: "activator",
                      color: "blue darken-2",
                      dark: "",
                      fab: "",
                      hover: "",
                    },
                    slot: "activator",
                    model: {
                      value: e.fab,
                      callback: function (t) {
                        e.fab = t;
                      },
                      expression: "fab",
                    },
                  },
                  [
                    a("v-icon", [e._v("check")]),
                    e._v(" "),
                    a("v-icon", [e._v("close")]),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-tooltip",
                  { attrs: { disabled: "", value: !0, left: "" } },
                  [
                    a(
                      "v-btn",
                      {
                        attrs: {
                          slot: "activator",
                          fab: "",
                          dark: "",
                          small: "",
                          color: "green",
                        },
                        on: {
                          click: function (t) {
                            e.ventaContado();
                          },
                        },
                        slot: "activator",
                      },
                      [a("v-icon", [e._v("attach_money")])],
                      1
                    ),
                    e._v(" "),
                    a("span", [e._v("Al contado")]),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-tooltip",
                  { attrs: { disabled: "", value: !0, left: "" } },
                  [
                    a(
                      "v-btn",
                      {
                        attrs: {
                          slot: "activator",
                          fab: "",
                          dark: "",
                          small: "",
                          color: "indigo",
                        },
                        on: {
                          click: function (t) {
                            e.apartado();
                          },
                        },
                        slot: "activator",
                      },
                      [a("v-icon", [e._v("credit_card")])],
                      1
                    ),
                    e._v(" "),
                    a("span", [e._v("Apartado")]),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-tooltip",
                  { attrs: { disabled: "", value: !0, left: "" } },
                  [
                    a(
                      "v-btn",
                      {
                        attrs: {
                          slot: "activator",
                          fab: "",
                          dark: "",
                          small: "",
                          color: "red",
                        },
                        on: {
                          click: function (t) {
                            e.cancelarVenta();
                          },
                        },
                        slot: "activator",
                      },
                      [a("v-icon", [e._v("delete")])],
                      1
                    ),
                    e._v(" "),
                    a("span", [e._v("Cancelar venta")]),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        S = a("VU/8")(
          {
            data: function () {
              return { fab: !1 };
            },
            methods: {
              ventaContado: function () {
                this.$emit("venta-contado");
              },
              apartado: function () {
                this.$emit("apartado");
              },
              cancelarVenta: function () {
                this.$emit("cancelar-venta");
              },
            },
          },
          V,
          !1,
          null,
          null,
          null
        ).exports,
        O = {
          props: ["mostrar"],
          components: { AutocompletadoProductos: a("psw5").a },
          methods: {
            productoSeleccionado: function (e) {
              this.$emit("producto-seleccionado", e);
            },
            cerrarDialogo: function () {
              this.$emit("cerrar-dialogo");
            },
          },
        },
        T = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-dialog",
              {
                attrs: { persistent: "", "max-width": "700" },
                model: {
                  value: e.mostrar,
                  callback: function (t) {
                    e.mostrar = t;
                  },
                  expression: "mostrar",
                },
              },
              [
                a(
                  "v-card",
                  [
                    a("v-card-title", { staticClass: "headline" }, [
                      e._v("Buscar producto"),
                    ]),
                    e._v(" "),
                    a(
                      "v-card-text",
                      [
                        a("autocompletado-productos", {
                          on: {
                            "producto-seleccionado": e.productoSeleccionado,
                          },
                        }),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-card-actions",
                      [
                        a("v-spacer"),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: { color: "gray", flat: "flat" },
                            nativeOn: {
                              click: function (t) {
                                e.cerrarDialogo();
                              },
                            },
                          },
                          [e._v("Cerrar")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        F = a("VU/8")(O, T, !1, null, null, null).exports,
        R = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-dialog",
              {
                attrs: { persistent: "", "max-width": "300" },
                model: {
                  value: e.mostrar,
                  callback: function (t) {
                    e.mostrar = t;
                  },
                  expression: "mostrar",
                },
              },
              [
                a(
                  "v-card",
                  [
                    a("v-card-title", { staticClass: "headline" }, [
                      e._v("¿Cancelar venta actual?"),
                    ]),
                    e._v(" "),
                    a("v-card-text", [
                      e._v(
                        "\n      ¿Realmente desea vaciar la lista de productos?\n      "
                      ),
                      a("br"),
                      e._v(" "),
                      a("strong", [e._v("Esta acción no se puede revertir")]),
                      e._v(".\n    "),
                    ]),
                    e._v(" "),
                    a(
                      "v-card-actions",
                      [
                        a("v-spacer"),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: { color: "gray", flat: "flat" },
                            nativeOn: {
                              click: function (t) {
                                e.cerrarDialogo();
                              },
                            },
                          },
                          [e._v("Cerrar")]
                        ),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: { color: "green darken-1", flat: "flat" },
                            on: {
                              click: function (t) {
                                e.confirmarEliminacion();
                              },
                            },
                          },
                          [e._v("Sí, vaciar")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        j = a("VU/8")(
          {
            props: ["mostrar"],
            methods: {
              cerrarDialogo: function () {
                this.$emit("cerrar-dialogo");
              },
              confirmarEliminacion: function () {
                this.$emit("confirmado");
              },
            },
          },
          R,
          !1,
          null,
          null,
          null
        ).exports,
        M = a("NHnr"),
        z = {
          beforeMount: function () {
            M.EventBus.$emit("ponerTitulo", "Vender");
          },
          components: {
            ListaDeProductos: p,
            SpeedDial: S,
            DialogoVentaContado: w,
            FormularioNuevoCliente: m.a,
            DialogoApartado: D,
            DialogoBusquedaProducto: F,
            DialogoConfirmacionVaciarLista: j,
          },
          data: function () {
            return {
              fab: !1,
              dialogos: {
                contado: !1,
                apartado: !1,
                nuevoCliente: !1,
                buscar: !1,
                confirmarEliminacion: !1,
              },
              snackbars: {
                agregarProductos: !1,
                ventaCorrecta: !1,
                productoNoExistente: !1,
                pagoCliente: !1,
                seleccionarCliente: !1,
                apartadoCorrecto: !1,
                seleccionarFecha: !1,
                pagoExcedido: !1,
              },
              datosVenta: {},
            };
          },
          methods: {
            mostrarDialogoConfirmacionSiEsNecesario: function () {
              this.$refs.listaDeProductos.totalVenta > 0 &&
                (this.dialogos.confirmarEliminacion = !0);
            },
            onProductoSeleccionadoDesdeBusqueda: function (e) {
              (this.dialogos.buscar = !1),
                this.$refs.listaDeProductos.agregarOModificarExistenciaDeProductoEnLista(
                  e
                );
            },
            mostrarDialogoParaBuscarProducto: function () {
              this.dialogos.buscar = !0;
            },
            onErrorPagoIncompleto: function () {
              this.snackbars.pagoCliente = !0;
            },
            onErrorPagoExcedido: function () {
              this.snackbars.pagoExcedido = !0;
            },
            onErrorNoCliente: function () {
              this.snackbars.seleccionarCliente = !0;
            },
            onErrorNoFecha: function () {
              this.snackbars.seleccionarFecha = !0;
            },
            onProductoNoExistente: function () {
              this.snackbars.productoNoExistente = !0;
            },
            onVentaContadoRealizada: function () {
              (this.dialogos.contado = !1),
                this.onCancelarVenta(),
                (this.snackbars.ventaCorrecta = !0);
            },
            onApartadoRealizado: function () {
              (this.dialogos.apartado = !1),
                this.onCancelarVenta(),
                (this.snackbars.apartadoCorrecto = !0);
            },
            onClienteGuardado: function (e) {
              (this.dialogos.nuevoCliente = !1),
                this.$refs.dialogoVentaContado.setCliente(i()({}, e)),
                this.$refs.dialogoApartado.setCliente(i()({}, e));
            },
            onAgregarCliente: function () {
              this.dialogos.nuevoCliente = !0;
            },
            onVentaContado: function () {
              this.$refs.listaDeProductos.totalVenta
                ? ((this.datosVenta.total =
                    this.$refs.listaDeProductos.totalVenta),
                  (this.datosVenta.lista = o()(
                    this.$refs.listaDeProductos.listaDeProductos
                  )),
                  (this.dialogos.contado = !0))
                : (this.snackbars.agregarProductos = !0);
            },
            onApartado: function () {
              this.$refs.listaDeProductos.totalVenta
                ? ((this.datosVenta.total =
                    this.$refs.listaDeProductos.totalVenta),
                  (this.datosVenta.lista = o()(
                    this.$refs.listaDeProductos.listaDeProductos
                  )),
                  (this.dialogos.apartado = !0))
                : (this.snackbars.agregarProductos = !0);
            },
            onCancelarVenta: function () {
              (this.dialogos.confirmarEliminacion = !1),
                this.$refs.listaDeProductos.cancelarVenta();
            },
          },
        },
        U = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-layout",
              [
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a("dialogo-busqueda-producto", {
                      attrs: { mostrar: e.dialogos.buscar },
                      on: {
                        "producto-seleccionado":
                          e.onProductoSeleccionadoDesdeBusqueda,
                        "cerrar-dialogo": function (t) {
                          e.dialogos.buscar = !1;
                        },
                      },
                    }),
                    e._v(" "),
                    a("lista-de-productos", {
                      ref: "listaDeProductos",
                      on: {
                        "buscar-producto": function (t) {
                          e.mostrarDialogoParaBuscarProducto();
                        },
                        "producto-no-existente": e.onProductoNoExistente,
                      },
                    }),
                    e._v(" "),
                    a("dialogo-venta-contado", {
                      ref: "dialogoVentaContado",
                      attrs: {
                        mostrar: e.dialogos.contado && !e.dialogos.nuevoCliente,
                        datosVenta: e.datosVenta,
                      },
                      on: {
                        "error-pago-incompleto": e.onErrorPagoIncompleto,
                        "no-hay-cliente": e.onErrorNoCliente,
                        "venta-realizada": e.onVentaContadoRealizada,
                        "cerrar-dialogo": function (t) {
                          e.dialogos.contado = !1;
                        },
                        "agregar-cliente": e.onAgregarCliente,
                      },
                    }),
                    e._v(" "),
                    a("dialogo-apartado", {
                      ref: "dialogoApartado",
                      attrs: {
                        mostrar:
                          e.dialogos.apartado && !e.dialogos.nuevoCliente,
                        datosVenta: e.datosVenta,
                      },
                      on: {
                        "error-pago-excedido": e.onErrorPagoExcedido,
                        "no-hay-cliente": e.onErrorNoCliente,
                        "no-hay-fecha": e.onErrorNoFecha,
                        "apartado-realizado": e.onApartadoRealizado,
                        "cerrar-dialogo": function (t) {
                          e.dialogos.apartado = !1;
                        },
                        "agregar-cliente": e.onAgregarCliente,
                      },
                    }),
                    e._v(" "),
                    a("dialogo-confirmacion-vaciar-lista", {
                      attrs: { mostrar: e.dialogos.confirmarEliminacion },
                      on: {
                        "cerrar-dialogo": function (t) {
                          e.dialogos.confirmarEliminacion = !1;
                        },
                        confirmado: e.onCancelarVenta,
                      },
                    }),
                    e._v(" "),
                    a("formulario-nuevo-cliente", {
                      attrs: { mostrar: e.dialogos.nuevoCliente },
                      on: {
                        "cerrar-dialogo": function (t) {
                          e.dialogos.nuevoCliente = !1;
                        },
                        "cliente-guardado": e.onClienteGuardado,
                      },
                    }),
                    e._v(" "),
                    a("speed-dial", {
                      on: {
                        "venta-contado": function (t) {
                          e.onVentaContado();
                        },
                        apartado: function (t) {
                          e.onApartado();
                        },
                        "cancelar-venta": function (t) {
                          e.mostrarDialogoConfirmacionSiEsNecesario();
                        },
                      },
                    }),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 5e3, top: !0, right: !0 },
                    model: {
                      value: e.snackbars.ventaCorrecta,
                      callback: function (t) {
                        e.$set(e.snackbars, "ventaCorrecta", t);
                      },
                      expression: "snackbars.ventaCorrecta",
                    },
                  },
                  [
                    e._v("\n    Venta realizada correctamente\n    "),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.ventaCorrecta = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 5e3, top: !0, right: !0 },
                    model: {
                      value: e.snackbars.apartadoCorrecto,
                      callback: function (t) {
                        e.$set(e.snackbars, "apartadoCorrecto", t);
                      },
                      expression: "snackbars.apartadoCorrecto",
                    },
                  },
                  [
                    e._v("\n    Apartado realizado correctamente\n    "),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.apartadoCorrecto = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 2e3, top: !0, right: !0 },
                    model: {
                      value: e.snackbars.productoNoExistente,
                      callback: function (t) {
                        e.$set(e.snackbars, "productoNoExistente", t);
                      },
                      expression: "snackbars.productoNoExistente",
                    },
                  },
                  [
                    e._v("\n    El producto no existe\n    "),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.productoNoExistente = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 2e3, top: !0, right: !0 },
                    model: {
                      value: e.snackbars.pagoCliente,
                      callback: function (t) {
                        e.$set(e.snackbars, "pagoCliente", t);
                      },
                      expression: "snackbars.pagoCliente",
                    },
                  },
                  [
                    e._v(
                      "\n    El pago del cliente debe ser mayor o igual que el total\n    "
                    ),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.pagoCliente = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 2e3, top: !0, right: !0 },
                    model: {
                      value: e.snackbars.seleccionarCliente,
                      callback: function (t) {
                        e.$set(e.snackbars, "seleccionarCliente", t);
                      },
                      expression: "snackbars.seleccionarCliente",
                    },
                  },
                  [
                    e._v("\n    Elige un cliente para continuar\n    "),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.seleccionarCliente = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 2e3, top: !0, right: !0 },
                    model: {
                      value: e.snackbars.seleccionarFecha,
                      callback: function (t) {
                        e.$set(e.snackbars, "seleccionarFecha", t);
                      },
                      expression: "snackbars.seleccionarFecha",
                    },
                  },
                  [
                    e._v(
                      "\n    Elige la fecha en la que el apartado vence\n    "
                    ),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.seleccionarFecha = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 2e3, top: !0, right: !0 },
                    model: {
                      value: e.snackbars.agregarProductos,
                      callback: function (t) {
                        e.$set(e.snackbars, "agregarProductos", t);
                      },
                      expression: "snackbars.agregarProductos",
                    },
                  },
                  [
                    e._v("\n    Para vender necesitas agregar productos\n    "),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.agregarProductos = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 2e3, top: !0, right: !0 },
                    model: {
                      value: e.snackbars.pagoExcedido,
                      callback: function (t) {
                        e.$set(e.snackbars, "pagoExcedido", t);
                      },
                      expression: "snackbars.pagoExcedido",
                    },
                  },
                  [
                    e._v(
                      "\n    El anticipo debe ser menor al pago total\n    "
                    ),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.pagoExcedido = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        B = a("VU/8")(z, U, !1, null, null, null);
      t.default = B.exports;
    },
    "1XAE": function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("Xxa5"),
        o = a.n(r),
        n = a("exGp"),
        i = a.n(n),
        s = a("8o1w"),
        c = a("z4sG"),
        l = a("NHnr"),
        d = a("65o/"),
        u = {
          watch: {
            tipoReporte: function () {
              this.$nextTick(
                this.refrescarReporteDependiendoDelTipoSeleccionado
              );
            },
          },
          computed: {
            total: function () {
              return null === this.reporte.VentasContado ||
                void 0 === this.reporte.VentasContado
                ? 0
                : this.reporte.VentasContado +
                    this.reporte.Anticipos +
                    this.reporte.Abonos +
                    this.reporte.Ingresos -
                    this.reporte.Egresos;
            },
          },
          data: function () {
            return {
              cargandoListaDeUsuarios: !1,
              usuarios: [],
              usuarioSeleccionado: {},
              tipoReporte: "general",
              cargando: !1,
              ultimaFechaInicio: null,
              ultimaFechaFin: null,
              reporte: {
                VentasContado: null,
                Anticipos: null,
                Abonos: null,
                Ingresos: null,
                Egresos: null,
              },
            };
          },
          components: { SeleccionadorFechas: c.a },
          beforeMount: function () {
            l.EventBus.$emit("ponerTitulo", "Reporte de caja"),
              this.obtenerListaDeUsuariosSiEstaVacia();
          },
          methods: {
            onUsuarioCambiado: function (e) {
              this.refrescarReporteConUsuario({
                inicio: this.ultimaFechaInicio,
                fin: this.ultimaFechaFin,
                idUsuario: e.Numero,
              });
            },
            obtenerListaDeUsuariosSiEstaVacia: function () {
              this.usuarios.length <= 0 && this.obtenerListaDeUsuarios();
            },
            obtenerListaDeUsuarios: function () {
              var e = this;
              (this.cargandoListaDeUsuarios = !0),
                s.b.get("usuarios").then(function (t) {
                  (e.cargandoListaDeUsuarios = !1), (e.usuarios = t);
                });
            },
            imprimir: function () {
              var e = this;
              return i()(
                o.a.mark(function t() {
                  return o.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              "usuario" !== e.tipoReporte ||
                              !e.usuarioSeleccionado.Numero
                            ) {
                              t.next = 5;
                              break;
                            }
                            return (
                              (t.next = 3),
                              d.a.imprimirReporteCaja(
                                e.ultimaFechaInicio,
                                e.ultimaFechaFin,
                                e.usuarioSeleccionado.Numero
                              )
                            );
                          case 3:
                            t.next = 7;
                            break;
                          case 5:
                            return (
                              (t.next = 7),
                              d.a.imprimirReporteCaja(
                                e.ultimaFechaInicio,
                                e.ultimaFechaFin,
                                null
                              )
                            );
                          case 7:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
            comprobarFechasYRefrescarSiEsNecesario: function (e) {
              this.refrescarReporteDependiendoDelTipoSeleccionado(e);
            },
            refrescarReporteDependiendoDelTipoSeleccionado: function (e) {
              if (e) {
                var t = e.inicio,
                  a = e.fin;
                t &&
                  a &&
                  ((this.ultimaFechaInicio = t), (this.ultimaFechaFin = a));
              }
              "usuario" === this.tipoReporte && this.usuarioSeleccionado.Numero
                ? this.refrescarReporteConUsuario({
                    inicio: this.ultimaFechaInicio,
                    fin: this.ultimaFechaFin,
                    idUsuario: this.usuarioSeleccionado.Numero,
                  })
                : this.refrescarReporte({
                    inicio: this.ultimaFechaInicio,
                    fin: this.ultimaFechaFin,
                  });
            },
            refrescarReporte: function (e) {
              var t = this,
                a = e.inicio,
                r = e.fin;
              (this.cargando = !0),
                (this.ultimaFechaInicio = a),
                (this.ultimaFechaFin = r),
                s.b.get("reporte/caja/" + a + "/" + r).then(function (e) {
                  (t.reporte = e), (t.cargando = !1);
                });
            },
            refrescarReporteConUsuario: function (e) {
              var t = this,
                a = e.inicio,
                r = e.fin,
                o = e.idUsuario;
              (this.cargando = !0),
                (this.ultimaFechaInicio = a),
                (this.ultimaFechaFin = r),
                s.b
                  .get("reporte/caja/" + a + "/" + r + "/" + o)
                  .then(function (e) {
                    (t.reporte = e), (t.cargando = !1);
                  });
            },
          },
        },
        v = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a("seleccionador-fechas", {
                      on: { cambio: e.comprobarFechasYRefrescarSiEsNecesario },
                    }),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-flex",
                  { attrs: { xs12: "", sm3: "" } },
                  [
                    a(
                      "v-radio-group",
                      {
                        attrs: { label: "Tipo de reporte" },
                        model: {
                          value: e.tipoReporte,
                          callback: function (t) {
                            e.tipoReporte = t;
                          },
                          expression: "tipoReporte",
                        },
                      },
                      [
                        a("v-radio", {
                          attrs: { label: "General", value: "general" },
                        }),
                        e._v(" "),
                        a("v-radio", {
                          attrs: {
                            loading: !0,
                            label: "Por usuario",
                            value: "usuario",
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-flex",
                  { attrs: { xs12: "", sm9: "" } },
                  [
                    a(
                      "v-slide-y-transition",
                      [
                        a("v-select", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: "usuario" === e.tipoReporte,
                              expression: "tipoReporte === 'usuario'",
                            },
                          ],
                          attrs: {
                            loading: e.cargandoListaDeUsuarios,
                            items: e.usuarios,
                            label: "Seleccione un usuario",
                            "item-value": "Numero",
                            "return-object": "",
                          },
                          on: { change: e.onUsuarioCambiado },
                          scopedSlots: e._u([
                            {
                              key: "selection",
                              fn: function (t) {
                                return [
                                  a("v-subheader", [
                                    e._v(
                                      e._s(t.item.Nombre) +
                                        " - #" +
                                        e._s(t.item.Numero)
                                    ),
                                  ]),
                                ];
                              },
                            },
                            {
                              key: "item",
                              fn: function (t) {
                                return [
                                  a("span", [
                                    e._v(
                                      e._s(t.item.Nombre) +
                                        " - #" +
                                        e._s(t.item.Numero)
                                    ),
                                  ]),
                                ];
                              },
                            },
                          ]),
                          model: {
                            value: e.usuarioSeleccionado,
                            callback: function (t) {
                              e.usuarioSeleccionado = t;
                            },
                            expression: "usuarioSeleccionado",
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a("v-flex", { attrs: { xs12: "" } }, [
                  a("h1", [
                    a("span", { staticClass: "headline" }, [
                      e._v(e._s(e._f("currency")(e.reporte.VentasContado))),
                    ]),
                    e._v(" "),
                    a("span", { staticClass: "subheading" }, [
                      e._v("Ventas al contado"),
                    ]),
                  ]),
                ]),
                e._v(" "),
                a("v-flex", { attrs: { xs12: "" } }, [
                  a("h1", [
                    a("span", { staticClass: "headline" }, [
                      e._v("+" + e._s(e._f("currency")(e.reporte.Anticipos))),
                    ]),
                    e._v(" "),
                    a("span", { staticClass: "subheading" }, [
                      e._v("Anticipo de apartados"),
                    ]),
                  ]),
                ]),
                e._v(" "),
                a("v-flex", { attrs: { xs12: "" } }, [
                  a("h1", [
                    a("span", { staticClass: "headline" }, [
                      e._v("+" + e._s(e._f("currency")(e.reporte.Abonos))),
                    ]),
                    e._v(" "),
                    a("span", { staticClass: "subheading" }, [e._v("Abonos")]),
                  ]),
                ]),
                e._v(" "),
                a("v-flex", { attrs: { xs12: "" } }, [
                  a("h1", [
                    a("span", { staticClass: "headline" }, [
                      e._v("+" + e._s(e._f("currency")(e.reporte.Ingresos))),
                    ]),
                    e._v(" "),
                    a("span", { staticClass: "subheading" }, [
                      e._v("Ingresos"),
                    ]),
                  ]),
                ]),
                e._v(" "),
                a("v-flex", { attrs: { xs12: "" } }, [
                  a("h1", [
                    a("span", { staticClass: "headline" }, [
                      e._v("−" + e._s(e._f("currency")(e.reporte.Egresos))),
                    ]),
                    e._v(" "),
                    a("span", { staticClass: "subheading" }, [e._v("Egresos")]),
                  ]),
                ]),
                e._v(" "),
                a(
                  "v-flex",
                  { attrs: { xs12: "", sm4: "" } },
                  [a("v-divider")],
                  1
                ),
                e._v(" "),
                a("v-flex", { attrs: { xs12: "" } }, [
                  a("h1", [
                    a("span", { staticClass: "headline" }, [
                      e._v(e._s(e._f("currency")(e.total))),
                    ]),
                    e._v(" "),
                    a("span", { staticClass: "subheading" }, [
                      e._v("Total en caja"),
                    ]),
                  ]),
                ]),
                e._v(" "),
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a(
                      "v-btn",
                      {
                        attrs: {
                          loading: e.cargando,
                          small: "",
                          color: "success",
                        },
                        on: { click: e.imprimir },
                      },
                      [e._v("Imprimir")]
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        p = a("VU/8")(u, v, !1, null, null, null);
      t.default = p.exports;
    },
    "2GAs": function (e, t) {},
    "2tSW": function (e, t, a) {
      e.exports = a.p + "img/que-hacer.c1d47a0.png";
    },
    "3jGX": function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("c/Tr"),
        o = a.n(r),
        n = a("sXai"),
        i = a("z4sG"),
        s = a("JgzN"),
        c = a("976E"),
        l = a("98sZ"),
        d = a("PiRI"),
        u = a("8o1w"),
        v = a("NHnr"),
        p = a("MRIW"),
        m = {
          data: function () {
            return {
              cargandoMeses: !1,
              cargandoAnios: !1,
              aniosParaGraficas: [],
              aniosSeleccionados: [],
              mesesParaGraficas: [],
              anioSeleccionadoParaGraficaPorMes: null,
              mesSeleccionadoParaGraficaPorMes: {},
              productosMasVendidos: [],
              productosMenosVendidos: [],
              productosNuncaVendidos: [],
            };
          },
          watch: {
            aniosSeleccionados: function (e) {
              this.$refs.graficaVentasAnio.setAnios(o()(e));
            },
            anioSeleccionadoParaGraficaPorMes: function () {
              this.obtenerMesesParaGraficas();
            },
            mesSeleccionadoParaGraficaPorMes: {
              handler: function () {
                this.$refs.graficaVentasMes.setAnioYMes(
                  this.anioSeleccionadoParaGraficaPorMes,
                  this.mesSeleccionadoParaGraficaPorMes.mes
                );
              },
              deep: !0,
            },
          },
          methods: {
            obtenerProductosNuncaVendidos: function () {
              var e = this;
              u.b.get("productos/nunca/vendidos/al/contado").then(function (t) {
                e.productosNuncaVendidos = t;
              });
            },
            obtenerAniosParaGraficas: function () {
              var e = this;
              return (
                (this.cargandoAnios = !0),
                u.b.get("anios/graficas/ventas/contado").then(function (t) {
                  (e.cargandoAnios = !1), (e.aniosParaGraficas = t);
                })
              );
            },
            obtenerMesesParaGraficas: function () {
              var e = this;
              this.anioSeleccionadoParaGraficaPorMes &&
                ((this.cargandoMeses = !0),
                u.b
                  .get(
                    "meses/graficas/ventas/contado/anio/" +
                      this.anioSeleccionadoParaGraficaPorMes
                  )
                  .then(function (t) {
                    t.sort(function (e, t) {
                      return e - t;
                    }),
                      (t = t.map(function (e) {
                        return { mes: e, etiqueta: p.e[parseInt(e) - 1] };
                      })),
                      (e.cargandoMeses = !1),
                      (e.mesesParaGraficas = t);
                  }));
            },
            consultarProductosMasVendidos: function (e) {
              var t = this,
                a = e.inicio,
                r = e.fin;
              u.b
                .get("productos/mas/vendidos/" + a + "/" + r)
                .then(function (e) {
                  t.productosMasVendidos = e;
                });
            },
            consultarProductosMenosVendidos: function (e) {
              var t = this,
                a = e.inicio,
                r = e.fin;
              u.b
                .get("productos/menos/vendidos/" + a + "/" + r)
                .then(function (e) {
                  t.productosMenosVendidos = e;
                });
            },
          },
          beforeMount: function () {
            var e = this;
            this.obtenerAniosParaGraficas().then(function () {
              e.obtenerProductosNuncaVendidos();
            }),
              v.EventBus.$emit("ponerTitulo", "Gráficas y estadísticas");
          },
          components: {
            Publicidad: a("nBfo").a,
            VentasAnio: d.a,
            VentasMes: n.a,
            SeleccionadorFechas: i.a,
            ProductosMasVendidos: s.a,
            ProductosNuncaVendidos: l.a,
            ProductosMenosVendidos: c.a,
          },
        },
        f = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-container",
              { attrs: { fluid: "", "grid-list-lg": "" } },
              [
                a(
                  "v-layout",
                  { attrs: { row: "", wrap: "" } },
                  [
                    a(
                      "v-flex",
                      { attrs: { xs12: "" } },
                      [
                        a(
                          "v-card",
                          [
                            a("v-card-title", [
                              a("h1", { staticClass: "title" }, [
                                e._v("Ventas por año"),
                              ]),
                            ]),
                            e._v(" "),
                            a(
                              "v-card-text",
                              [
                                a("v-combobox", {
                                  attrs: {
                                    loading: e.cargandoAnios,
                                    items: e.aniosParaGraficas,
                                    label:
                                      "Seleccione uno o más años para comparar",
                                    chips: "",
                                    multiple: "",
                                  },
                                  scopedSlots: e._u([
                                    {
                                      key: "selection",
                                      fn: function (t) {
                                        return [
                                          a(
                                            "v-chip",
                                            {
                                              key: t.item,
                                              staticClass: "chip--select-multi",
                                              attrs: {
                                                selected: t.selected,
                                                disabled: t.disabled,
                                              },
                                              on: {
                                                input: function (e) {
                                                  t.parent.selectItem(t.item);
                                                },
                                              },
                                            },
                                            [
                                              e._v(
                                                "\n                " +
                                                  e._s(t.item) +
                                                  "\n              "
                                              ),
                                            ]
                                          ),
                                        ];
                                      },
                                    },
                                  ]),
                                  model: {
                                    value: e.aniosSeleccionados,
                                    callback: function (t) {
                                      e.aniosSeleccionados = t;
                                    },
                                    expression: "aniosSeleccionados",
                                  },
                                }),
                                e._v(" "),
                                a("ventas-anio", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: e.aniosSeleccionados.length > 0,
                                      expression:
                                        "aniosSeleccionados.length > 0",
                                    },
                                  ],
                                  ref: "graficaVentasAnio",
                                }),
                                e._v(" "),
                                a(
                                  "v-alert",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: e.aniosSeleccionados.length <= 0,
                                        expression:
                                          "aniosSeleccionados.length <= 0",
                                      },
                                    ],
                                    attrs: { value: "true", type: "info" },
                                  },
                                  [
                                    e._v(
                                      "\n            Seleccione uno o más años para mostrar la gráfica\n          "
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-flex",
                      { attrs: { xs12: "" } },
                      [
                        a(
                          "v-card",
                          [
                            a(
                              "v-card-text",
                              [
                                a(
                                  "v-flex",
                                  { attrs: { xs12: "" } },
                                  [a("Publicidad")],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-flex",
                      { attrs: { xs12: "" } },
                      [
                        a(
                          "v-card",
                          [
                            a("v-card-title", [
                              a("h1", { staticClass: "title" }, [
                                e._v("Ventas por mes"),
                              ]),
                            ]),
                            e._v(" "),
                            a(
                              "v-card-text",
                              [
                                a(
                                  "v-layout",
                                  { attrs: { row: "", wrap: "" } },
                                  [
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "", sm6: "" } },
                                      [
                                        a("v-select", {
                                          attrs: {
                                            loading: e.cargandoAnios,
                                            items: e.aniosParaGraficas,
                                            label: "Seleccione un año",
                                          },
                                          model: {
                                            value:
                                              e.anioSeleccionadoParaGraficaPorMes,
                                            callback: function (t) {
                                              e.anioSeleccionadoParaGraficaPorMes =
                                                t;
                                            },
                                            expression:
                                              "anioSeleccionadoParaGraficaPorMes",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "", sm6: "" } },
                                      [
                                        a("v-select", {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value:
                                                e.anioSeleccionadoParaGraficaPorMes,
                                              expression:
                                                "anioSeleccionadoParaGraficaPorMes",
                                            },
                                          ],
                                          attrs: {
                                            loading: e.cargandoMeses,
                                            items: e.mesesParaGraficas,
                                            "return-object": "",
                                            "item-text": "etiqueta",
                                            "item-value": "mes",
                                            label: "Ahora un mes",
                                          },
                                          model: {
                                            value:
                                              e.mesSeleccionadoParaGraficaPorMes,
                                            callback: function (t) {
                                              e.mesSeleccionadoParaGraficaPorMes =
                                                t;
                                            },
                                            expression:
                                              "mesSeleccionadoParaGraficaPorMes",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                e._v(" "),
                                a("ventas-mes", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value:
                                        void 0 !==
                                        e.mesSeleccionadoParaGraficaPorMes.mes,
                                      expression:
                                        "mesSeleccionadoParaGraficaPorMes.mes !== undefined",
                                    },
                                  ],
                                  ref: "graficaVentasMes",
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-flex",
                      { attrs: { xs12: "" } },
                      [
                        a(
                          "v-card",
                          [
                            a("v-card-title", [
                              a("h1", { staticClass: "title" }, [
                                e._v("Productos más vendidos"),
                              ]),
                            ]),
                            e._v(" "),
                            a(
                              "v-card-text",
                              [
                                a("seleccionador-fechas", {
                                  on: {
                                    cambio: e.consultarProductosMasVendidos,
                                  },
                                }),
                                e._v(" "),
                                a("productos-mas-vendidos", {
                                  attrs: { productos: e.productosMasVendidos },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-flex",
                      { attrs: { xs12: "" } },
                      [
                        a(
                          "v-card",
                          [
                            a("v-card-title", [
                              a("h1", { staticClass: "title" }, [
                                e._v("Productos menos vendidos"),
                              ]),
                            ]),
                            e._v(" "),
                            a(
                              "v-card-text",
                              [
                                a("seleccionador-fechas", {
                                  on: {
                                    cambio: e.consultarProductosMenosVendidos,
                                  },
                                }),
                                e._v(" "),
                                a("productos-menos-vendidos", {
                                  attrs: {
                                    productos: e.productosMenosVendidos,
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-flex",
                      { attrs: { xs12: "" } },
                      [
                        a(
                          "v-card",
                          [
                            a("v-card-title", [
                              a("h1", { staticClass: "title" }, [
                                e._v("Productos nunca vendidos"),
                              ]),
                            ]),
                            e._v(" "),
                            a(
                              "v-card-text",
                              [
                                a("p", [
                                  e._v(
                                    "Los productos que nunca han sido vendidos al contado"
                                  ),
                                ]),
                                e._v(" "),
                                a("productos-nunca-vendidos", {
                                  attrs: {
                                    productos: e.productosNuncaVendidos,
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        h = a("VU/8")(m, f, !1, null, null, null);
      t.default = h.exports;
    },
    "44td": function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("8o1w"),
        o = a("NHnr"),
        n = {
          name: "HacerInventario",
          beforeMount: function () {
            var e = this;
            o.EventBus.$emit("ponerTitulo", "Hacer inventario"),
              r.b.get("ajustes/otros").then(function (t) {
                (e.modoDeLectura = t.ModoLecturaProductos),
                  e.enfocarInputParaCantidadDeProductos();
              });
          },
          data: function () {
            return {
              mostrarLog: !1,
              codigoEscaneado: "",
              encabezados: [
                { text: "No.", value: "Numero" },
                { text: "Descripción", value: "Descripcion" },
                { text: "Código de barras", value: "CodigoBarras" },
                { text: "Existencia", value: "Existencia" },
                { text: "Encontrados", value: "Encontrados" },
                { text: "Faltantes", sortable: !1 },
              ],
              cantidadDeProductosParaVerificar: null,
              productosParaVerificar: [],
              cargando: !1,
              log: [],
              modoDeLectura: "",
            };
          },
          methods: {
            volverASeleccionarProductos: function () {
              (this.productosParaVerificar = []),
                (this.log = []),
                this.enfocarInputParaCantidadDeProductos();
            },
            enfocarInputParaBuscarProducto: function () {
              this.$nextTick(this.$refs.inputProducto.focus);
            },
            enfocarInputParaCantidadDeProductos: function () {
              this.$nextTick(this.$refs.cantidadProductos.focus);
            },
            aumentarEncontradoSiExiste: function (e) {
              if ("" !== this.modoDeLectura) {
                var t = -1;
                switch (this.modoDeLectura) {
                  case "codigo":
                    t = this.productosParaVerificar.findIndex(function (t) {
                      return t.CodigoBarras === e;
                    });
                    break;
                  case "numero":
                    t = this.productosParaVerificar.findIndex(function (t) {
                      return t.Numero === e;
                    });
                }
                if (-1 !== t) {
                  var a = this.productosParaVerificar[t];
                  a.Encontrados < a.Existencia
                    ? a.Encontrados++
                    : this.log.push(
                        "Se encontró el producto " +
                          a.Descripcion +
                          " con el código " +
                          e +
                          ", pero ya estaba completo"
                      );
                } else
                  this.log.push(
                    "Se intentó buscar el producto con el código " +
                      e +
                      ", pero no existe"
                  );
                this.codigoEscaneado = "";
              }
            },
            obtenerProductosParaVerificar: function () {
              var e = this;
              this.cantidadDeProductosParaVerificar > 0 &&
                ((this.log = []),
                (this.cargando = !0),
                r.b
                  .get(
                    "productos/aleatorios/" +
                      this.cantidadDeProductosParaVerificar
                  )
                  .then(function (t) {
                    (e.cargando = !1),
                      (e.productosParaVerificar = t.map(function (e) {
                        return {
                          Numero: e.Numero,
                          Descripcion: e.Descripcion,
                          CodigoBarras: e.CodigoBarras,
                          Existencia: e.Existencia,
                          Encontrados: 0,
                        };
                      })),
                      e.enfocarInputParaBuscarProducto();
                  }));
            },
          },
        },
        i = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                a(
                  "v-layout",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.productosParaVerificar.length <= 0,
                        expression: "productosParaVerificar.length <= 0",
                      },
                    ],
                    attrs: { row: "", wrap: "" },
                  },
                  [
                    a(
                      "v-flex",
                      { attrs: { xs12: "" } },
                      [
                        a("v-alert", { attrs: { value: !0, type: "info" } }, [
                          e._v(
                            "\n        Seleccione una cantidad de productos que desea verificar o contar;\n        serán seleccionados aleatoriamente\n      "
                          ),
                        ]),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-flex",
                      { attrs: { xs12: "", sm6: "" } },
                      [
                        a("v-text-field", {
                          ref: "cantidadProductos",
                          attrs: {
                            label: "Productos  para verificar. P.ej.: 50",
                            type: "number",
                            hint: "¿Cuántos productos va a verificar?",
                            required: "",
                          },
                          on: {
                            keyup: function (t) {
                              if (
                                !("button" in t) &&
                                e._k(t.keyCode, "enter", 13, t.key, "Enter")
                              )
                                return null;
                              e.obtenerProductosParaVerificar();
                            },
                          },
                          model: {
                            value: e.cantidadDeProductosParaVerificar,
                            callback: function (t) {
                              e.cantidadDeProductosParaVerificar = e._n(t);
                            },
                            expression: "cantidadDeProductosParaVerificar",
                          },
                        }),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: {
                              loading: e.cargando,
                              dark: "",
                              small: "",
                              color: "green darken-1",
                            },
                            nativeOn: {
                              click: function (t) {
                                e.obtenerProductosParaVerificar();
                              },
                            },
                          },
                          [e._v("\n        Comenzar\n      ")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-layout",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.productosParaVerificar.length > 0,
                        expression: "productosParaVerificar.length > 0",
                      },
                    ],
                    attrs: { row: "", wrap: "" },
                  },
                  [
                    a(
                      "v-flex",
                      { attrs: { xs12: "" } },
                      [
                        a(
                          "v-btn",
                          {
                            attrs: {
                              loading: e.cargando,
                              dark: "",
                              small: "",
                              color: "green darken-1",
                            },
                            nativeOn: {
                              click: function (t) {
                                e.volverASeleccionarProductos();
                              },
                            },
                          },
                          [
                            a("v-icon", [e._v("arrow_back")]),
                            e._v(
                              "\n        Volver a seleccionar productos\n      "
                            ),
                          ],
                          1
                        ),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: {
                              loading: e.cargando,
                              dark: "",
                              small: "",
                              color: "info",
                            },
                            nativeOn: {
                              click: function (t) {
                                e.obtenerProductosParaVerificar();
                              },
                            },
                          },
                          [
                            a("v-icon", [e._v("refresh")]),
                            e._v("\n        Refrescar\n      "),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-flex",
                      { attrs: { xs12: "", sm6: "" } },
                      [
                        a("v-text-field", {
                          ref: "inputProducto",
                          attrs: {
                            label:
                              "Escanear código de barras o número de producto",
                            type: "number",
                            hint: "Utilice el lector de códigos, o escriba el número y presione Enter",
                            required: "",
                          },
                          on: {
                            keyup: function (t) {
                              if (
                                !("button" in t) &&
                                e._k(t.keyCode, "enter", 13, t.key, "Enter")
                              )
                                return null;
                              e.aumentarEncontradoSiExiste(e.codigoEscaneado);
                            },
                          },
                          model: {
                            value: e.codigoEscaneado,
                            callback: function (t) {
                              e.codigoEscaneado = t;
                            },
                            expression: "codigoEscaneado",
                          },
                        }),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-flex",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: e.log.length > 0,
                            expression: "log.length > 0",
                          },
                        ],
                        attrs: { xs12: "" },
                      },
                      [
                        a(
                          "v-btn",
                          {
                            attrs: { dark: "", small: "", color: "error" },
                            nativeOn: {
                              click: function (t) {
                                e.mostrarLog = !e.mostrarLog;
                              },
                            },
                          },
                          [
                            a("v-icon", [
                              e._v(
                                e._s(
                                  e.mostrarLog ? "expand_less" : "expand_more"
                                )
                              ),
                            ]),
                            e._v(
                              "\n        " +
                                e._s(e.mostrarLog ? "Ocultar" : "Mostrar") +
                                " registro de errores\n      "
                            ),
                          ],
                          1
                        ),
                        e._v(" "),
                        a(
                          "v-card",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: e.mostrarLog,
                                expression: "mostrarLog",
                              },
                            ],
                            staticStyle: {
                              "max-height": "200px",
                              "overflow-y": "scroll",
                            },
                          },
                          [
                            a("v-card-text", [
                              a(
                                "ul",
                                { staticClass: "lista-log" },
                                e._l(e.log, function (t, r) {
                                  return a("li", { key: r }, [e._v(e._s(t))]);
                                }),
                                0
                              ),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-flex",
                      { attrs: { xs12: "" } },
                      [
                        a("v-data-table", {
                          staticClass: "elevation-1",
                          attrs: {
                            loading: e.cargando,
                            headers: e.encabezados,
                            items: e.productosParaVerificar,
                            "hide-actions": "",
                          },
                          scopedSlots: e._u([
                            {
                              key: "items",
                              fn: function (t) {
                                return [
                                  a("td", [e._v(e._s(t.item.Numero))]),
                                  e._v(" "),
                                  a("td", [e._v(e._s(t.item.Descripcion))]),
                                  e._v(" "),
                                  a("td", [e._v(e._s(t.item.CodigoBarras))]),
                                  e._v(" "),
                                  a("td", [e._v(e._s(t.item.Existencia))]),
                                  e._v(" "),
                                  a("td", [
                                    a("strong", [
                                      e._v(e._s(t.item.Encontrados)),
                                    ]),
                                  ]),
                                  e._v(" "),
                                  a("td", [
                                    a("strong", [
                                      e._v(
                                        e._s(
                                          t.item.Existencia - t.item.Encontrados
                                        )
                                      ),
                                    ]),
                                  ]),
                                ];
                              },
                            },
                          ]),
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var s = a("VU/8")(
        n,
        i,
        !1,
        function (e) {
          a("d1G9");
        },
        "data-v-0c398172",
        null
      );
      t.default = s.exports;
    },
    "65o/": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return p;
      });
      var r = a("Xxa5"),
        o = a.n(r),
        n = a("BO1k"),
        i = a.n(n),
        s = a("exGp"),
        c = a.n(s),
        l = a("MRIW"),
        d = a("7+uW"),
        u = a("8o1w"),
        v = a("T7Zg"),
        p = {
          imprimirReporteCaja: function (e, t, r) {
            var n = this;
            return c()(
              o.a.mark(function s() {
                var c, l, p, m, f, h, g, b, A, _, x, k, C, E, y, P, w;
                return o.a.wrap(
                  function (o) {
                    for (;;)
                      switch ((o.prev = o.next)) {
                        case 0:
                          return (o.next = 2), u.b.get("valor/MODO_IMPRESION");
                        case 2:
                          if (((o.t0 = o.sent), "Impresora térmica" === o.t0)) {
                            o.next = 7;
                            break;
                          }
                          return (
                            d.default.$router.push({
                              name: "TicketDeCaja",
                              query: {
                                fechaInicio: e,
                                fechaFin: t,
                                usuario: r,
                              },
                            }),
                            o.abrupt("return")
                          );
                        case 7:
                          return (
                            (o.next = 9),
                            u.b.get("valor/SERIAL_PLUGIN_IMPRESION")
                          );
                        case 9:
                          return (
                            (c = o.sent),
                            (l = d.default.options.filters),
                            (o.next = 13),
                            u.b.get("ajustes/empresa")
                          );
                        case 13:
                          return (
                            (p = o.sent),
                            (m = "reporte/caja/" + e + "/" + t),
                            r && (m += "/" + r),
                            (o.next = 18),
                            u.b.get(m)
                          );
                        case 18:
                          return (
                            (f = o.sent), (o.next = 21), u.a.get("fechaYHora")
                          );
                        case 21:
                          return (
                            (h = o.sent),
                            (o.next = 24),
                            u.b.get("usuario/logueado")
                          );
                        case 24:
                          if (((g = o.sent), (b = {}), !r)) {
                            o.next = 30;
                            break;
                          }
                          return (o.next = 29), u.b.get("usuario/caja/" + r);
                        case 29:
                          b = o.sent;
                        case 30:
                          for (
                            A = a("jxSC"),
                              _ = new v.a(v.a.URL_PLUGIN_POR_DEFECTO, c)
                                .Iniciar()
                                .ImprimirImagenEnBase64(
                                  A,
                                  v.a.TAMAÑO_IMAGEN_NORMAL,
                                  320
                                )
                                .EstablecerAlineacion(v.a.ALINEACION_CENTRO)
                                .EstablecerEnfatizado(!0)
                                .EscribirTexto("Estado de caja\nTipo: ")
                                .EstablecerEnfatizado(!1),
                              b.Numero
                                ? _.EscribirTexto(
                                    "De #" + b.Numero + " " + b.Nombre
                                  )
                                : _.EscribirTexto("General"),
                              _.Feed(1)
                                .EstablecerEnfatizado(!0)
                                .EscribirTexto("Desde: ")
                                .EstablecerEnfatizado(!1)
                                .EscribirTexto(e)
                                .Feed(1)
                                .EstablecerEnfatizado(!0)
                                .EscribirTexto("Hasta: ")
                                .EstablecerEnfatizado(!1)
                                .EscribirTexto(t)
                                .Feed(1),
                              x = ["Nombre", "Direccion", "Telefono"],
                              k = !0,
                              C = !1,
                              E = void 0,
                              o.prev = 38,
                              y = i()(x);
                            !(k = (P = y.next()).done);
                            k = !0
                          )
                            (w = P.value),
                              p[w] && (_.EscribirTexto(p[w]), _.Feed(1));
                          o.next = 46;
                          break;
                        case 42:
                          (o.prev = 42),
                            (o.t1 = o.catch(38)),
                            (C = !0),
                            (E = o.t1);
                        case 46:
                          (o.prev = 46),
                            (o.prev = 47),
                            !k && y.return && y.return();
                        case 49:
                          if (((o.prev = 49), !C)) {
                            o.next = 52;
                            break;
                          }
                          throw E;
                        case 52:
                          return o.finish(49);
                        case 53:
                          return o.finish(46);
                        case 54:
                          return (
                            _.EstablecerEnfatizado(!1)
                              .EscribirTexto("Impreso por: ")
                              .EstablecerEnfatizado(!0)
                              .EscribirTexto(g.Nombre)
                              .Feed(1)
                              .EscribirTexto(l.fechaExpresiva(h))
                              .Feed(1)
                              .EscribirTexto("--------------------------\n")
                              .EstablecerEnfatizado(!1)
                              .EstablecerAlineacion(v.a.ALINEACION_IZQUIERDA)
                              .EscribirTexto("Ventas al contado\n")
                              .EstablecerAlineacion(v.a.ALINEACION_DERECHA)
                              .EscribirTexto(l.currency(f.VentasContado))
                              .Feed(1)
                              .EstablecerAlineacion(v.a.ALINEACION_IZQUIERDA)
                              .EscribirTexto("Anticipo de apartados\n")
                              .EstablecerAlineacion(v.a.ALINEACION_DERECHA)
                              .EscribirTexto(l.currency(f.Anticipos))
                              .Feed(1)
                              .EstablecerAlineacion(v.a.ALINEACION_IZQUIERDA)
                              .EscribirTexto("Abonos\n")
                              .EstablecerAlineacion(v.a.ALINEACION_DERECHA)
                              .EscribirTexto(l.currency(f.Abonos))
                              .Feed(1)
                              .EstablecerAlineacion(v.a.ALINEACION_IZQUIERDA)
                              .EscribirTexto("Ingresos\n")
                              .EstablecerAlineacion(v.a.ALINEACION_DERECHA)
                              .EscribirTexto(l.currency(f.Ingresos))
                              .Feed(1)
                              .EstablecerAlineacion(v.a.ALINEACION_IZQUIERDA)
                              .EscribirTexto("Egresos\n")
                              .EstablecerAlineacion(v.a.ALINEACION_DERECHA)
                              .EscribirTexto(l.currency(f.Egresos))
                              .Feed(1)
                              .EscribirTexto("--------------------------\n")
                              .EstablecerAlineacion(v.a.ALINEACION_DERECHA)
                              .EstablecerEnfatizado(!0)
                              .EscribirTexto("Total: ")
                              .EstablecerEnfatizado(!1)
                              .EscribirTexto(
                                l.currency(
                                  f.VentasContado +
                                    f.Anticipos +
                                    f.Abonos +
                                    f.Ingresos -
                                    f.Egresos
                                )
                              )
                              .Feed(1),
                            _.Pulso(48, 60, 120).CorteParcial().Corte(1),
                            (o.t2 = _),
                            (o.next = 59),
                            u.b.get("nombre/impresora")
                          );
                        case 59:
                          return (
                            (o.t3 = o.sent),
                            (o.next = 62),
                            o.t2.imprimirEn.call(o.t2, o.t3)
                          );
                        case 62:
                          return o.abrupt("return", o.sent);
                        case 63:
                        case "end":
                          return o.stop();
                      }
                  },
                  s,
                  n,
                  [
                    [38, 42, 46, 54],
                    [47, , 49, 53],
                  ]
                );
              })
            )();
          },
          imprimirTicketAbono: function (e, t) {
            var r = this;
            return c()(
              o.a.mark(function n() {
                var s, c, l, p, m, f, h, g, b, A, _, x, k, C, E, y, P, w, I, N;
                return o.a.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (r.next = 2), u.b.get("valor/MODO_IMPRESION");
                        case 2:
                          if (((r.t0 = r.sent), "Impresora térmica" === r.t0)) {
                            r.next = 7;
                            break;
                          }
                          return (
                            d.default.$router.push({
                              name: "TicketDeAbono",
                              params: { idApartado: t, idAbono: e },
                            }),
                            r.abrupt("return")
                          );
                        case 7:
                          return (
                            (r.next = 9),
                            u.b.get("valor/SERIAL_PLUGIN_IMPRESION")
                          );
                        case 9:
                          return (
                            (s = r.sent),
                            (c = d.default.options.filters),
                            (r.next = 13),
                            u.b.get("ajustes/empresa")
                          );
                        case 13:
                          return (
                            (l = r.sent),
                            (r.next = 16),
                            u.b.get("apartado/" + t)
                          );
                        case 16:
                          return (
                            (p = r.sent),
                            (r.next = 19),
                            u.b.get("abono/" + e + "/" + t)
                          );
                        case 19:
                          for (
                            m = r.sent,
                              f = a("jxSC"),
                              h = new v.a(v.a.URL_PLUGIN_POR_DEFECTO, s)
                                .Iniciar()
                                .ImprimirImagenEnBase64(
                                  f,
                                  v.a.TAMAÑO_IMAGEN_NORMAL,
                                  320
                                )
                                .EstablecerAlineacion(v.a.ALINEACION_CENTRO)
                                .EstablecerEnfatizado(!0)
                                .EscribirTexto("Ticket de abono #" + e + "\n")
                                .Feed(1),
                              g = ["Nombre", "Direccion", "Telefono"],
                              b = !0,
                              A = !1,
                              _ = void 0,
                              r.prev = 26,
                              x = i()(g);
                            !(b = (k = x.next()).done);
                            b = !0
                          )
                            (C = k.value),
                              l[C] && (h.EscribirTexto(l[C]), h.Feed(1));
                          r.next = 34;
                          break;
                        case 30:
                          (r.prev = 30),
                            (r.t1 = r.catch(26)),
                            (A = !0),
                            (_ = r.t1);
                        case 34:
                          (r.prev = 34),
                            (r.prev = 35),
                            !b && x.return && x.return();
                        case 37:
                          if (((r.prev = 37), !A)) {
                            r.next = 40;
                            break;
                          }
                          throw _;
                        case 40:
                          return r.finish(37);
                        case 41:
                          return r.finish(34);
                        case 42:
                          for (
                            h
                              .EstablecerEnfatizado(!1)
                              .EscribirTexto(c.fechaExpresiva(p.Fecha))
                              .Feed(1)
                              .DeshabilitarElModoDeCaracteresChinos()
                              .EscribirTexto("Lo atendió: ")
                              .EstablecerEnfatizado(!0)
                              .EscribirTexto(m.Usuario.Nombre)
                              .EstablecerEnfatizado(!1)
                              .Feed(1)
                              .EscribirTexto("Cliente: ")
                              .EstablecerEnfatizado(!0)
                              .EscribirTexto(p.Cliente.Nombre)
                              .EstablecerEnfatizado(!1)
                              .Feed(1)
                              .EstablecerAlineacion(v.a.ALINEACION_CENTRO)
                              .EscribirTexto("--------------------------\n"),
                              E = !0,
                              y = !1,
                              P = void 0,
                              r.prev = 46,
                              w = i()(p.Productos);
                            !(E = (I = w.next()).done);
                            E = !0
                          )
                            (N = I.value),
                              h
                                .EstablecerAlineacion(v.a.ALINEACION_IZQUIERDA)
                                .EscribirTexto(N.Descripcion)
                                .Feed(1)
                                .EstablecerAlineacion(v.a.ALINEACION_DERECHA)
                                .EscribirTexto(
                                  N.Cantidad +
                                    " x " +
                                    c.currency(N.PrecioVenta) +
                                    " = " +
                                    c.currency(N.Cantidad * N.PrecioVenta)
                                )
                                .Feed(1);
                          r.next = 54;
                          break;
                        case 50:
                          (r.prev = 50),
                            (r.t2 = r.catch(46)),
                            (y = !0),
                            (P = r.t2);
                        case 54:
                          (r.prev = 54),
                            (r.prev = 55),
                            !E && w.return && w.return();
                        case 57:
                          if (((r.prev = 57), !y)) {
                            r.next = 60;
                            break;
                          }
                          throw P;
                        case 60:
                          return r.finish(57);
                        case 61:
                          return r.finish(54);
                        case 62:
                          return (
                            h
                              .EstablecerAlineacion(v.a.ALINEACION_CENTRO)
                              .EscribirTexto("--------------------------\n")
                              .EstablecerAlineacion(v.a.ALINEACION_DERECHA)
                              .EstablecerEnfatizado(!0)
                              .EscribirTexto("Total: ")
                              .EstablecerEnfatizado(!1)
                              .EscribirTexto(c.currency(p.Total))
                              .Feed(1)
                              .EstablecerEnfatizado(!0)
                              .EscribirTexto("Restante anterior: ")
                              .EstablecerEnfatizado(!1)
                              .EscribirTexto(
                                c.currency(
                                  p.Total - p.Abonado - p.Anticipo + m.Monto
                                )
                              )
                              .Feed(1)
                              .EstablecerEnfatizado(!0)
                              .EscribirTexto("Cantidad abonada: ")
                              .EstablecerEnfatizado(!1)
                              .EscribirTexto(c.currency(m.Monto))
                              .Feed(1)
                              .EstablecerEnfatizado(!0)
                              .EscribirTexto("Su pago: ")
                              .EstablecerEnfatizado(!1)
                              .EscribirTexto(c.currency(m.Pago))
                              .Feed(1)
                              .EstablecerEnfatizado(!0)
                              .EscribirTexto("Cambio: ")
                              .EstablecerEnfatizado(!1)
                              .EscribirTexto(c.currency(p.Pago - p.Anticipo))
                              .Feed(1)
                              .EstablecerEnfatizado(!0)
                              .EscribirTexto("Restante actual: ")
                              .EstablecerEnfatizado(!1)
                              .EscribirTexto(
                                c.currency(p.Total - p.Abonado - p.Anticipo)
                              )
                              .Feed(1),
                            l.MensajePersonal &&
                              h
                                .EstablecerAlineacion(v.a.ALINEACION_CENTRO)
                                .EstablecerEnfatizado(!0)
                                .EscribirTexto(l.MensajePersonal)
                                .Feed(1),
                            h.Pulso(48, 60, 120).CorteParcial().Corte(1),
                            (r.t3 = h),
                            (r.next = 68),
                            u.b.get("nombre/impresora")
                          );
                        case 68:
                          return (
                            (r.t4 = r.sent),
                            (r.next = 71),
                            r.t3.imprimirEn.call(r.t3, r.t4)
                          );
                        case 71:
                          return r.abrupt("return", r.sent);
                        case 72:
                        case "end":
                          return r.stop();
                      }
                  },
                  n,
                  r,
                  [
                    [26, 30, 34, 42],
                    [35, , 37, 41],
                    [46, 50, 54, 62],
                    [55, , 57, 61],
                  ]
                );
              })
            )();
          },
          imprimirTicketApartado: function (e) {
            var t = this;
            return c()(
              o.a.mark(function r() {
                var n, s, c, l, p, m, f, h, g, b, A, _, x, k, C, E, y, P, w;
                return o.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), u.b.get("valor/MODO_IMPRESION");
                        case 2:
                          if (((t.t0 = t.sent), "Impresora térmica" === t.t0)) {
                            t.next = 7;
                            break;
                          }
                          return (
                            d.default.$router.push({
                              name: "TicketDeApartado",
                              params: { idApartado: e },
                            }),
                            t.abrupt("return")
                          );
                        case 7:
                          return (
                            (t.next = 9),
                            u.b.get("valor/SERIAL_PLUGIN_IMPRESION")
                          );
                        case 9:
                          return (
                            (n = t.sent),
                            (s = d.default.options.filters),
                            (t.next = 13),
                            u.b.get("ajustes/empresa")
                          );
                        case 13:
                          return (
                            (c = t.sent),
                            (t.next = 16),
                            u.b.get("apartado/" + e)
                          );
                        case 16:
                          for (
                            l = t.sent,
                              p = a("jxSC"),
                              m = new v.a(v.a.URL_PLUGIN_POR_DEFECTO, n)
                                .Iniciar()
                                .ImprimirImagenEnBase64(
                                  p,
                                  v.a.TAMAÑO_IMAGEN_NORMAL,
                                  320
                                )
                                .EstablecerAlineacion(v.a.ALINEACION_CENTRO)
                                .EstablecerEnfatizado(!0)
                                .EscribirTexto(
                                  "Ticket de apartado #" + e + "\n"
                                )
                                .Feed(1),
                              f = ["Nombre", "Direccion", "Telefono"],
                              h = !0,
                              g = !1,
                              b = void 0,
                              t.prev = 23,
                              A = i()(f);
                            !(h = (_ = A.next()).done);
                            h = !0
                          )
                            (x = _.value),
                              c[x] && (m.EscribirTexto(c[x]), m.Feed(1));
                          t.next = 31;
                          break;
                        case 27:
                          (t.prev = 27),
                            (t.t1 = t.catch(23)),
                            (g = !0),
                            (b = t.t1);
                        case 31:
                          (t.prev = 31),
                            (t.prev = 32),
                            !h && A.return && A.return();
                        case 34:
                          if (((t.prev = 34), !g)) {
                            t.next = 37;
                            break;
                          }
                          throw b;
                        case 37:
                          return t.finish(34);
                        case 38:
                          return t.finish(31);
                        case 39:
                          for (
                            m
                              .EstablecerEnfatizado(!1)
                              .EscribirTexto(s.fechaExpresiva(l.Fecha))
                              .Feed(1)
                              .DeshabilitarElModoDeCaracteresChinos()
                              .EscribirTexto("Lo atendió: ")
                              .EstablecerEnfatizado(!0)
                              .EscribirTexto(l.Usuario.Nombre)
                              .EstablecerEnfatizado(!1)
                              .Feed(1)
                              .EscribirTexto("Cliente: ")
                              .EstablecerEnfatizado(!0)
                              .EscribirTexto(l.Cliente.Nombre)
                              .EstablecerEnfatizado(!1)
                              .Feed(1)
                              .EstablecerAlineacion(v.a.ALINEACION_CENTRO)
                              .EscribirTexto("--------------------------\n"),
                              k = !0,
                              C = !1,
                              E = void 0,
                              t.prev = 43,
                              y = i()(l.Productos);
                            !(k = (P = y.next()).done);
                            k = !0
                          )
                            (w = P.value),
                              m
                                .EstablecerAlineacion(v.a.ALINEACION_IZQUIERDA)
                                .EscribirTexto(w.Descripcion)
                                .Feed(1)
                                .EstablecerAlineacion(v.a.ALINEACION_DERECHA)
                                .EscribirTexto(
                                  w.Cantidad +
                                    " x " +
                                    s.currency(w.PrecioVenta) +
                                    " = " +
                                    s.currency(w.Cantidad * w.PrecioVenta)
                                )
                                .Feed(1);
                          t.next = 51;
                          break;
                        case 47:
                          (t.prev = 47),
                            (t.t2 = t.catch(43)),
                            (C = !0),
                            (E = t.t2);
                        case 51:
                          (t.prev = 51),
                            (t.prev = 52),
                            !k && y.return && y.return();
                        case 54:
                          if (((t.prev = 54), !C)) {
                            t.next = 57;
                            break;
                          }
                          throw E;
                        case 57:
                          return t.finish(54);
                        case 58:
                          return t.finish(51);
                        case 59:
                          return (
                            m
                              .EstablecerAlineacion(v.a.ALINEACION_CENTRO)
                              .EscribirTexto("--------------------------\n")
                              .EstablecerAlineacion(v.a.ALINEACION_DERECHA)
                              .EstablecerEnfatizado(!0)
                              .EscribirTexto("Total: ")
                              .EstablecerEnfatizado(!1)
                              .EscribirTexto(s.currency(l.Total))
                              .Feed(1)
                              .EstablecerEnfatizado(!0)
                              .EscribirTexto("Su pago: ")
                              .EstablecerEnfatizado(!1)
                              .EscribirTexto(s.currency(l.Pago))
                              .Feed(1)
                              .EstablecerEnfatizado(!0)
                              .EscribirTexto("Anticipo: ")
                              .EstablecerEnfatizado(!1)
                              .EscribirTexto(s.currency(l.Anticipo))
                              .Feed(1)
                              .EstablecerEnfatizado(!0)
                              .EscribirTexto("Cambio: ")
                              .EstablecerEnfatizado(!1)
                              .EscribirTexto(s.currency(l.Pago - l.Anticipo))
                              .Feed(1)
                              .EstablecerEnfatizado(!0)
                              .EscribirTexto("Restante: ")
                              .EstablecerEnfatizado(!1)
                              .EscribirTexto(
                                s.currency(l.Total - l.Anticipo - l.Abonado)
                              )
                              .Feed(1)
                              .EstablecerEnfatizado(!0)
                              .EscribirTexto("Nota: ")
                              .EstablecerEnfatizado(!1)
                              .EscribirTexto(
                                "no nos hacemos responsables de los articulos después de la fecha de vencimiento: " +
                                  s.fechaSinHora(l.FechaVencimiento)
                              )
                              .Feed(1)
                              .EstablecerAlineacion(v.a.ALINEACION_CENTRO)
                              .EscribirTexto("Firma del cliente\n\n\n")
                              .EscribirTexto("_________________________")
                              .Feed(1),
                            c.MensajePersonal &&
                              m
                                .EstablecerAlineacion(v.a.ALINEACION_CENTRO)
                                .EstablecerEnfatizado(!0)
                                .EscribirTexto(c.MensajePersonal)
                                .Feed(1),
                            m.Pulso(48, 60, 120).CorteParcial().Corte(1),
                            (t.t3 = m),
                            (t.next = 65),
                            u.b.get("nombre/impresora")
                          );
                        case 65:
                          return (
                            (t.t4 = t.sent),
                            (t.next = 68),
                            t.t3.imprimirEn.call(t.t3, t.t4)
                          );
                        case 68:
                          return t.abrupt("return", t.sent);
                        case 69:
                        case "end":
                          return t.stop();
                      }
                  },
                  r,
                  t,
                  [
                    [23, 27, 31, 39],
                    [32, , 34, 38],
                    [43, 47, 51, 59],
                    [52, , 54, 58],
                  ]
                );
              })
            )();
          },
          imprimirTicketVentaContado: function (e) {
            var t = this;
            return c()(
              o.a.mark(function r() {
                var n, s, c, l, p, m, f, h, g, b, A, _, x, k, C, E, y, P, w;
                return o.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), u.b.get("valor/MODO_IMPRESION");
                        case 2:
                          if (((t.t0 = t.sent), "Impresora térmica" === t.t0)) {
                            t.next = 7;
                            break;
                          }
                          return (
                            d.default.$router.push({
                              name: "TicketDeVentaContado",
                              params: { idVenta: e },
                            }),
                            t.abrupt("return")
                          );
                        case 7:
                          return (
                            (t.next = 9),
                            u.b.get("valor/SERIAL_PLUGIN_IMPRESION")
                          );
                        case 9:
                          return (
                            (n = t.sent),
                            (s = d.default.options.filters),
                            (t.next = 13),
                            u.b.get("ajustes/empresa")
                          );
                        case 13:
                          return (
                            (c = t.sent),
                            (t.next = 16),
                            u.b.get("venta/contado/" + e)
                          );
                        case 16:
                          for (
                            l = t.sent,
                              p = a("jxSC"),
                              m = new v.a(v.a.URL_PLUGIN_POR_DEFECTO, n)
                                .Iniciar()
                                .ImprimirImagenEnBase64(
                                  p,
                                  v.a.TAMAÑO_IMAGEN_NORMAL,
                                  320
                                )
                                .EstablecerAlineacion(v.a.ALINEACION_CENTRO)
                                .EstablecerEnfatizado(!0)
                                .EscribirTexto("Ticket de venta #" + e + "\n")
                                .Feed(1),
                              f = ["Nombre", "Direccion", "Telefono"],
                              h = !0,
                              g = !1,
                              b = void 0,
                              t.prev = 23,
                              A = i()(f);
                            !(h = (_ = A.next()).done);
                            h = !0
                          )
                            (x = _.value),
                              c[x] && (m.EscribirTexto(c[x]), m.Feed(1));
                          t.next = 31;
                          break;
                        case 27:
                          (t.prev = 27),
                            (t.t1 = t.catch(23)),
                            (g = !0),
                            (b = t.t1);
                        case 31:
                          (t.prev = 31),
                            (t.prev = 32),
                            !h && A.return && A.return();
                        case 34:
                          if (((t.prev = 34), !g)) {
                            t.next = 37;
                            break;
                          }
                          throw b;
                        case 37:
                          return t.finish(34);
                        case 38:
                          return t.finish(31);
                        case 39:
                          for (
                            m
                              .EstablecerEnfatizado(!1)
                              .EscribirTexto(s.fechaExpresiva(l.Fecha))
                              .Feed(1)
                              .DeshabilitarElModoDeCaracteresChinos()
                              .EscribirTexto("Lo atendió: ")
                              .EstablecerEnfatizado(!0)
                              .EscribirTexto(l.Usuario.Nombre)
                              .EstablecerEnfatizado(!1)
                              .Feed(1)
                              .EscribirTexto("Cliente: ")
                              .EstablecerEnfatizado(!0)
                              .EscribirTexto(l.Cliente.Nombre)
                              .EstablecerEnfatizado(!1)
                              .Feed(1)
                              .EstablecerAlineacion(v.a.ALINEACION_CENTRO)
                              .EscribirTexto("--------------------------\n"),
                              k = !0,
                              C = !1,
                              E = void 0,
                              t.prev = 43,
                              y = i()(l.Productos);
                            !(k = (P = y.next()).done);
                            k = !0
                          )
                            (w = P.value),
                              m
                                .EstablecerAlineacion(v.a.ALINEACION_IZQUIERDA)
                                .EscribirTexto(w.Descripcion)
                                .Feed(1)
                                .EstablecerAlineacion(v.a.ALINEACION_DERECHA)
                                .EscribirTexto(
                                  w.Cantidad +
                                    " x " +
                                    s.currency(w.PrecioVenta) +
                                    " = " +
                                    s.currency(w.Cantidad * w.PrecioVenta)
                                )
                                .Feed(1);
                          t.next = 51;
                          break;
                        case 47:
                          (t.prev = 47),
                            (t.t2 = t.catch(43)),
                            (C = !0),
                            (E = t.t2);
                        case 51:
                          (t.prev = 51),
                            (t.prev = 52),
                            !k && y.return && y.return();
                        case 54:
                          if (((t.prev = 54), !C)) {
                            t.next = 57;
                            break;
                          }
                          throw E;
                        case 57:
                          return t.finish(54);
                        case 58:
                          return t.finish(51);
                        case 59:
                          return (
                            m
                              .EstablecerAlineacion(v.a.ALINEACION_CENTRO)
                              .EscribirTexto("--------------------------\n")
                              .EstablecerAlineacion(v.a.ALINEACION_DERECHA)
                              .EstablecerEnfatizado(!0)
                              .EscribirTexto("Total: ")
                              .EstablecerEnfatizado(!1)
                              .EscribirTexto(s.currency(l.Total))
                              .Feed(1)
                              .EstablecerEnfatizado(!0)
                              .EscribirTexto("Su pago: ")
                              .EstablecerEnfatizado(!1)
                              .EscribirTexto(s.currency(l.Pago))
                              .Feed(1)
                              .EstablecerEnfatizado(!0)
                              .EscribirTexto("Cambio: ")
                              .EstablecerEnfatizado(!1)
                              .EscribirTexto(s.currency(l.Pago - l.Total))
                              .Feed(1),
                            c.MensajePersonal &&
                              m
                                .EstablecerAlineacion(v.a.ALINEACION_CENTRO)
                                .EstablecerEnfatizado(!0)
                                .EscribirTexto(c.MensajePersonal)
                                .Feed(1),
                            m.Pulso(48, 60, 120).CorteParcial().Corte(1),
                            (t.t3 = m),
                            (t.next = 65),
                            u.b.get("nombre/impresora")
                          );
                        case 65:
                          return (
                            (t.t4 = t.sent),
                            (t.next = 68),
                            t.t3.imprimirEn.call(t.t3, t.t4)
                          );
                        case 68:
                          return t.abrupt("return", t.sent);
                        case 69:
                        case "end":
                          return t.stop();
                      }
                  },
                  r,
                  t,
                  [
                    [23, 27, 31, 39],
                    [32, , 34, 38],
                    [43, 47, 51, 59],
                    [52, , 54, 58],
                  ]
                );
              })
            )();
          },
          agregarHoraCeroAFecha: function (e) {
            return e + "T00:00:00";
          },
          hoyComoCadena: function () {
            var e = new Date(Date.now() + 864e5);
            return (
              e.getFullYear() +
              "-" +
              this.agregarCerosALaIzquierdaSiEsNecesario(e.getMonth() + 1) +
              "-" +
              this.agregarCerosALaIzquierdaSiEsNecesario(e.getDate())
            );
          },
          formatearFecha: function (e) {
            if (!e instanceof Date)
              throw new TypeError("La fecha debe ser un objeto de tipo Date");
            var t = e.getMonth() + 1,
              a = e.getDate();
            return (
              e.getFullYear() +
              "-" +
              this.agregarCerosALaIzquierdaSiEsNecesario(t) +
              "-" +
              this.agregarCerosALaIzquierdaSiEsNecesario(a)
            );
          },
          componerFechaParaFin: function (e) {
            return (
              (e = new Date(e)).setTime(
                e.getTime() + 60 * e.getTimezoneOffset() * 1e3
              ),
              e.setTime(e.getTime() + l.b),
              this.formatearFecha(e)
            );
          },
          componerFechaParaInicio: function (e) {
            return e;
          },
          esteAnioComoCadena: function () {
            return new Date().getFullYear().toString();
          },
          esteMesComoCadena: function () {
            var e = new Date().getMonth() + 1;
            return this.agregarCerosALaIzquierdaSiEsNecesario(e);
          },
          agregarCerosALaIzquierdaSiEsNecesario: function (e) {
            return (e = e.toString()).length < 2 ? "0" + e : e.toString();
          },
          colorHexadecimalAleatorio: function () {
            var e = [
              "#f2476a",
              "#fb654e",
              "#eb2d3a",
              "#add8e6",
              "#90ee90",
              "#ffcb7e",
              "#ff9464",
              "#d5e389",
              "#d0b191",
              "#c18390",
              "#F44336",
              "#9C27B0",
              "#673AB7",
              "#3F51B5",
              "##2196F3",
              "#4CAF50",
              "#8BC34A",
              "#CDDC39",
              "##FFEB3B",
              "#FF9800",
              "#FF5722",
            ];
            return e[Math.floor(Math.random() * e.length)];
          },
          _colorHexadecimalAleatorio: function () {
            return "#000000".replace(/0/g, function () {
              return (~~(16 * Math.random())).toString(16);
            });
          },
        };
    },
    "7FkD": function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("NHnr"),
        o = a("8o1w"),
        n = {
          components: { Publicidad: a("nBfo").a },
          beforeMount: function () {
            r.EventBus.$emit("ponerTitulo", "Inicio"),
              this.comprobarProductosEnStock();
          },
          methods: {
            irA: function (e) {
              this.$router.push({ name: e });
            },
            irAProductosEnStockYOcultarSnackbar: function () {
              (this.snackbarStock = !1),
                this.$router.push({ name: "ReporteStock" });
            },
            comprobarProductosEnStock: function () {
              var e = this;
              o.b
                .get("usuario/logueado")
                .then(function (e) {
                  r.EventBus.$emit("ponerDatosUsuario", e);
                })
                .finally(function () {
                  o.b.get("conteo/productos/stock").then(function (t) {
                    !isNaN(t) &&
                      t > 0 &&
                      ((e.snackbarStock = !0), (e.cantidadEnStock = t));
                  });
                });
            },
          },
          data: function () {
            return { snackbarStock: !1, cantidadEnStock: 0 };
          },
        },
        i = {
          render: function () {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t;
            return r(
              "v-container",
              { attrs: { "grid-list-lg": "", fluid: "" } },
              [
                r(
                  "v-snackbar",
                  {
                    attrs: { timeout: 5e3, top: !0 },
                    model: {
                      value: e.snackbarStock,
                      callback: function (t) {
                        e.snackbarStock = t;
                      },
                      expression: "snackbarStock",
                    },
                  },
                  [
                    e._v(
                      "\n    Advertencia: Hay " +
                        e._s(e.cantidadEnStock) +
                        " productos con existencia menor al\n    stock\n    "
                    ),
                    r(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.irAProductosEnStockYOcultarSnackbar();
                          },
                        },
                      },
                      [e._v("ACCIÓN")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                r(
                  "v-layout",
                  { attrs: { row: "", wrap: "", "fill-height": "" } },
                  [
                    r("v-flex", { attrs: { xs12: "" } }, [
                      r("h1", { staticClass: "display-3 text-xs-center" }, [
                        e._v("Bienvenido. Elija una opción"),
                      ]),
                      e._v(" "),
                      r("p", [
                        e._v(
                          "\n        Recuerde que siempre puede explorar el menú completo haciendo click en\n        la parte superior izquierda\n      "
                        ),
                      ]),
                    ]),
                    e._v(" "),
                    r("v-flex", { attrs: { xs12: "" } }, [r("publicidad")], 1),
                    e._v(" "),
                    r(
                      "v-flex",
                      { attrs: { xs12: "", sm6: "", md3: "", lg2: "" } },
                      [
                        r(
                          "v-card",
                          {
                            staticClass: "cursor-manita text-xs-center",
                            staticStyle: { "min-height": "250px" },
                            nativeOn: {
                              click: function (t) {
                                e.irA("Vender");
                              },
                            },
                          },
                          [
                            r("v-img", {
                              staticClass: "text-xs-center",
                              staticStyle: {
                                "max-height": "100px",
                                width: "100px",
                                margin: "auto",
                              },
                              attrs: { src: a("Rxhn"), height: "200px" },
                            }),
                            e._v(" "),
                            r(
                              "v-card-title",
                              { attrs: { "primary-title": "" } },
                              [
                                r("div", [
                                  r("div", { staticClass: "headline" }, [
                                    e._v("Realizar una venta"),
                                  ]),
                                  e._v(" "),
                                  r("span", { staticClass: "grey--text" }, [
                                    e._v(
                                      "Hacer una venta al contado o un apartado"
                                    ),
                                  ]),
                                ]),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    r(
                      "v-flex",
                      { attrs: { xs12: "", sm6: "", md3: "", lg2: "" } },
                      [
                        r(
                          "v-card",
                          {
                            staticClass: "cursor-manita text-xs-center",
                            staticStyle: { "min-height": "250px" },
                            nativeOn: {
                              click: function (t) {
                                e.irA("Inventario");
                              },
                            },
                          },
                          [
                            r("v-img", {
                              staticClass: "text-xs-center",
                              staticStyle: {
                                "max-height": "100px",
                                width: "100px",
                                margin: "auto",
                              },
                              attrs: { src: a("2tSW"), height: "200px" },
                            }),
                            e._v(" "),
                            r(
                              "v-card-title",
                              { attrs: { "primary-title": "" } },
                              [
                                r("div", [
                                  r("div", { staticClass: "headline" }, [
                                    e._v("Ver inventario"),
                                  ]),
                                  e._v(" "),
                                  r("span", { staticClass: "grey--text" }, [
                                    e._v(
                                      "Registrar, eliminar o actualizar detalles productos"
                                    ),
                                  ]),
                                ]),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    r(
                      "v-flex",
                      { attrs: { xs12: "", sm6: "", md3: "", lg2: "" } },
                      [
                        r(
                          "v-card",
                          {
                            staticClass: "cursor-manita text-xs-center",
                            staticStyle: { "min-height": "250px" },
                            nativeOn: {
                              click: function (t) {
                                e.irA("Clientes");
                              },
                            },
                          },
                          [
                            r("v-img", {
                              staticClass: "text-xs-center",
                              staticStyle: {
                                "max-height": "100px",
                                width: "100px",
                                margin: "auto",
                              },
                              attrs: { src: a("sQx5"), height: "200px" },
                            }),
                            e._v(" "),
                            r(
                              "v-card-title",
                              { attrs: { "primary-title": "" } },
                              [
                                r("div", [
                                  r("div", { staticClass: "headline" }, [
                                    e._v("Mis clientes"),
                                  ]),
                                  e._v(" "),
                                  r("span", { staticClass: "grey--text" }, [
                                    e._v(
                                      "Registrar, eliminar o actualizar detalles clientes"
                                    ),
                                  ]),
                                ]),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    r(
                      "v-flex",
                      { attrs: { xs12: "", sm6: "", md3: "", lg2: "" } },
                      [
                        r(
                          "v-card",
                          {
                            staticClass: "cursor-manita text-xs-center",
                            staticStyle: { "min-height": "250px" },
                            nativeOn: {
                              click: function (t) {
                                e.irA("ReporteApartados");
                              },
                            },
                          },
                          [
                            r("v-img", {
                              staticClass: "text-xs-center",
                              staticStyle: {
                                "max-height": "100px",
                                width: "100px",
                                margin: "auto",
                              },
                              attrs: { src: a("BjJX"), height: "200px" },
                            }),
                            e._v(" "),
                            r(
                              "v-card-title",
                              { attrs: { "primary-title": "" } },
                              [
                                r("div", [
                                  r("div", { staticClass: "headline" }, [
                                    e._v("Abonos"),
                                  ]),
                                  e._v(" "),
                                  r("span", { staticClass: "grey--text" }, [
                                    e._v(
                                      "Registrar o ver abonos de un apartado"
                                    ),
                                  ]),
                                ]),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    r(
                      "v-flex",
                      { attrs: { xs12: "", sm6: "", md3: "", lg2: "" } },
                      [
                        r(
                          "v-card",
                          {
                            staticClass: "cursor-manita text-xs-center",
                            staticStyle: { "min-height": "250px" },
                            nativeOn: {
                              click: function (t) {
                                e.irA("Caja");
                              },
                            },
                          },
                          [
                            r("v-img", {
                              staticClass: "text-xs-center",
                              staticStyle: {
                                "max-height": "100px",
                                width: "100px",
                                margin: "auto",
                              },
                              attrs: { src: a("i4aQ"), height: "200px" },
                            }),
                            e._v(" "),
                            r(
                              "v-card-title",
                              { attrs: { "primary-title": "" } },
                              [
                                r("div", [
                                  r("div", { staticClass: "headline" }, [
                                    e._v("Caja"),
                                  ]),
                                  e._v(" "),
                                  r("span", { staticClass: "grey--text" }, [
                                    e._v(
                                      "Registrar una salida o entrada de efectivo"
                                    ),
                                  ]),
                                ]),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    r(
                      "v-flex",
                      { attrs: { xs12: "", sm6: "", md3: "", lg2: "" } },
                      [
                        r(
                          "v-card",
                          {
                            staticClass: "cursor-manita text-xs-center",
                            staticStyle: { "min-height": "250px" },
                            nativeOn: {
                              click: function (t) {
                                e.irA("Escritorio");
                              },
                            },
                          },
                          [
                            r("v-img", {
                              staticClass: "text-xs-center",
                              staticStyle: {
                                "max-height": "100px",
                                width: "100px",
                                margin: "auto",
                              },
                              attrs: { src: a("8JYt"), height: "200px" },
                            }),
                            e._v(" "),
                            r(
                              "v-card-title",
                              { attrs: { "primary-title": "" } },
                              [
                                r("div", [
                                  r("div", { staticClass: "headline" }, [
                                    e._v("Escritorio"),
                                  ]),
                                  e._v(" "),
                                  r("span", { staticClass: "grey--text" }, [
                                    e._v(
                                      "Resumen de todos los movimientos de su tienda"
                                    ),
                                  ]),
                                ]),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    r(
                      "v-flex",
                      { attrs: { xs12: "", sm6: "", md3: "", lg2: "" } },
                      [
                        r(
                          "v-card",
                          {
                            staticClass: "cursor-manita text-xs-center",
                            staticStyle: { "min-height": "250px" },
                            nativeOn: {
                              click: function (t) {
                                e.irA("Graficas");
                              },
                            },
                          },
                          [
                            r("v-img", {
                              staticClass: "text-xs-center",
                              staticStyle: {
                                "max-height": "100px",
                                width: "100px",
                                margin: "auto",
                              },
                              attrs: { src: a("exYv"), height: "200px" },
                            }),
                            e._v(" "),
                            r(
                              "v-card-title",
                              { attrs: { "primary-title": "" } },
                              [
                                r("div", [
                                  r("div", { staticClass: "headline" }, [
                                    e._v("Gráficas"),
                                  ]),
                                  e._v(" "),
                                  r("span", { staticClass: "grey--text" }, [
                                    e._v(
                                      "Compare ventas, vea los productos más vendidos y mucho\n              más"
                                    ),
                                  ]),
                                ]),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    r(
                      "v-flex",
                      { attrs: { xs12: "", sm6: "", md3: "", lg2: "" } },
                      [
                        r(
                          "v-card",
                          {
                            staticClass: "text-xs-center",
                            staticStyle: { "min-height": "250px" },
                          },
                          [
                            r("v-img", {
                              staticClass: "text-xs-center",
                              staticStyle: {
                                "max-height": "100px",
                                width: "100px",
                                margin: "auto",
                              },
                              attrs: { src: a("kVtF"), height: "200px" },
                            }),
                            e._v(" "),
                            r(
                              "v-card-title",
                              { attrs: { "primary-title": "" } },
                              [
                                r("div", [
                                  r("div", { staticClass: "headline" }, [
                                    e._v("Reportes"),
                                  ]),
                                  e._v(" "),
                                  r("span", { staticClass: "grey--text" }, [
                                    e._v("Ver el "),
                                    r(
                                      "a",
                                      {
                                        on: {
                                          click: function (t) {
                                            e.irA("ReporteCaja");
                                          },
                                        },
                                      },
                                      [e._v("reporte de caja")]
                                    ),
                                    e._v(", de\n              "),
                                    r(
                                      "a",
                                      {
                                        on: {
                                          click: function (t) {
                                            e.irA("ReporteVentasContado");
                                          },
                                        },
                                      },
                                      [e._v("ventas al contado")]
                                    ),
                                    e._v(" o\n              de "),
                                    r(
                                      "a",
                                      {
                                        on: {
                                          click: function (t) {
                                            e.irA("ReporteApartados");
                                          },
                                        },
                                      },
                                      [e._v("apartados")]
                                    ),
                                  ]),
                                ]),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    r(
                      "v-flex",
                      { attrs: { xs12: "", sm6: "", md3: "", lg2: "" } },
                      [
                        r(
                          "v-card",
                          {
                            staticClass: "cursor-manita text-xs-center",
                            staticStyle: { "min-height": "250px" },
                            nativeOn: {
                              click: function (t) {
                                e.irA("Usuarios");
                              },
                            },
                          },
                          [
                            r("v-img", {
                              staticClass: "text-xs-center",
                              staticStyle: {
                                "max-height": "100px",
                                width: "100px",
                                margin: "auto",
                              },
                              attrs: { src: a("k7mg"), height: "200px" },
                            }),
                            e._v(" "),
                            r(
                              "v-card-title",
                              { attrs: { "primary-title": "" } },
                              [
                                r("div", [
                                  r("div", { staticClass: "headline" }, [
                                    e._v("Usuarios"),
                                  ]),
                                  e._v(" "),
                                  r("span", { staticClass: "grey--text" }, [
                                    e._v(
                                      "Administrar usuarios (o cajeros) así como sus permisos"
                                    ),
                                  ]),
                                ]),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    r(
                      "v-flex",
                      { attrs: { xs12: "", sm6: "", md3: "", lg2: "" } },
                      [
                        r(
                          "v-card",
                          {
                            staticClass: "cursor-manita text-xs-center",
                            staticStyle: { "min-height": "250px" },
                            nativeOn: {
                              click: function (t) {
                                e.irA("ImprimirCodigosDeBarras");
                              },
                            },
                          },
                          [
                            r("v-img", {
                              staticClass: "text-xs-center",
                              staticStyle: {
                                "max-height": "100px",
                                width: "100px",
                                margin: "auto",
                              },
                              attrs: { src: a("NOf8"), height: "200px" },
                            }),
                            e._v(" "),
                            r(
                              "v-card-title",
                              { attrs: { "primary-title": "" } },
                              [
                                r("div", [
                                  r("div", { staticClass: "headline" }, [
                                    e._v("Códigos de barras"),
                                  ]),
                                  e._v(" "),
                                  r("span", { staticClass: "grey--text" }, [
                                    e._v(
                                      "Imprimir códigos de barras de productos"
                                    ),
                                  ]),
                                ]),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    r(
                      "v-flex",
                      { attrs: { xs12: "", sm6: "", md3: "", lg2: "" } },
                      [
                        r(
                          "v-card",
                          {
                            staticClass: "cursor-manita text-xs-center",
                            staticStyle: { "min-height": "250px" },
                            nativeOn: {
                              click: function (t) {
                                e.irA("Ajustes");
                              },
                            },
                          },
                          [
                            r("v-img", {
                              staticClass: "text-xs-center",
                              staticStyle: {
                                "max-height": "100px",
                                width: "100px",
                                margin: "auto",
                              },
                              attrs: { src: a("fEbY"), height: "200px" },
                            }),
                            e._v(" "),
                            r(
                              "v-card-title",
                              { attrs: { "primary-title": "" } },
                              [
                                r("div", [
                                  r("div", { staticClass: "headline" }, [
                                    e._v("Ajustes"),
                                  ]),
                                  e._v(" "),
                                  r("span", { staticClass: "grey--text" }, [
                                    e._v(
                                      "Cambiar los datos de su tienda, configurar la impresora,\n              etcétera"
                                    ),
                                  ]),
                                ]),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var s = a("VU/8")(
        n,
        i,
        !1,
        function (e) {
          a("iGE7");
        },
        "data-v-40ebb345",
        null
      );
      t.default = s.exports;
    },
    "7zck": function (e, t) {},
    "8JYt": function (e, t, a) {
      e.exports = a.p + "img/salpicadero.f66d1ab.png";
    },
    "8o1w": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return u;
      }),
        a.d(t, "b", function () {
          return v;
        });
      var r = a("mvHQ"),
        o = a.n(r),
        n = a("NHnr"),
        i = a("MRIW"),
        s =
          window.document.location.protocol +
          "//" +
          window.document.location.hostname +
          ":" +
          i.g +
          "/auth/",
        c =
          window.document.location.protocol +
          "//" +
          window.document.location.hostname +
          ":" +
          i.g +
          "/",
        l = function (e) {
          return (
            null !== e &&
              void 0 !== e &&
              "" !== e &&
              e.Clave &&
              e.Numero &&
              21 === e.Numero &&
              n.EventBus.$emit("permisoDenegado", e),
            e
          );
        },
        d = function (e) {
          n.EventBus.$emit("errorDeServidor", e), console.error(e);
        },
        u = {
          get: function (e) {
            return fetch(c + e, { credentials: "include" })
              .then(function (e) {
                return e.json();
              })
              .catch(function (e) {
                d(e);
              });
          },
          post: function (e, t) {
            return fetch(c + e, {
              method: "POST",
              credentials: "include",
              body: o()(t),
            })
              .then(function (e) {
                return e.json();
              })
              .catch(function (e) {
                d(e);
              });
          },
          put: function (e, t) {
            return fetch(c + e, {
              method: "PUT",
              credentials: "include",
              body: o()(t),
            })
              .then(function (e) {
                return e.json();
              })
              .catch(function (e) {
                d(e);
              });
          },
        },
        v = {
          postArchivo: function (e, t) {
            return fetch(s + e, {
              method: "POST",
              credentials: "include",
              body: t,
            })
              .then(function (e) {
                return e.json().then(function (e) {
                  return l(e);
                });
              })
              .catch(function (e) {
                d(e);
              });
          },
          post: function (e, t) {
            return fetch(s + e, {
              method: "POST",
              credentials: "include",
              body: o()(t),
            })
              .then(function (e) {
                return e.json().then(function (e) {
                  return l(e);
                });
              })
              .catch(function (e) {
                d(e);
              });
          },
          put: function (e, t) {
            return fetch(s + e, {
              method: "PUT",
              credentials: "include",
              body: o()(t),
            })
              .then(function (e) {
                return e.json().then(function (e) {
                  return l(e);
                });
              })
              .catch(function (e) {
                d(e);
              });
          },
          get: function (e) {
            return fetch(s + e, { credentials: "include" })
              .then(function (e) {
                return e.json().then(function (e) {
                  return l(e);
                });
              })
              .catch(function (e) {
                d(e);
              });
          },
          delete: function (e) {
            return fetch(s + e, { method: "DELETE", credentials: "include" })
              .then(function (e) {
                return e.json().then(function (e) {
                  return l(e);
                });
              })
              .catch(function (e) {
                d(e);
              });
          },
        };
    },
    "976E": function (e, t, a) {
      "use strict";
      var r = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a(
                      "p",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: e.productos.length <= 0,
                            expression: "productos.length <= 0",
                          },
                        ],
                      },
                      [e._v("No hay registros en el período")]
                    ),
                    e._v(" "),
                    a(
                      "v-list",
                      e._l(e.productos, function (t, r) {
                        return a(
                          "v-list-tile",
                          { key: r },
                          [
                            a(
                              "v-list-tile-content",
                              [
                                a("v-list-tile-title", [
                                  e._v(e._s(t.Descripcion)),
                                ]),
                                e._v(" "),
                                a("v-list-tile-sub-title", [
                                  e._v("Vendido "),
                                  a("strong", [e._v(e._s(t.VecesVendido))]),
                                  e._v(
                                    "\n            " +
                                      e._s(
                                        t.VecesVendido > 1 ? "veces" : "vez"
                                      ) +
                                      "\n          "
                                  ),
                                ]),
                              ],
                              1
                            ),
                          ],
                          1
                        );
                      }),
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        o = a("VU/8")(
          { name: "ProductosMenosVendidos", props: ["productos"] },
          r,
          !1,
          null,
          null,
          null
        );
      t.a = o.exports;
    },
    "98sZ": function (e, t, a) {
      "use strict";
      var r = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a(
                      "p",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: e.productos.length <= 0,
                            expression: "productos.length <= 0",
                          },
                        ],
                      },
                      [e._v("No hay registros")]
                    ),
                    e._v(" "),
                    a(
                      "v-list",
                      e._l(e.productos, function (t, r) {
                        return a(
                          "v-list-tile",
                          { key: r },
                          [
                            a(
                              "v-list-tile-content",
                              [
                                a("v-list-tile-title", [
                                  e._v(e._s(t.Descripcion)),
                                ]),
                                e._v(" "),
                                a("v-list-tile-sub-title", [
                                  a("strong", [e._v("Código de barras: ")]),
                                  e._v(e._s(t.CodigoBarras)),
                                ]),
                              ],
                              1
                            ),
                          ],
                          1
                        );
                      }),
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        o = a("VU/8")(
          { name: "ProductosNuncaVendidos", props: ["productos"] },
          r,
          !1,
          null,
          null,
          null
        );
      t.a = o.exports;
    },
    BjJX: function (e, t, a) {
      e.exports = a.p + "img/dinero.280fff4.png";
    },
    "E++z": function (e, t) {},
    EgEd: function (e, t, a) {
      "use strict";
      var r = a("woOf"),
        o = a.n(r),
        n = a("8o1w"),
        i = {
          watch: {
            mostrar: function (e) {
              e && this.enfocarInputPrincipal();
            },
          },
          methods: {
            enfocarInputPrincipal: function () {
              this.$nextTick(this.$refs.nombreCliente.focus);
            },
            resetearFormulario: function () {
              this.$refs.formulario.reset();
            },
            cerrarDialogo: function () {
              this.resetearFormulario(), this.$emit("cerrar-dialogo");
            },
            guardar: function () {
              var e = this;
              if (this.$refs.formulario.validate()) {
                var t = o()({}, this.cliente);
                (this.cargando = !0),
                  n.b.post("cliente", t).then(function (t) {
                    (e.cargando = !1),
                      t.Numero &&
                        (e.resetearFormulario(),
                        e.$emit("cliente-guardado", t),
                        e.enfocarInputPrincipal());
                  });
              }
            },
          },
          props: ["mostrar"],
          data: function () {
            return {
              mascara: "###-###-##-##",
              cargando: !1,
              cliente: {},
              reglas: {
                nombre: [
                  function (e) {
                    return e
                      ? !!/^[a-zA-Z\sáéíóúÁÉÍÓÚ]*$/.test(e) ||
                          "El nombre sólo puede llevar letras"
                      : "Introduzca el nombre completo del cliente";
                  },
                ],
                numeroTelefono: [
                  function (e) {
                    return e
                      ? 10 === e.length || "El número debe tener 10 dígitos"
                      : "Introduzca el número de teléfono";
                  },
                ],
              },
            };
          },
        },
        s = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-dialog",
              {
                attrs: { persistent: "", "max-width": "500" },
                model: {
                  value: e.mostrar,
                  callback: function (t) {
                    e.mostrar = t;
                  },
                  expression: "mostrar",
                },
              },
              [
                a(
                  "v-card",
                  [
                    a("v-card-title", { staticClass: "headline" }, [
                      e._v("Registrar cliente"),
                    ]),
                    e._v(" "),
                    a(
                      "v-card-text",
                      [
                        a(
                          "v-form",
                          { ref: "formulario" },
                          [
                            a(
                              "v-container",
                              { attrs: { fluid: "", "grid-list-md": "" } },
                              [
                                a(
                                  "v-layout",
                                  { attrs: { row: "", wrap: "" } },
                                  [
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "" } },
                                      [
                                        a("v-text-field", {
                                          ref: "nombreCliente",
                                          attrs: {
                                            "prepend-icon": "face",
                                            label: "Nombre completo",
                                            type: "text",
                                            rules: e.reglas.nombre,
                                            hint: "Nombre y apellidos",
                                            required: "",
                                          },
                                          model: {
                                            value: e.cliente.nombre,
                                            callback: function (t) {
                                              e.$set(e.cliente, "nombre", t);
                                            },
                                            expression: "cliente.nombre",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "" } },
                                      [
                                        a("v-text-field", {
                                          attrs: {
                                            mask: e.mascara,
                                            "prepend-icon": "phone",
                                            label: "Número de teléfono",
                                            type: "text",
                                            rules: e.reglas.numeroTelefono,
                                            hint: "Número telefónico de 10 dígitos",
                                            required: "",
                                          },
                                          model: {
                                            value: e.cliente.numeroTelefono,
                                            callback: function (t) {
                                              e.$set(
                                                e.cliente,
                                                "numeroTelefono",
                                                t
                                              );
                                            },
                                            expression:
                                              "cliente.numeroTelefono",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-card-actions",
                      [
                        a("v-spacer"),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: {
                              loading: e.cargando,
                              color: "green darken-1",
                              flat: "flat",
                            },
                            nativeOn: {
                              click: function (t) {
                                e.guardar();
                              },
                            },
                          },
                          [e._v("Guardar")]
                        ),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: { color: "gray", flat: "flat" },
                            nativeOn: {
                              click: function (t) {
                                e.cerrarDialogo();
                              },
                            },
                          },
                          [e._v("Cerrar")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        c = a("VU/8")(i, s, !1, null, null, null);
      t.a = c.exports;
    },
    FOHt: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("NHnr"),
        o = a("8o1w"),
        n = a("MRIW"),
        i = {
          name: "VerificarNegocio",
          mounted: function () {
            var e = this;
            r.EventBus.$emit("ocultarMenu"),
              r.EventBus.$emit("ponerTitulo", "Iniciar sesión"),
              (this.idIntervalo = setInterval(function () {
                return e.siguientePaso();
              }, 1e3)),
              this.verificarToken(this.$route.params.token);
          },
          data: function () {
            return {
              enlaces: {
                facebook:
                  "https://www.facebook.com/sharer.php?u=" + n.c + "&t=" + n.f,
                twitter:
                  "https://www.twitter.com/intent/tweet?hashtags=PuntoDeVenta,POS,App,SublimePOS&text=" +
                  n.f +
                  "&url=" +
                  n.c,
                whatsapp:
                  "https://api.whatsapp.com/send?text=" +
                  n.f +
                  encodeURIComponent(": ") +
                  n.c,
                telegram:
                  "https://telegram.me/share/url?url=" + n.c + "&text=" + n.f,
              },
              idIntervalo: null,
              valor: 0,
              procesoTerminado: !1,
              numeroPaso: -1,
              pasos: [
                "Creando base de datos",
                "Preparando primer uso",
                "Registrando primer usuario",
                "Dando permisos al usuario",
                "A punto de terminar...",
              ],
            };
          },
          computed: {
            paso: function () {
              return this.numeroPaso < 0
                ? ""
                : this.numeroPaso < this.pasos.length
                ? this.pasos[this.numeroPaso]
                : "";
            },
          },
          methods: {
            irAlLogin: function () {
              this.$router.push({ name: "Login" });
            },
            verificarToken: function (e) {
              var t = this;
              o.a
                .get("negocio/verificar/" + e)
                .then(function (e) {
                  console.log("Al verificar con el servidor:", e);
                })
                .finally(function () {
                  t.procesoTerminado = !0;
                });
            },
            siguientePaso: function () {
              this.numeroPaso < this.pasos.length - 1
                ? (this.numeroPaso++,
                  (this.valor += 100 / (this.pasos.length + 1)))
                : clearInterval(this.idIntervalo);
            },
          },
        },
        s = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a("h1", { staticClass: "display-1" }, [
                      e._v(
                        "\n      " +
                          e._s(
                            e.procesoTerminado
                              ? "Cuenta verificada correctamente"
                              : "Estamos verificando tu cuenta"
                          ) +
                          "\n    "
                      ),
                    ]),
                    e._v(" "),
                    a("h2", { staticClass: "subheading" }, [
                      e._v(e._s(e.procesoTerminado ? "" : e.paso)),
                    ]),
                    e._v(" "),
                    a("v-progress-linear", {
                      attrs: {
                        color: e.procesoTerminado ? "success" : "info",
                        height: "20",
                        value: e.procesoTerminado ? 100 : e.valor,
                      },
                    }),
                    e._v(" "),
                    a(
                      "p",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !e.procesoTerminado,
                            expression: "!procesoTerminado",
                          },
                        ],
                      },
                      [e._v("Por favor, espera un momento.")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-flex",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.procesoTerminado,
                        expression: "procesoTerminado",
                      },
                    ],
                    staticClass: "text-xs-center",
                    attrs: { xs12: "" },
                  },
                  [
                    a("p", { staticClass: "headline" }, [
                      e._v(
                        "\n      Todo en orden, ahora puedes iniciar sesión. Tus credenciales\n      "
                      ),
                      a("strong", [
                        e._v("fueron enviadas a tu correo electrónico"),
                      ]),
                      e._v(" cuando te\n      registraste\n    "),
                    ]),
                    e._v(" "),
                    a(
                      "v-btn",
                      {
                        attrs: { large: "", color: "success" },
                        on: {
                          click: function (t) {
                            e.irAlLogin();
                          },
                        },
                      },
                      [e._v("Iniciar sesión")]
                    ),
                    e._v(" "),
                    a("h1", { staticClass: "display-1" }, [
                      e._v("Corre la voz"),
                    ]),
                    e._v(" "),
                    a("p", { staticClass: "subheading" }, [
                      e._v(
                        "\n      Hemos creado una aplicación de punto de venta totalmente\n      gratuita, lo que nos motiva es que más usuarios se integren a la\n      plataforma.\n      "
                      ),
                      a("br"),
                      e._v(" "),
                      a("strong", [e._v("Por favor, comparte")]),
                    ]),
                    e._v(" "),
                    a(
                      "a",
                      {
                        staticClass: "link-img",
                        attrs: { href: e.enlaces.facebook, target: "_blank" },
                      },
                      [
                        a("img", {
                          staticClass: "rounded-circle img-thumbnail",
                          attrs: {
                            title: "Compartir en Facebook",
                            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAA3NCSVQICAjb4U/gAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAElklEQVRoQ9WaW2gcVRzGv529p9kkTVLb1FBLH5QKpZRWClooWFvzIF6eWqMvJQ+CtFYEsWILPggG64sERB/6VAheQOhTqqjgi1KirWgVRSqxMbHRdDfJZu/Z2Z7v5Gya2N2Zye45u8kvHLIzsyfzfXMu//85GV9JAEU2V8D54W9x+eoY/p1Ogpd8Pp+62lzKWu7pjmH/nu0Y6H8YkXBQXQWWjHx88Qe89d4INra3IBwKwLJ8a8ZEGUq17RJy+QUkZtM4c6oPR5/aJ69JIx9d/B6DQ19g86bYmhNfDZqa+i+J0yeP4Jgw48tkC6WH+gaxdUv7ujFRhmYmb85i9NJp+Ht2HHrz+l/TCAUD6vL6gQ8+ELCQF13N4sDmmFivUDs9WJydOLDXK9QuPbCfNWts8N6FQlFO+2Ks3lXYZfgdJ6hdenj82SHnb2qmLD6VyaMkptIH7++RE000cicmEMuyxJOew5Wfx9ESDbk+7IYasYWJW/F57Nt9H04cP4hdO+9VV6oz8MoFjI3HEQz61ZnKWOq3cYq2jXgihQ/feU6Ufk8mSEdbVD4ANxpihN0pnkjj0vAJ0Rrb1FlvlGz1wYWGGEnMpHHu7DPo7mxVZ/Rj3EhhoYhtvZ149MAD6swq8TihGjeSyRTwwvMH1FENrBkj2TwOH9ypjpz5/foUrl4bl+WnXyfwzXd/YPTHGyJ9cp6xiNHp1xYzVbFYwlefnlJnKjP82SjeHvoc0WgQ1rJ4wVgSaw17CthGW4Qmerd2qKPKxGdSch3EoNjZsQEdYj1ULm2xiOesw6iRkviJRkLqqDKXr4zJWFFvmmR2jIhO6yYwLVKVek0Q44PdnfpNkKYb0WNjTbSIHrQaSaayuJWYX1ZSmEtm1NXKcN3B762sd6c+MwMvaIsjyfksXn3xMA6JVIQLIsKk1S/W1NxiqgaNsK7//6tUMQFwPf7SmU/w9z8zCAYakMYzu80K8U/37RYBLIIukRyydHe1OpogXFBx061cZ6ls3ID2WBRPPLYLudzig3FCW9fyGcoP/rwxfXdrVUCbEVN5zoToVpbfXabGwW7GysTNmUa2CHcy1EfNcCfR36gWYYZhqmtxw9oL2rpWUDy12TnnmLFarv02iVDI7ykX0xZHOAXPiXiwZVOb3PonDGbbe7vw/uAxeVyJka9/wbsffInWlrA6swi1T00n0Samcy9GtLUIb8abzqdycvNNlnQeaRHwnCgs2CvrLKvr1QTRZoTwphyYAVUWPzsLEYvAFXWW1/Vqgmg1UhOaprumG+Fw8v7cq2PYCHf61ccq6DBBGtAiuqQ60/SupSsjaL4R9btejBtxn0E1zVqMyEZxMaLj9vRgMeiYNOMrmR3s1E4PFpeZ5dzIBKuJzrVA7fRg8QUVr6lyLbg1SL2PkNrpwRrof0T+R8lU93Jtjzp6AzVTOz1YkXAAb7zcJ19Q0W5G/DlXIzX2PGqlZmqnBzn98u2a108eweTUrNxULhZtfaZctldWcxdqojZqpFZqpnayFEf43tPoyGs4+uRe9GxefFNIjxnnUOX1FtRCTdRGjVKrMgEAtwEzWwotLdnGzgAAAABJRU5ErkJggg==",
                            alt: "Compartir en Facebook",
                          },
                        }),
                      ]
                    ),
                    e._v(" "),
                    a(
                      "a",
                      {
                        staticClass: "link-img",
                        attrs: { href: e.enlaces.twitter, target: "_blank" },
                      },
                      [
                        a("img", {
                          staticClass: "rounded-circle img-thumbnail",
                          attrs: {
                            title: "Compartir en Twitter",
                            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFAElEQVRoQ+2aW2hcRRjH/+dkd7OXbLO7qa1pq40oGrCUCg3Bh1D1pUKpNqIUlQgGfBK84KM+9EUQ+mTBJ6kt4qVqSBQV6wVL6UOqfRCr0pTaWosXarubpMme3ezt+P1nz9oYm+7MNlv2SH7JIZvZw87855v55v+dxHKFsYkcxk7m4RRd2JYFP1BxXUQCFgZ7w3ioNwJr9ITj7jmWRVfE9o2IGhSTzlXwTF8M1tBYxnVK/onEQmqRsSnCki+/wgDkVCAow786FBTj1xX1H2zvp+9ZFtJqLAtpNa67EB5gc5L3s8WKuviabVdC3JP3qj7WIyMZ7bvZYaP5moPKiperSG9bbg7hlmRAtZ+ZLOHwuQLkcEY0yDPN8sSqtxGW29hWD20h/PBQm4WZObEE0qEJFHHRqWB4UxRDG6Ne679587iDvd85CFGR8PiGCFJhG69Lm05/WkI4kHTOxddDXdh1eAbjvxfQ2a63KmsiXt3aiY2rg17rlfnxryJkteGuG6v3bXs3rSYvKFc9tEZTFqm3JdvU611b4hi4KaRcp84appd7QqJQTwTZsCr4j4jB9zNIiiO/vSuAEtdjHfSEyCytT1SFkJcG4nh6cxTnsxUUqXIRKJRr/UlZUiaM/1bAWzsSciXxg0RJIyB6QrjXapuvBouZj3amkAhbyEh0ijJrCwPEZdK/tn4kFnL3upBKKlvfTiuLrrPZtYS0yV0/XSh6v10mKZtx3wNJvHJfXG3Mi05ZpVRGidFgJNetuBxJXdjXtgNpdIQs6VsjHIKeEJmRaclWpzMLwuKxeU0Ie7cn8MHDKTx6ZwRr422YzLsqUmnZ6KYcOluQVGxriyDa6ZfFS7tM7ogMVhdHosMJ6O4wi8prUnofPD1nlOa1IsKl0tcdxCbJPMMfT2llK8JZNRVBmBENgqHQEsJhl2SFMFu9IUuIm7iZ/DJVVvvSBK3bZWLxjRyCNXhINZOz0yWtlDsfLSFMf5yhD0/mvJbmwdM9xCcJGil3PtoBjMnG2/Oto+xGM/n8zBzaPb9lgrYQzlAqYmHn6CSOiFttFgd/FiHm+UFfCOE8peQkHzmRw4uHLolFKVffWCJGJ3JiEKuTZopRPcKsO5Wv4LPHUgiY5kcN7n+nepo3UvOYRUQ+nx099cm017J07B6fVZPTaOFmJISwNrggG/6FL5dOzPHzRXx6Kq8MYqMYCyEsSU9lynjwvYxYibxWvbAYswUXz31xCSujtop4ozQkhIRl9rhNXj4yi4H9aRz7wzyT5cW/yR4VF33tz261hJRlxgvit3ix82xBXK34IQbi2f4YxodXok8csAm/TpWw/UBGGUMTl7sYdbMWRayK2ehJBDAzV0FcavVbpeztWxPE+s7qkxBT9n/vYJ9cN8hyutZI1KgrRJWrclzc2xPC8/0dXmtjHJUSdvfRWTiyL5j9GjkvFkP7KUpBxExLRGjld9wRxj097d67V+fP2TK+EtsxOpFXz7XiBlWfCYYHoqssPJ8Ocq+sllqjtyuA7riNFaFq1mE7K8Nz02VMpEvK/jMx0HY0Q0ANIyHzoShudg6UPyusWuSby4XjpQ0PSCpZyuVzNRpOvxwgZ5hOlZknJkVLTKLCM4YR4MF5vUSQhoW0GstCWo1lIa3G/0IIzw97sT97+QWOnmeazWLGz2IoIsqSgv/vVLXk/hPDMXPs1ODrfzyjixgUAzvYG8HfUJ8bBF/As8cAAAAASUVORK5CYII=",
                            alt: "Compartir en Twitter",
                          },
                        }),
                      ]
                    ),
                    e._v(" "),
                    a(
                      "a",
                      {
                        staticClass: "link-img",
                        attrs: { href: e.enlaces.telegram, target: "_blank" },
                      },
                      [
                        a("img", {
                          staticClass: "rounded-circle img-thumbnail",
                          attrs: {
                            title: "Compartir en Telegram",
                            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAADsQAAA7EAZUrDhsAAA1JSURBVGhDtVl5bJzVEZ9dr+1dO77iM5cdSGJyk4gClbhSqKDiUClEgpISiiipihQJqgqpVP0LqZXaSq2gqlrEUUW0pSVCVQStqIhSGtI0NAmHHTBNiONcPhKfa3vtPfv7zbzv2/URZ+2E8XfMzpv3Zn7vvXlv3udABiSXgeKpjOzriklLX1yODcblzEhS+sbTEoOcFCkIyPxwUBaVhGR5RZGsm18kNzREpAjyy0GXBCSZzsgLnw7Ka8ei0hFNSiQUkMJgQEK46R9e4rlJI1AX4mK9BO5YMiNNZSF5cHmZbFtVofXmSnMCcj6Wkh8eOCd/OzUiFYUFCoBOBAKzd4SgOGqD8bTcuaREfnJ9jdSEC1xp/jRrINv3dsnO41GpDYekGN3uOQ/O7/65AKIb4wB0fiwtm6+cJ7+6odaV5Ed5A3n3zIhs3X1WSguDUoJbMgRhZZNBZPBH2VwBjWLKjSbT8spXGuTmBRFXMjPlBeTpf3fJjs8GZQECNcgpxBrqo0LI8nhbERjK8MMfsVmCSsOtrtGUfGtFmU63i9FFgdz95gk5gpWoqhijAGcmg8DAKDcVhMlIvoz8LAENjKdkdVWRvHHHQieZnmYEsumN41hGEzIPAa2+qKfmCJ8ZAvN+4OHzeYCYDaDhRFoWlYbk7bsWOclUQjdPT3fuapfTw3EpDQV1znPtTENO3LzJg9Ey7YpM2tfDQ3Ws3PHkqOPqpNOO17KZaR5ikvvSfW+fdZKpNC2QH7x3Vlp7Y1KiIOCygqBjWUd8x+mI8iDo6R9/4KEaWkAQ1OOFP+0FqjgZ3hcDRDCf9MflmffPO8lEmgJkz+movHKkVyqKWARXiMOsqVN0RHkq+zKqmoy/+bAR40UQWd5AsJ4KTKaVwOM9E6DK4gJ59X9R2dsZc5IsTYmR+hdapCZiqxMN2RS3+WzTWgWexC465MULyePdgwuyylx7Jsvh8bYiMJSpuhb6b484sr3Yaz5/aKmTGE0Yke/u7sB0cg1nu9H1EntLnxRoL2u/g7ERwxNyK9dJpXrGg3TE8McfrO/xeM9m2gXhHH18ct85JzHygZwbTcgf2/p0s8sgELVZbSSHp+N4q2G6QhxmjRe1jGeDvoyqJuNvPtRXLWNbWd5AsJ4KTKaVwOPt8dyUdx4fRhaQ0t8kH8hT757SKWUgJlak49ao8SQapUwvFTleWdPVch0xiijzQLDEdNgQ2xxFrtU7lpCeWFLzL2qafYI1XqVutatBJv2jnMBXIKz418/7BWVK6rh6lOM4XtYwbZsBvVRm+jREhsXqsoLgj6wjyvMPv+OpFFL9lAzh/gbyq3fuaZQTW5Zh6phP2oo1bHWsj7VuEWL4rY4Rp+eAPPdBN1YpyzhzK2ZBmCPKX+K0S8HwcDwlZ4cTchXOJc/d0CDHHl4hz15XJ/VAwPi8aUGJnm8cFq1rINiWCpQvLwzoMYKkq9b6HS0yit2zgHmUSu3hLRjTrSYk8mzTRCbXchXyyuqOEwBsVBWH5NurquTRlVVSDcfHIBtzhy9SJVL4u9/skJPDSZxtIEB7F1rtWI3xsvfeRgnGU1jKBsb0EKS9Ry+03Sx6lWqP2IhR7PEkVfP4bDfi8JTGOSOJ5C8hN6KX//K1Jmnd0ixPXl2jJ8MhnCAJcDJ9eH4MBzP1hEbMvjbLcffsZ+BzRtqH4npIC/7z1JAuZyx15VR1FR3vhjWfaUf5CHq5ayQulZiuP762QU4/ulpeuq1RNtZEZAArzQhS9EAwKCd7hqR3KOZGVHQEWgHCxhmkIGjDHs4NZ994HqHf6xyV4KHuESl0U4TK+qdKcIq8NmYOWrnnOPXQtFWU8WRK+seTet+3rEL2bm6W/Q80y9aV82UM5wtmsXG0FSoISgw6h492SzGS0dqKErMH4jH5YM+oTSno0nHa4m0gaJ+/yat3wjH4COCDbb2jiA0rsGHjTR6kIPg72wgvPqjHwI0icM9E47Kislh+valROh9fLz+/cbEsKSvS3ucBiW1xI+Pd3jkgn3T0yhUN5bKgulTbcM0rkEM9MXQsTKst6zSza46rovIg1OUUPDoYl8Cm11oy7YPj2UDnkxc13ZjrEzzfFPNIOpxISTkC9ztrauXxdbVSV1oo4y5w1UgOFSL57B2MYSpFdR9oXjJfSsOFtnQ65QAMVuL4/OU/H5Uo2kEVSr3Lt+/LnH8pAFuKTgusfflwhk6xtyYrUaIEnj3DVYfz/55lVbJtXZ1saiyXFBxnr+csPD6xc5JYTNo7B2VkPKE2rgKIolCBjgSJAGiHZRF43/BSqywsLXJl+vSuLI+qXm7HVrhyBa743fvoQpaiwDQ8fb8iR5OryzPXLZLH1tZjbgckBkAcmemIdQswX7v6RnAPq5MBgFoJEExGMTOgZADUHVxh6B9CfGz+e7vMx0hPBqFfAVgH/jkX/XK2H9Qpp7gw72DAm4e+HEzfWFLee2CtPLGxQZL4zbl/IRAhrCIM/CMnzkt3/4g6HkJPr2mqsVFH/UAQyyU88ACS53J8sGdEg1ct0wdGF962Qpp/Gh0sy/GPukEenqiYBaExpDyV2XnlOJvct6tNXvy4GytQWjctHnRyP6iR5VRiHHx2sk8bZ2m4MCSrm6rBoTH2KHsPJQRgPMQARuX3u7iC0r5aN/t8sHaOfyYynuVcggM3/eHDzHFsiOYUbzz1hYddyjOoGB8jiKd1taVyf3O13L+iWpZXhbEhiXRrMA+pNnuaMVBWUiTLF1ZqnJBgztpz7eqi7/gIluJlL7dIIaYYO8QjL1PwfVKZ43HRzhUVxRJ4aNcnmd0dA1KsazCVTNn0jFdRTuzQ8TE4xyCvgbM/u36hLEXGae4i4UNZTUVEmurLJQkdvyVXPwvA5OxEtrfkxY9lwTwGOspZpiBsFD2a7B+n+KbF8yS4qrpEEvjBqUCyN25engy+eMPKacelkV9W6kqw5CIeXm3rlTKXdLJKY125LK2vACA3lWgUdZhS8Na4UDlcAc+42t85rHGSu8nmc6RgGtSMPSz4pYYyZJpIGdCoV0HboiYrwvPcimoAL8rIhGF83zkEqXMugbai8QScQswQgMYFg9tABYBIY0R5gGM7oAMAwvjQZvlnGMxxU3H21Sxu4+MY8atrIxK8talS5z7JGufAszJWC+0R46dL2cmrNsD+R1MLHW85cKxLdreekWIMXSFyKnPc3hrcDoCBo2XREWFqwtYNhFut9PJWLprFuuXx8I++37IIU6sIsbGiKqJD5JEHiEYMhNcI39pyTmOiU2IPHOFHbRpk4PZEY/L6gc8lgMNTGB4qRr1zR4ejaLG5/2xURzXf3I4gmBlciTMNO1Bbeezqet3gppIHaOZpxy9Hu88wi0bAQ8Z6YfBhbAoNvz0ozx/uVLDscX/vUBC8RTNlOoXDkbZnfhvPSx2nUC/8OVeZRT+MpJSkQL5/7RJscknfwenIB+QazZ12dICbZtvAOHSQkaLVAug+dbhPR+eZf52QO14/ovW5tNpUsxEi7TsT1aMrrasLeKgnnuMqc7yCsKlGn7dvqKPAgHBI77+qVje7i5EHiE4QhAeeQb+nMypViHKUyvaD5zTwOQq1kUL5qGdYap4/IEf77fzhMCgZEDBsi21SqG+2T95l5jnTLgZf78Vxwdtz/A90PaNxqX9uvywpx+bidVWexCbYBcyXbkfg7ToZVfnkTZaz7nR0XH5681J5+vrFKidds+MjOR9L6MJAddbwkkKfp5f8gQdfp3B06Ni2QTuJpCNCqsPGtnVdvb+CzYZ0yuDmprazfRCGeE4wgLmrHafdkrJieXb/KbnlTy0aG2+39+sohVCf/c0hsNnDOgBPXkdCRfpgtr5lVbUPgjTlk2n4F3ulFhsdA3HuZE6QvNG1l8czsUzLEA5lTEkqp8l2fZ7toNBkBqw3lpSB7deawJE/Ih69uXktTnzj7tdcCYZpHLeNCm544PUZVzauYjXoUfsMZcC131VftdxIUGZLMP/o2xtfb6bCBJoC5KtLq+R7GxcCdcJJLo18QPyDM/lssgShwPFnMuP74NO29fVya2MFm55AU6aWR8iKpRWpB4+zl5fMMRIB2lufjseb5XhxQikLfjieljU1JbLnwbWqN5kuCIS08ZVDcmJw7AsAY+SZ1gjgxZGDaCIwgkhJU0VYDm7doLLpaMrUyqUPHr1G1uLscbmm2WTKZ9rR9mqMxEwgSDMCIe3dskEewTn91NCYbkRfBHmA2PsGAqBwn4TNrWvq5N1vrneaF6YZp1YuvXOiX+7e2SqlSDn0qwWtfgFEd7yTKFdQLj75UN5APHrkrTbZ0dKtew0Tw8sFiG4wReI/nB7Bxvz7u1a6kvxo1kBINPbEP47KzrZz+lEtghHS9GIOxOMDM28mgJtX1spvbl+hnTRbmhMQj5h6//K/p+XFj7vkaF9MpxzPNzwfaJaLwfLGi0aYa/FjAb+e81TKKdQ8PyKPrW9ABr54wkeH2dIlAcklZrr8iHGoa1g+7R3VQOXI8QMFiWcV9nRjeVj4neCahnlyW1MVUpTLMTVF/g/76RdD0ln6qwAAAABJRU5ErkJggg==",
                            alt: "Compartir en Telegram",
                          },
                        }),
                      ]
                    ),
                    e._v(" "),
                    a(
                      "a",
                      {
                        staticClass: "link-img",
                        attrs: { href: e.enlaces.whatsapp, target: "_blank" },
                      },
                      [
                        a("img", {
                          staticClass: "rounded-circle img-thumbnail",
                          attrs: {
                            title: "Compartir en WhatsApp",
                            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAnfSURBVGhD3VoLUFTnFT572YXlJU8BeTUKmAFFEfEBFa1JMDhJqtFYm9rUTqrp1NZEp4mTjk0fmWY602Q6TUxsippq1RprNbYatcViDYmkoFYLjRPxgbzl/YaFBXq+s3fXFfZxV01N/HYY7v3v7t5z/nPOdx53dcMMugPoHeylwuZTdL69lMq7L1F1by21DLRQ36BJrhu9fCjUEEqxvtGU5J9IU4NSKTssi3y9fOX67eK2FDGxkJsrttDu6r1U1VtNfl5+ZNAZSK/oSa/zIoVfOp1O3ovbDPHLPDxI5iEzDQwPUM9gD8X5xtKK2OW05r7V5MPK3ipuSZH6vuv0wn830tGGfAo2BJGvYhThbwVQqneoj9oG2mlhRA69OukVijJGqle1w2NFnjm3lg7U/YXGeoeTj+Jj2/HbBcQwDZmosb+JloxbRHlpm9Qr2qBZkfyGAlp59hkK1AeIX98pBUYC4iDeOs1dtCM9j3IiHlCvuIYmRdaVbqA9NfsoyieSFJ2irn62GBoeonrTdXoyZhn9JvVX6qpzuFUk99Ri+rS7XGLhbgCxc79/Eh3LOqiuOIZLRbILc3hXGihA76+u3B10mbvZGyKoMDtfXRkNp37ycNHiz4USAGSALLkskzM4VAQxcbGr/LaUgKH7h/olV3Rx4OKv29wjuQf+7ykgy6csE2RzhFGuBXb65tnvULRxnLriGUwsfDe7ApSYHjyNJgUm01ifcEmOHeZOutx9hYpai4WZArz8PWbA2r462pW+bRSbjVIk+m+JkiM8ZScktgbOAZkhM2h9wlqaFz5HveIYFT2VlFexjd6p3EVBhjFcFWgrVWBN5Jrahy+pKxbcpAiS3cmmQvLT+6kr2tAx0CmstjdjByUGJKirNwCXQknijPlw37/Wvy/0rsU6Pfx988Kzb0qaNkVQdkw+MYNijTEembrB1EhPRC+m11NfVVeIC8U+2nTlbTp0/Qhd6LxIBi5f8I0DbLUw7zBxi6fjn6K0oCmWDzBONH1Ay0+vpHEachVEru6robL5JbZyxqbIU2dW0em2s1ylGuWCFkCJ5yasoQ1J69UVovVlL9LOqj/y7geTkUsYvY6VsNuYQS4aEUcdAx2UxNbbl7GLIo0Rcq2yp5pmfjCXIplq3SmDzcoITqed07fKuSgCJon5+0S2RrRma8CdHotaaMu6rf1tNIOFABDEWr4HhFDHnvDWlF/Tk7HLZO0/7WX04KlHKMaNLBar1FLNgotSNYvaKMXhv1qVgIuEegfbKdFKyQXpbAGjBG3XYLfEhTt4K94Uz2X8s6XP05aK7bI2JWgyvZC4ThjOFSArZIbscg6LZPwzWypPraU4KLAou4Am+I+X88TjqVzKM+vwPgwODdLzSet4p+to67UdTgPcHtjdSu5n/pF1mKYFT5W1SQUZ5MU9Df6cAUwJa5yeV0gK+Lyqr1qzElB4TmimTYnnJEHp5IZwr/PzP5ZA3jhxA3eCCew+A/I+V8DuonNcWvINdYXoleSfurUKZEZD18vxoqA9RWenFXAZ5Anr8e7qdyUmkMHXjF/NDGWQa8CqL31b1rUAGwHWyat4R84Xj3tMrOuuCoDsHzZ/RMr5jlJpT7UALoB8MCcsU87fuPJbCmF2wo7283pmyCxZt+JrMUuEpfA5LUCvs+nq79QzokejcoXhXAGyn2MdlItdl4TntQBKzAzJUM+IDnESQ4ADOn7B7UYC14dlr90DVmlkSgetA/PCsoXZXAHuVc46KDW9tS4Dyh4ILtROVpR3X7Z9FgyU33hCjq1AterF+cCTcgd5rKT1jBwnB95P5mGzHDsDhhyY2CgY2aCg0wL2WIrwHivHbQNtLLzBRtkYQOyp/pMcW3Gl+6okRE/APEU1nB+ACE6M7mIEsosOmDtpzR+AolgsYB7CDW58Dt8RaAik1ed+oK4QHc08KElrZIzg3FncQBSrFWBNfrccOwPuCx2025yhsOCdXFoA4T6ho8yOZIjir6ilWM4TmKK3pr3FOaLKtrP4325up6b+ZikzRiqE6yGGEDnuMHfwHbWJqGACqJVVEA+X2V2sAMuMND0q2CdKVnD2t+SPpdGL6PDs/VJ6t/MmIJmWzi+m8ofO04yQ6eJGYDYrUDVMVuMQ9/JSPcAZIDt0UDDGxARQC5AjTrX8Sz0jemjs/FFMhcAGJaeeuEHFWaGzpH9YHrOUjsw+wN2eZaT0h/QtohSOrTQNK6dymQIUc9B7u0kNkB06KDGcUTHG1AJYBG5R11cv50/Hf8th9oXC8O+k41OoydSsrhL9MuXnYgV7oAyP49YBimDiuCz6cfUK0cG6Q27HqJAdVYEyMSBRaFUrkMWt2Rc5Jc4Ya3Mje4COjbzTKQXT6bVLr6urjvFRy8eS2JpMTfRy8kuyhpa4zlTvlvUgexLroEwdkyqJTitQEuRdsygCvDdrD1vJQgAjAY5H7/92xVaKPpZIL37yEiEBW1HQeJImHk+Tnh7zq2e5t7EWmT++8DIF6d0XnJA9jXXQcds4fF9+ikfDhub+Fnoj9TWuhx4VN5t5ci6zWLh61THg/yhQe/hvEBlJDdIx+kAp+jCVL/jy+/Je9CQ5RV9lmaLk3BVAHhU5F0hBoME9tLoXBELZACWA7ZW7xIWs684SGPges4BwnzBJqhi4BfOOo0GL842xKQEs4So40seSeF0BMkN2X64GhKRXxC2XQNMCsNTCyAXqGdHvK3eKAjW8M5MDU8TUoFl7SnWEPr4fSvCV8StYiSPqKtdXH+ZyvOiFWNwBMkN2wONWF91gXtqbtCDiQTrT9m/6YdmP6PsTvnsT26Aq3nx1CyvULrWTJUPrxFpQFOSARwe/SP4Jd5qW5Ad8hZWAq/hrGAzCA+xbXY+GD3jrdVMD1eVeVldco7q3hkr4O1GYDnFcIGNPYqulq12gFWUdn9DjxV8XhtI6/HA4fMCBlnEQPpwVOpu2TdusrliAsvvdmj/T4fqjtHbC92QooQUY0m288DM6zlUzJidaq3CI7HQcBLgb0KGV3T9zt4xCr3Zfo321B2hvzX4pMzCbRe5A14htWMRkMDdsDqVwKR7BgatwVYtkirKjuPU0vcfJDjECuvVkBAW4HNBZ4WpkCupcFb+StlftptaBVvLnnILGaWS/j1gAKYAEUHIMqkyGotOL3QeZX2ZeGhs6e+C73Y5MAXdDbCjjwzuv1Q3uNJwNsUdtO96Ax13ItI6AUv1uKQGZIJuj54qjLGIFHvSgw/s8POgB8NQK/c0xbtYcwakiwD3x6A3ABxP8xjt1s/8HcG/I4EoJwKUiAJ6mLop6RILMWR31WQD3wj1xb3dPdAGXrmWPe+IHA/b4wv+Ewx73xI9q7PGF/5mTI8Cv794Pz4j+B9XxXo1/3nwJAAAAAElFTkSuQmCC",
                            alt: "Compartir en WhatsApp",
                          },
                        }),
                      ]
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var c = a("VU/8")(
        i,
        s,
        !1,
        function (e) {
          a("2GAs");
        },
        "data-v-516fe26f",
        null
      );
      t.default = c.exports;
    },
    H247: function (e, t) {},
    JMgU: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("8o1w"),
        o = a("NHnr"),
        n = a("KZvR"),
        i = a("rbc0"),
        s = a("MRIW"),
        c = {
          name: "TicketAbono",
          components: { Pie: i.a, Encabezado: n.a },
          beforeRouteUpdate: function (e) {
            this.obtenerDetallesDeAbono(e.params.idAbono, e.params.idApartado);
          },
          beforeMount: function () {
            o.EventBus.$emit("ponerTitulo", "Impresión de ticket"),
              this.obtenerDetallesDeAbono(
                this.$route.params.idAbono,
                this.$route.params.idApartado
              );
          },
          data: function () {
            return {
              cargando: !1,
              apartado: { Usuario: {}, Cliente: {} },
              abono: { Usuario: {} },
              ajustes: {},
            };
          },
          methods: {
            obtenerDetallesDeAbono: function (e, t) {
              var a = this;
              if (!t || !e) return this.$router.go(-1);
              (this.cargando = !0),
                r.b
                  .get("ajustes/empresa")
                  .then(function (e) {
                    a.ajustes = e;
                  })
                  .then(function () {
                    return r.b.get("apartado/" + t).then(function (e) {
                      a.apartado = e;
                    });
                  })
                  .then(function () {
                    return r.b
                      .get("abono/" + e + "/" + t)
                      .then(function (e) {
                        a.abono = e;
                      })
                      .finally(function () {
                        return (a.cargando = !1);
                      });
                  });
            },
            imprimir: function () {
              var e = this;
              this.cargando ||
                (o.EventBus.$emit("ocultarMenu"),
                setTimeout(function () {
                  var t = document.title;
                  (document.title = "Apartado #" + e.apartado.Numero),
                    window.print(),
                    (document.title = t),
                    o.EventBus.$emit("mostrarMenu");
                }, s.o));
            },
            volver: function () {
              this.$router.go(-1);
            },
          },
        },
        l = {
          render: function () {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t;
            return r(
              "v-layout",
              { staticClass: "ticket", attrs: { wrap: "", row: "" } },
              [
                r(
                  "v-flex",
                  { staticClass: "hidden-print-only", attrs: { xs12: "" } },
                  [
                    r("encabezado"),
                    e._v(" "),
                    r(
                      "v-btn",
                      {
                        attrs: { small: "", color: "success" },
                        on: {
                          click: function (t) {
                            e.volver();
                          },
                        },
                      },
                      [
                        r("v-icon", [e._v("arrow_back")]),
                        e._v("\n      Volver\n    "),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(" "),
                r(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    r("br"),
                    e._v(" "),
                    r("v-img", {
                      staticClass: "text-xs-center",
                      attrs: { src: a("jxSC") },
                    }),
                    e._v(" "),
                    r("div", { staticClass: "text-xs-center" }, [
                      r("p", [
                        r("strong", [
                          e._v("Ticket de abono #" + e._s(e.abono.IdAbono)),
                        ]),
                        e._v(" "),
                        r("br"),
                        e._v(" "),
                        r("strong", [
                          e._v("Apartado #" + e._s(e.abono.IdApartado)),
                        ]),
                      ]),
                      e._v(" "),
                      e.ajustes.Nombre
                        ? r("p", [
                            e._v(
                              "\n        " + e._s(e.ajustes.Nombre) + "\n      "
                            ),
                          ])
                        : e._e(),
                      e._v(" "),
                      e.ajustes.Direccion
                        ? r("p", [
                            e._v(
                              "\n        " +
                                e._s(e.ajustes.Direccion) +
                                "\n      "
                            ),
                          ])
                        : e._e(),
                      e._v(" "),
                      e.ajustes.Telefono
                        ? r("p", [
                            e._v("Teléfono: " + e._s(e.ajustes.Telefono)),
                          ])
                        : e._e(),
                      e._v(" "),
                      r("br"),
                      e._v(" "),
                      r("p", [
                        e._v(
                          "\n        " +
                            e._s(e._f("fechaExpresiva")(e.abono.Fecha)) +
                            "\n      "
                        ),
                      ]),
                      e._v(" "),
                      r("p", [
                        e._v("\n        Lo atendió: "),
                        r("strong", [e._v(e._s(e.abono.Usuario.Nombre))]),
                      ]),
                      e._v(" "),
                      r("p", [
                        e._v("\n        Cliente: "),
                        r("strong", [e._v(e._s(e.apartado.Cliente.Nombre))]),
                      ]),
                      e._v(" "),
                      r(
                        "div",
                        { staticClass: "text-xs-center" },
                        [
                          r(
                            "v-flex",
                            {
                              staticClass: "text-xs-right con-borde-separador",
                              attrs: { xs9: "", "offset-xs1": "" },
                            },
                            [r("br")]
                          ),
                        ],
                        1
                      ),
                    ]),
                    e._v(" "),
                    r(
                      "v-layout",
                      { attrs: { wrap: "", row: "" } },
                      [
                        e._l(e.apartado.Productos, function (t) {
                          return [
                            r(
                              "v-flex",
                              {
                                staticClass: "text-xs-left",
                                attrs: { xs12: "" },
                              },
                              [e._v(e._s(t.Descripcion))]
                            ),
                            e._v(" "),
                            r(
                              "v-flex",
                              {
                                staticClass: "text-xs-right con-borde-inferior",
                                attrs: { xs12: "" },
                              },
                              [
                                e._v(
                                  e._s(t.Cantidad) +
                                    " x " +
                                    e._s(e._f("currency")(t.PrecioVenta)) +
                                    "\n          =\n          " +
                                    e._s(
                                      e._f("currency")(
                                        t.Cantidad * t.PrecioVenta
                                      )
                                    ) +
                                    "\n        "
                                ),
                              ]
                            ),
                          ];
                        }),
                      ],
                      2
                    ),
                    e._v(" "),
                    r(
                      "div",
                      { staticClass: "text-xs-center" },
                      [
                        r(
                          "v-flex",
                          {
                            staticClass: "text-xs-right con-borde-separador",
                            attrs: { xs9: "", "offset-xs1": "" },
                          },
                          [r("br")]
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    r("div", { staticClass: "text-xs-right" }, [
                      r("p", [
                        r("strong", [e._v("Total")]),
                        e._v(" " + e._s(e._f("currency")(e.apartado.Total))),
                      ]),
                      e._v(" "),
                      r("p", [
                        r("strong", [e._v("Restante anterior")]),
                        e._v(
                          "\n        " +
                            e._s(
                              e._f("currency")(
                                e.apartado.Total -
                                  e.apartado.Abonado -
                                  e.apartado.Anticipo +
                                  e.abono.Monto
                              )
                            ) +
                            "\n      "
                        ),
                      ]),
                      e._v(" "),
                      r("p", [
                        r("strong", [e._v("Cantidad abonada")]),
                        e._v(" " + e._s(e._f("currency")(e.abono.Monto))),
                      ]),
                      e._v(" "),
                      r("p", [
                        r("strong", [e._v("Su pago")]),
                        e._v(" " + e._s(e._f("currency")(e.abono.Pago))),
                      ]),
                      e._v(" "),
                      r("p", [
                        r("strong", [e._v("Cambio")]),
                        e._v(
                          " " +
                            e._s(
                              e._f("currency")(e.abono.Pago - e.abono.Monto)
                            ) +
                            "\n      "
                        ),
                      ]),
                      e._v(" "),
                      r("p", [
                        r("strong", [e._v("Restante actual")]),
                        e._v(
                          "\n        " +
                            e._s(
                              e._f("currency")(
                                e.apartado.Total -
                                  e.apartado.Abonado -
                                  e.apartado.Anticipo
                              )
                            ) +
                            "\n      "
                        ),
                      ]),
                      e._v(" "),
                      r("br"),
                    ]),
                    e._v(" "),
                    r(
                      "div",
                      { staticClass: "text-xs-center" },
                      [
                        e.ajustes.MensajePersonal
                          ? r("p", [
                              r("strong", [
                                e._v(e._s(e.ajustes.MensajePersonal)),
                              ]),
                            ])
                          : e._e(),
                        e._v(" "),
                        r("Pie"),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(" "),
                r(
                  "v-btn",
                  {
                    staticClass: "hidden-print-only",
                    attrs: {
                      slot: "activator",
                      loading: e.cargando,
                      fixed: "",
                      dark: "",
                      fab: "",
                      bottom: "",
                      "fill-height": "",
                      right: "",
                      color: "green",
                    },
                    on: {
                      click: function (t) {
                        e.imprimir();
                      },
                    },
                    slot: "activator",
                  },
                  [r("v-icon", [e._v("print")])],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        d = a("VU/8")(c, l, !1, null, null, null);
      t.default = d.exports;
    },
    JgzN: function (e, t, a) {
      "use strict";
      var r = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a(
                      "p",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: e.productos.length <= 0,
                            expression: "productos.length <= 0",
                          },
                        ],
                      },
                      [e._v("No hay registros en el período")]
                    ),
                    e._v(" "),
                    a(
                      "v-list",
                      e._l(e.productos, function (t, r) {
                        return a(
                          "v-list-tile",
                          { key: r },
                          [
                            a(
                              "v-list-tile-content",
                              [
                                a("v-list-tile-title", [
                                  e._v(e._s(t.Descripcion)),
                                ]),
                                e._v(" "),
                                a("v-list-tile-sub-title", [
                                  e._v("Vendido "),
                                  a("strong", [e._v(e._s(t.VecesVendido))]),
                                  e._v(
                                    "\n            " +
                                      e._s(
                                        t.VecesVendido > 1 ? "veces" : "vez"
                                      ) +
                                      "\n          "
                                  ),
                                ]),
                              ],
                              1
                            ),
                          ],
                          1
                        );
                      }),
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        o = a("VU/8")({ props: ["productos"] }, r, !1, null, null, null);
      t.a = o.exports;
    },
    KZvR: function (e, t, a) {
      "use strict";
      var r = {
        render: function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t(
            "v-alert",
            { attrs: { outline: "", type: "info", value: !0 } },
            [
              t(
                "p",
                [
                  this._v("\n    Para imprimir, haga click en el botón "),
                  t("v-icon", [this._v("print")]),
                  this._v(" de la esquina\n    inferior derecha\n    "),
                  t("br"),
                  this._v(
                    "\n    Recomendamos utilizar un navegador basado en Chromium, por ejemplo, Chrome\n    y Opera.\n    "
                  ),
                  t("br"),
                  this._v(" "),
                  t("strong", [this._v("Nota: ")]),
                  this._v(
                    " recuerde que puede configurar el número de copias\n    y los datos del ticket en los ajustes\n  "
                  ),
                ],
                1
              ),
            ]
          );
        },
        staticRenderFns: [],
      };
      var o = a("VU/8")(
        { name: "Encabezado" },
        r,
        !1,
        function (e) {
          a("czUQ");
        },
        "data-v-62d8127b",
        null
      );
      t.a = o.exports;
    },
    Lw4w: function (e, t) {},
    "M72/": function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("woOf"),
        o = a.n(r),
        n = a("8o1w"),
        i = {
          beforeMount: function () {
            this.obtener();
          },
          methods: {
            guardar: function () {
              var e = this;
              (this.cargando = !0),
                n.b
                  .put("ajustes/empresa", o()({}, this.datos))
                  .then(function (t) {
                    (e.cargando = !1), t && e.$emit("guardado");
                  });
            },
            obtener: function () {
              var e = this;
              n.b.get("ajustes/empresa").then(function (t) {
                e.datos = o()({}, t);
              });
            },
          },
          data: function () {
            return {
              cargando: !1,
              datos: {
                Direccion: "",
                Nombre: "",
                MensajePersonal: "",
                Telefono: "",
              },
            };
          },
        },
        s = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a(
                      "v-form",
                      { ref: "formulario" },
                      [
                        a(
                          "v-container",
                          { attrs: { fluid: "", "grid-list-md": "" } },
                          [
                            a(
                              "v-layout",
                              { attrs: { row: "", wrap: "" } },
                              [
                                a(
                                  "v-flex",
                                  { attrs: { xs12: "", sm6: "" } },
                                  [
                                    a("v-text-field", {
                                      attrs: {
                                        "prepend-icon": "info",
                                        label: "Nombre",
                                        type: "text",
                                        hint: "Nombre de la tienda",
                                        required: "",
                                      },
                                      model: {
                                        value: e.datos.Nombre,
                                        callback: function (t) {
                                          e.$set(e.datos, "Nombre", t);
                                        },
                                        expression: "datos.Nombre",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                e._v(" "),
                                a(
                                  "v-flex",
                                  { attrs: { xs12: "", sm6: "" } },
                                  [
                                    a("v-text-field", {
                                      attrs: {
                                        "prepend-icon": "location_on",
                                        label: "Dirección",
                                        type: "text",
                                        hint: "La dirección que saldrá en el ticket",
                                        required: "",
                                      },
                                      model: {
                                        value: e.datos.Direccion,
                                        callback: function (t) {
                                          e.$set(e.datos, "Direccion", t);
                                        },
                                        expression: "datos.Direccion",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                e._v(" "),
                                a(
                                  "v-flex",
                                  { attrs: { xs12: "", sm6: "" } },
                                  [
                                    a("v-text-field", {
                                      attrs: {
                                        "prepend-icon": "local_phone",
                                        label: "Teléfono",
                                        type: "text",
                                        hint: "Número de teléfono para dudas o aclaraciones",
                                        required: "",
                                      },
                                      model: {
                                        value: e.datos.Telefono,
                                        callback: function (t) {
                                          e.$set(e.datos, "Telefono", t);
                                        },
                                        expression: "datos.Telefono",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                e._v(" "),
                                a(
                                  "v-flex",
                                  { attrs: { xs12: "", sm6: "" } },
                                  [
                                    a("v-text-field", {
                                      attrs: {
                                        "prepend-icon": "message",
                                        label: "Mensaje personal",
                                        type: "text",
                                        hint: "Texto al final del ticket, por ejemplo 'Gracias por su compra'",
                                        required: "",
                                      },
                                      model: {
                                        value: e.datos.MensajePersonal,
                                        callback: function (t) {
                                          e.$set(e.datos, "MensajePersonal", t);
                                        },
                                        expression: "datos.MensajePersonal",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-btn",
                              {
                                attrs: {
                                  slot: "activator",
                                  loading: e.cargando,
                                  fixed: "",
                                  dark: "",
                                  fab: "",
                                  bottom: "",
                                  "fill-height": "",
                                  right: "",
                                  color: "teal ligthen-1",
                                },
                                on: {
                                  click: function (t) {
                                    e.guardar();
                                  },
                                },
                                slot: "activator",
                              },
                              [a("v-icon", [e._v("save")])],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        c = a("VU/8")(i, s, !1, null, null, null).exports,
        l = a("Xxa5"),
        d = a.n(l),
        u = a("exGp"),
        v = a.n(u),
        p = a("T7Zg"),
        m = {
          name: "Impresora",
          beforeMount: function () {
            var e = this;
            return v()(
              d.a.mark(function t() {
                return d.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            n.b.get("valor/SERIAL_PLUGIN_IMPRESION")
                          );
                        case 2:
                          return (
                            (e.serialImpresion = t.sent),
                            (t.next = 5),
                            e.obtenerModoImpresion()
                          );
                        case 5:
                          return (t.next = 7), e.onModoImpresionCambiado();
                        case 7:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  e
                );
              })
            )();
          },
          methods: {
            onSerialImpresionCambiado: function () {
              var e = this;
              return v()(
                d.a.mark(function t() {
                  return d.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              n.b.put("valor", {
                                Clave: "SERIAL_PLUGIN_IMPRESION",
                                Valor: e.serialImpresion,
                              })
                            );
                          case 2:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
            onModoImpresionCambiado: function () {
              var e = this;
              return v()(
                d.a.mark(function t() {
                  return d.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e.guardarModoImpresion();
                          case 2:
                            "Impresora térmica" === e.modoImpresion &&
                              e.obtener();
                          case 3:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
            obtenerModoImpresion: function () {
              var e = this;
              return v()(
                d.a.mark(function t() {
                  return d.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), n.b.get("valor/MODO_IMPRESION")
                            );
                          case 2:
                            e.modoImpresion = t.sent;
                          case 3:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
            guardarModoImpresion: function () {
              var e = this;
              return v()(
                d.a.mark(function t() {
                  return d.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              n.b.put("valor", {
                                Clave: "MODO_IMPRESION",
                                Valor: e.modoImpresion,
                              })
                            );
                          case 2:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
            guardarImpresora: function () {
              var e = this;
              (this.guardandoImpresora = !0),
                n.b
                  .put("nombre/impresora", this.impresoraSelecionada)
                  .then(function (t) {
                    (e.guardandoImpresora = !1),
                      (e.mostrarDialogo = !1),
                      t && (e.snackbars.impresoraGuardada = !0);
                  });
            },
            probarCon: function (e) {
              var t = this;
              return v()(
                d.a.mark(function a() {
                  var r;
                  return d.a.wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (t.probandoImpresora = !0),
                              (r = new p.a(
                                p.a.URL_PLUGIN_POR_DEFECTO,
                                t.serialImpresion
                              )),
                              (a.next = 4),
                              r
                                .Iniciar()
                                .EscribirTexto(
                                  "Si puede leer este mensaje, ha configurado correctamente su impresora. Recuerde guardar los cambios\n\n"
                                )
                                .Feed(1)
                                .Corte(1)
                                .CorteParcial()
                                .Pulso(48, 60, 120)
                                .imprimirEn(e)
                            );
                          case 4:
                            a.sent
                              ? ((t.snackbars.impresoraCorrecta = !0),
                                (t.mostrarDialogo = !0))
                              : (t.snackbars.impresoraIncorrecta = !0),
                              (t.probandoImpresora = !1);
                          case 7:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    t
                  );
                })
              )();
            },
            obtener: function () {
              var e = this;
              return v()(
                d.a.mark(function t() {
                  var a;
                  return d.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (e.cargandoImpresoras = !0),
                              (t.next = 3),
                              p.a.obtenerImpresoras()
                            );
                          case 3:
                            return (
                              (e.impresoras = t.sent),
                              (t.next = 6),
                              n.b.get("nombre/impresora")
                            );
                          case 6:
                            (a = t.sent) && (e.impresoraSelecionada = a),
                              (e.cargandoImpresoras = !1);
                          case 9:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
          },
          data: function () {
            return {
              serialImpresion: "",
              modoImpresion: "",
              guardandoImpresora: !1,
              probandoImpresora: !1,
              mostrarDialogo: !1,
              snackbars: {
                impresoraCorrecta: !1,
                impresoraIncorrecta: !1,
                impresoraGuardada: !1,
              },
              cargandoImpresoras: !1,
              impresoras: [],
              impresoraSelecionada: "",
            };
          },
        },
        f = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a(
                      "v-alert",
                      {
                        attrs: {
                          type: "info",
                          value: "Impresora térmica" === e.modoImpresion,
                        },
                      },
                      [
                        e._v(
                          "\n      Por favor, antes de elegir, instale su impresora como se indica en:\n      "
                        ),
                        a(
                          "a",
                          {
                            staticClass: "white--text",
                            attrs: {
                              target: "_blank",
                              href: "https://parzibyte.me/blog/2017/12/11/instalar-impresora-termica-generica/",
                            },
                          },
                          [
                            e._v(
                              "https://parzibyte.me/blog/2017/12/11/instalar-impresora-termica-generica/"
                            ),
                          ]
                        ),
                        e._v(
                          "\n      y después regrese a este apartado. De otro modo, no funcionará.\n    "
                        ),
                      ]
                    ),
                    e._v(" "),
                    a("v-select", {
                      attrs: {
                        items: ["Navegador web", "Impresora térmica"],
                        label: "Modo de impresión",
                      },
                      on: { change: e.onModoImpresionCambiado },
                      model: {
                        value: e.modoImpresion,
                        callback: function (t) {
                          e.modoImpresion = t;
                        },
                        expression: "modoImpresion",
                      },
                    }),
                    e._v(" "),
                    a("v-select", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "Impresora térmica" === e.modoImpresion,
                          expression: "modoImpresion === 'Impresora térmica'",
                        },
                      ],
                      attrs: {
                        loading: e.cargandoImpresoras,
                        items: e.impresoras,
                        label: "Seleccione su impresora",
                      },
                      model: {
                        value: e.impresoraSelecionada,
                        callback: function (t) {
                          e.impresoraSelecionada = t;
                        },
                        expression: "impresoraSelecionada",
                      },
                    }),
                    e._v(" "),
                    a("v-text-field", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "Impresora térmica" === e.modoImpresion,
                          expression: "modoImpresion === 'Impresora térmica'",
                        },
                      ],
                      attrs: {
                        label: "Serial (opcional)",
                        hint: "Serial para el plugin de impresión (opcional)",
                      },
                      on: {
                        change: function (t) {
                          e.onSerialImpresionCambiado();
                        },
                      },
                      model: {
                        value: e.serialImpresion,
                        callback: function (t) {
                          e.serialImpresion = e._n(t);
                        },
                        expression: "serialImpresion",
                      },
                    }),
                    e._v(" "),
                    a(
                      "v-btn",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value:
                              e.impresoraSelecionada &&
                              "Impresora térmica" === e.modoImpresion,
                            expression:
                              "impresoraSelecionada && modoImpresion === 'Impresora térmica'",
                          },
                        ],
                        attrs: { loading: e.probandoImpresora, color: "info" },
                        on: {
                          click: function (t) {
                            e.probarCon(e.impresoraSelecionada);
                          },
                        },
                      },
                      [e._v("Imprimir ticket de prueba\n    ")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 5e3, right: !0, bottom: !0 },
                    model: {
                      value: e.snackbars.impresoraCorrecta,
                      callback: function (t) {
                        e.$set(e.snackbars, "impresoraCorrecta", t);
                      },
                      expression: "snackbars.impresoraCorrecta",
                    },
                  },
                  [
                    e._v(
                      "\n    El plugin informa que la impresora funciona correctamente\n    "
                    ),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.impresoraCorrecta = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 0, right: !0, bottom: !0 },
                    model: {
                      value: e.snackbars.impresoraIncorrecta,
                      callback: function (t) {
                        e.$set(e.snackbars, "impresoraIncorrecta", t);
                      },
                      expression: "snackbars.impresoraIncorrecta",
                    },
                  },
                  [
                    e._v(
                      "\n    Hubo un error al probar la impresora. Asegúrese de que está conectada\n    "
                    ),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.impresoraIncorrecta = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 2e3, right: !0, bottom: !0 },
                    model: {
                      value: e.snackbars.impresoraGuardada,
                      callback: function (t) {
                        e.$set(e.snackbars, "impresoraGuardada", t);
                      },
                      expression: "snackbars.impresoraGuardada",
                    },
                  },
                  [
                    e._v("\n    Impresora guardada\n    "),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.impresoraGuardada = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-dialog",
                  {
                    attrs: { persistent: "", "max-width": "500" },
                    model: {
                      value: e.mostrarDialogo,
                      callback: function (t) {
                        e.mostrarDialogo = t;
                      },
                      expression: "mostrarDialogo",
                    },
                  },
                  [
                    a(
                      "v-card",
                      [
                        a("v-card-title", { staticClass: "headline" }, [
                          e._v("¿Guardar impresora?"),
                        ]),
                        e._v(" "),
                        a("v-card-text", [
                          a("p", [
                            e._v(
                              "\n          Según el plugin, la impresora funciona correctamente (suponiendo que\n          está conectada)\n          "
                            ),
                            a("br"),
                            e._v(
                              "¿Desea guardar esta configuración de impresora?\n        "
                            ),
                          ]),
                        ]),
                        e._v(" "),
                        a(
                          "v-card-actions",
                          [
                            a("v-spacer"),
                            e._v(" "),
                            a(
                              "v-btn",
                              {
                                attrs: {
                                  loading: e.guardandoImpresora,
                                  color: "green darken-1",
                                  flat: "flat",
                                },
                                nativeOn: {
                                  click: function (t) {
                                    e.guardarImpresora();
                                  },
                                },
                              },
                              [e._v("\n          Sí\n        ")]
                            ),
                            e._v(" "),
                            a(
                              "v-btn",
                              {
                                attrs: { color: "gray", flat: "flat" },
                                nativeOn: {
                                  click: function (t) {
                                    e.mostrarDialogo = !1;
                                  },
                                },
                              },
                              [e._v("No")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        h = a("VU/8")(m, f, !1, null, null, null).exports,
        g = a("MRIW"),
        b = {
          name: "Otros",
          beforeMount: function () {
            var e = this;
            this.obtener().then(function () {
              e.obtenerIP();
            });
          },
          methods: {
            obtenerIP: function () {
              var e = this;
              n.b.get("ip").then(function (t) {
                t && (e.ip = t + ":" + g.g + "/static/index.html");
              });
            },
            obtener: function () {
              var e = this;
              return n.b.get("ajustes/otros").then(function (t) {
                t &&
                  ((e.impresionCodigos = t.ModoImpresionCodigoDeBarras),
                  (e.preferenciaAlVender = t.ModoLecturaProductos),
                  (e.copias = {
                    contado: t.NumeroDeCopiasTicketContado,
                    apartado: t.NumeroDeCopiasTicketApartado,
                    abono: t.NumeroDeCopiasTicketAbono,
                  }));
              });
            },
            guardar: function () {
              var e = this;
              n.b
                .put("ajustes/otros", {
                  ModoImpresionCodigoDeBarras: this.impresionCodigos,
                  ModoLecturaProductos: this.preferenciaAlVender,
                  NumeroDeCopiasTicketContado: this.copias.contado,
                  NumeroDeCopiasTicketApartado: this.copias.apartado,
                  NumeroDeCopiasTicketAbono: this.copias.abono,
                })
                .then(function (t) {
                  t && e.$emit("guardado");
                });
            },
          },
          data: function () {
            return {
              ip: "",
              cargando: !1,
              impresionCodigos: "codigo",
              preferenciaAlVender: "codigo",
              copias: { contado: 1, apartado: 1, abono: 1 },
              reglas: {
                copias: [
                  function (e) {
                    return e
                      ? !((e = Number(e)) < 0) ||
                          "No puede elegir un número negativo"
                      : "Escriba la cantidad";
                  },
                ],
              },
            };
          },
        },
        A = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a(
                      "v-radio-group",
                      {
                        attrs: {
                          label:
                            "Al generar los códigos de barras, prefiero imprimir...",
                        },
                        model: {
                          value: e.impresionCodigos,
                          callback: function (t) {
                            e.impresionCodigos = t;
                          },
                          expression: "impresionCodigos",
                        },
                      },
                      [
                        a("v-radio", {
                          attrs: {
                            label: "El código de barras",
                            value: "codigo",
                          },
                        }),
                        e._v(" "),
                        a("v-radio", {
                          attrs: {
                            label: "El número del producto",
                            value: "numero",
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a(
                      "v-radio-group",
                      {
                        attrs: {
                          label:
                            "Al vender y escanear el código con el lector, los productos serán buscados por",
                        },
                        model: {
                          value: e.preferenciaAlVender,
                          callback: function (t) {
                            e.preferenciaAlVender = t;
                          },
                          expression: "preferenciaAlVender",
                        },
                      },
                      [
                        a("v-radio", {
                          attrs: {
                            label: "El código de barras",
                            value: "codigo",
                          },
                        }),
                        e._v(" "),
                        a("v-radio", {
                          attrs: {
                            label: "El número del producto",
                            value: "numero",
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a("h3", [e._v("Cantidad de copias al imprimir tickets")]),
                    e._v(" "),
                    a("p", [
                      e._v(
                        "\n      ¿Cuántas copias de los tickets desea obtener en cada impresión? (1 por\n      defecto)\n    "
                      ),
                    ]),
                    e._v(" "),
                    a(
                      "v-container",
                      { attrs: { fluid: "", "grid-list-md": "" } },
                      [
                        a(
                          "v-layout",
                          { attrs: { row: "", wrap: "" } },
                          [
                            a(
                              "v-flex",
                              { attrs: { xs12: "", sm4: "" } },
                              [
                                a("v-text-field", {
                                  attrs: {
                                    label: "Venta al contado",
                                    type: "number",
                                    rules: e.reglas.copias,
                                    hint: "Escriba cuántas copias desea imprimir. 0 significa no imprimir ticket.",
                                    required: "",
                                  },
                                  model: {
                                    value: e.copias.contado,
                                    callback: function (t) {
                                      e.$set(e.copias, "contado", e._n(t));
                                    },
                                    expression: "copias.contado",
                                  },
                                }),
                              ],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-flex",
                              { attrs: { xs12: "", sm4: "" } },
                              [
                                a("v-text-field", {
                                  attrs: {
                                    label: "Apartado",
                                    type: "number",
                                    rules: e.reglas.copias,
                                    hint: "Escriba cuántas copias desea imprimir. 0 significa no imprimir ticket.",
                                    required: "",
                                  },
                                  model: {
                                    value: e.copias.apartado,
                                    callback: function (t) {
                                      e.$set(e.copias, "apartado", e._n(t));
                                    },
                                    expression: "copias.apartado",
                                  },
                                }),
                              ],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-flex",
                              { attrs: { xs12: "", sm4: "" } },
                              [
                                a("v-text-field", {
                                  attrs: {
                                    label: "Abono",
                                    type: "number",
                                    rules: e.reglas.copias,
                                    hint: "Escriba cuántas copias desea imprimir. 0 significa no imprimir ticket.",
                                    required: "",
                                  },
                                  model: {
                                    value: e.copias.abono,
                                    callback: function (t) {
                                      e.$set(e.copias, "abono", e._n(t));
                                    },
                                    expression: "copias.abono",
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-flex",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.ip,
                        expression: "ip",
                      },
                    ],
                  },
                  [
                    a("h3", { staticClass: "title" }, [
                      e._v("Conectarme desde otro dispositivo"),
                    ]),
                    e._v("\n    Asegúrate de que tu otro dispositivo\n    "),
                    a("strong", [e._v("(teléfono, tableta, computadora)")]),
                    e._v(
                      " esté en la misma red que\n    esta computadora.\n    "
                    ),
                    a("br"),
                    e._v(
                      "\n    Después, desde tu dispositivo, en tu navegador preferido (preferentemente\n    Chrome) escribe la dirección "
                    ),
                    a("strong", [e._v(e._s(e.ip))]),
                    e._v(" "),
                    a("br"),
                    e._v("\n    También puedes escanear este código QR:\n    "),
                    a("br"),
                    e._v(" "),
                    a("qrcode", {
                      attrs: { value: e.ip, options: { size: 200 } },
                    }),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-btn",
                  {
                    attrs: {
                      slot: "activator",
                      loading: e.cargando,
                      fixed: "",
                      dark: "",
                      fab: "",
                      bottom: "",
                      "fill-height": "",
                      right: "",
                      color: "teal ligthen-1",
                    },
                    on: {
                      click: function (t) {
                        e.guardar();
                      },
                    },
                    slot: "activator",
                  },
                  [a("v-icon", [e._v("save")])],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        _ = a("VU/8")(b, A, !1, null, null, null).exports,
        x = a("NHnr"),
        k = {
          components: {
            Publicidad: a("nBfo").a,
            DatosNegocio: c,
            Impresora: h,
            Otros: _,
          },
          beforeMount: function () {
            x.EventBus.$emit("ponerTitulo", "Ajustes");
          },
          data: function () {
            return { guardado: !1 };
          },
        },
        C = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                a("v-flex", { attrs: { xs12: "" } }, [a("Publicidad")], 1),
                e._v(" "),
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a(
                      "v-tabs",
                      {
                        attrs: {
                          "icons-and-text": "",
                          centered: "",
                          dark: "",
                          color: "teal",
                        },
                      },
                      [
                        a("v-tabs-slider", { attrs: { color: "yellow" } }),
                        e._v(" "),
                        a(
                          "v-tab",
                          { attrs: { href: "#tab-1" } },
                          [
                            e._v("\n        Datos negocio\n        "),
                            a("v-icon", [e._v("subject")]),
                          ],
                          1
                        ),
                        e._v(" "),
                        a(
                          "v-tab",
                          { attrs: { href: "#tab-2" } },
                          [
                            e._v("\n        Impresora\n        "),
                            a("v-icon", [e._v("local_printshop")]),
                          ],
                          1
                        ),
                        e._v(" "),
                        a(
                          "v-tab",
                          { attrs: { href: "#tab-3" } },
                          [
                            e._v("\n        Otros\n        "),
                            a("v-icon", [e._v("build")]),
                          ],
                          1
                        ),
                        e._v(" "),
                        a(
                          "v-tab-item",
                          { attrs: { value: "tab-1" } },
                          [
                            a("DatosNegocio", {
                              on: {
                                guardado: function (t) {
                                  e.guardado = !0;
                                },
                              },
                            }),
                          ],
                          1
                        ),
                        e._v(" "),
                        a(
                          "v-tab-item",
                          { attrs: { value: "tab-2" } },
                          [a("Impresora")],
                          1
                        ),
                        e._v(" "),
                        a(
                          "v-tab-item",
                          { attrs: { value: "tab-3" } },
                          [
                            a("Otros", {
                              on: {
                                guardado: function (t) {
                                  e.guardado = !0;
                                },
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-snackbar",
                      {
                        attrs: { timeout: 2e3, right: !0, bottom: !0 },
                        model: {
                          value: e.guardado,
                          callback: function (t) {
                            e.guardado = t;
                          },
                          expression: "guardado",
                        },
                      },
                      [
                        e._v("\n      Ajustes guardados\n      "),
                        a(
                          "v-btn",
                          {
                            attrs: { flat: "", color: "pink" },
                            nativeOn: {
                              click: function (t) {
                                e.guardado = !1;
                              },
                            },
                          },
                          [e._v("OK")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        E = a("VU/8")(k, C, !1, null, null, null);
      t.default = E.exports;
    },
    MRIW: function (e, t, a) {
      "use strict";
      a.d(t, "e", function () {
        return r;
      }),
        a.d(t, "b", function () {
          return o;
        }),
        a.d(t, "h", function () {
          return n;
        }),
        a.d(t, "i", function () {
          return i;
        }),
        a.d(t, "n", function () {
          return s;
        }),
        a.d(t, "m", function () {
          return c;
        }),
        a.d(t, "j", function () {
          return l;
        }),
        a.d(t, "k", function () {
          return d;
        }),
        a.d(t, "l", function () {
          return u;
        }),
        a.d(t, "f", function () {
          return v;
        }),
        a.d(t, "c", function () {
          return p;
        }),
        a.d(t, "d", function () {
          return m;
        }),
        a.d(t, "a", function () {
          return f;
        }),
        a.d(t, "o", function () {
          return h;
        }),
        a.d(t, "g", function () {
          return g;
        }),
        a.d(t, "p", function () {
          return b;
        });
      var r =
          "Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre".split(
            " "
          ),
        o = 864e5,
        n = 0,
        i = 1,
        s = 2,
        c = 3,
        l = 4,
        d = 5,
        u = 6,
        v = "Conoce Caman Jeans. Punto de venta e Inventario",
        p = encodeURIComponent("http://bit.ly/sublime-pos"),
        m = "bit.ly/sublime-pos",
        f = "parzibyte@gmail.com",
        h = 200,
        g = "2106",
        b = "parzibyte";
    },
    NHnr: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("7+uW"),
        o = a("mvHQ"),
        n = a.n(o),
        i = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-dialog",
              {
                attrs: { persistent: "", "max-width": "500" },
                model: {
                  value: e.mostrar,
                  callback: function (t) {
                    e.mostrar = t;
                  },
                  expression: "mostrar",
                },
              },
              [
                a(
                  "v-card",
                  [
                    a("v-card-title", { staticClass: "headline" }, [
                      e._v("Permiso denegado"),
                    ]),
                    e._v(" "),
                    a(
                      "v-card-text",
                      [
                        a("h3", [
                          e._v(
                            "\n        Parece que no tienes permiso de estar en este lugar o de realizar la\n        acción que estabas a punto de hacer\n      "
                          ),
                        ]),
                        e._v(" "),
                        a("v-alert", { attrs: { type: "error", value: !0 } }, [
                          a("strong", [e._v("Número de permiso: ")]),
                          e._v(" " + e._s(e.permiso.Permiso.Id)),
                          a("br"),
                          e._v(" "),
                          a("strong", [e._v("Descripción: ")]),
                          e._v(" " + e._s(e.permiso.Permiso.Descripcion)),
                          a("br"),
                          e._v(" "),
                          a("br"),
                          e._v(
                            "\n        Si crees que deberías tener el permiso que se te ha denegado, pide a\n        un administrador que te lo conceda\n      "
                          ),
                        ]),
                        e._v(" "),
                        a("p", { staticClass: "caption" }, [
                          e._v(
                            "\n        Nota: Si continúas, es posible que experimentes errores."
                          ),
                          a("br"),
                          e._v(
                            "\n        De cualquier forma, este diálogo sólo es un aviso, ya que los\n        verdaderos permisos son verificados en el servidor por razones obvias.\n      "
                          ),
                        ]),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-card-actions",
                      [
                        a("v-spacer"),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: { color: "gray", flat: "flat" },
                            nativeOn: {
                              click: function (t) {
                                e.cerrarDialogo();
                              },
                            },
                          },
                          [e._v("OK")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        s = {
          components: {
            DialogoPermisoDenegado: a("VU/8")(
              {
                name: "DialogoPermisoDenegado",
                props: ["mostrar", "permiso"],
                methods: {
                  cerrarDialogo: function () {
                    this.$emit("cerrar");
                  },
                },
              },
              i,
              !1,
              null,
              null,
              null
            ).exports,
          },
          beforeMount: function () {
            var e = this;
            _.$on("ponerDatosUsuario", function (t) {
              (e.datosUsuario = t), e.ponerIntervaloQueIntercambiaTitulo();
            }),
              _.$on("mostrarMenu", function () {
                e.drawer = !0;
              }),
              _.$on("mostrarToolbar", function () {
                e.mostrarMenu = !0;
              }),
              _.$on("ocultarMenu", function () {
                e.drawer = !1;
              }),
              _.$on("ocultarToolbar", function () {
                e.mostrarMenu = !1;
              }),
              _.$on("ponerTitulo", function (t) {
                e.titulo = t;
              }),
              _.$on("ponerNombreDeUsuario", function (t) {
                e.nombreDeUsuario = t;
              }),
              _.$on("errorDeServidor", function (t) {
                (e.snackbars.errorDeServidor = !0), (e.errorDeServidor = t);
              }),
              _.$on("permisoDenegado", function (t) {
                (e.dialogos.permisoDenegado = !0), (e.permisoDenegado = t);
              });
            var t = { pagina: document.title, url: window.location.href };
            fetch(
              "https://estadisticasusoprogramas.parzibyte.repl.co/contador/registrar_visita.php",
              { method: "POST", body: n()(t) }
            );
          },
          methods: {
            ponerIntervaloQueIntercambiaTitulo: function () {
              var e = this;
              if (
                (this.idIntervalo && clearInterval(this.idIntervalo),
                (this.datosUsuario || {}).Negocio)
              ) {
                var t = this.tituloGrande;
                this.idIntervalo = setInterval(function () {
                  e.banderaCambiarTitulo
                    ? ((t = e.tituloGrande),
                      (e.tituloGrande = e.datosUsuario.Negocio.nombre))
                    : (e.tituloGrande = t),
                    (e.banderaCambiarTitulo = !e.banderaCambiarTitulo);
                }, 3e3);
              }
            },
          },
          data: function () {
            return {
              idIntervalo: null,
              datosUsuario: {},
              banderaCambiarTitulo: !1,
              dialogos: { permisoDenegado: !1 },
              snackbars: { errorDeServidor: !1 },
              errorDeServidor: "",
              permisoDenegado: { Permiso: {} },
              mostrarMenu: !0,
              nombreDeUsuario: "",
              titulo: "",
              año: new Date().getFullYear(),
              fixed: !0,
              drawer: !1,
              miniVariant: !1,
              right: !0,
              rightDrawer: !1,
              tituloGrande: "Caman Jeans",
            };
          },
          name: "App",
        },
        c = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-app",
              [
                a("dialogo-permiso-denegado", {
                  attrs: {
                    mostrar: e.dialogos.permisoDenegado,
                    permiso: e.permisoDenegado,
                  },
                  on: {
                    cerrar: function (t) {
                      e.dialogos.permisoDenegado = !1;
                    },
                  },
                }),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 5e3, top: !0 },
                    model: {
                      value: e.snackbars.errorDeServidor,
                      callback: function (t) {
                        e.$set(e.snackbars, "errorDeServidor", t);
                      },
                      expression: "snackbars.errorDeServidor",
                    },
                  },
                  [
                    e._v(
                      "\n    Error de servidor: " +
                        e._s(e.errorDeServidor) +
                        "\n    "
                    ),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.errorDeServidor = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 1e4, top: !0 },
                    model: {
                      value: e.snackbars.permisoDenegado,
                      callback: function (t) {
                        e.$set(e.snackbars, "permisoDenegado", t);
                      },
                      expression: "snackbars.permisoDenegado",
                    },
                  },
                  [
                    e._v(
                      "\n    Permiso denegado: " +
                        e._s(e.permisoDenegado) +
                        "\n    "
                    ),
                    a("br"),
                    e._v(" "),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.permisoDenegado = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-navigation-drawer",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.mostrarMenu,
                        expression: "mostrarMenu",
                      },
                    ],
                    attrs: {
                      persistent: "",
                      "enable-resize-watcher": "",
                      fixed: "",
                      app: "",
                    },
                    model: {
                      value: e.drawer,
                      callback: function (t) {
                        e.drawer = t;
                      },
                      expression: "drawer",
                    },
                  },
                  [
                    a(
                      "v-list",
                      { staticClass: "hidden-print-only" },
                      [
                        a(
                          "v-layout",
                          { attrs: { row: "", "align-center": "" } },
                          [
                            a(
                              "v-flex",
                              { attrs: { xs6: "" } },
                              [a("v-subheader", [e._v(" Tienda ")])],
                              1
                            ),
                          ],
                          1
                        ),
                        e._v(" "),
                        a(
                          "v-list-tile",
                          { attrs: { router: "", to: "/creditos", exact: "" } },
                          [
                            a(
                              "v-list-tile-action",
                              [a("v-icon", [e._v("info")])],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-list-tile-content",
                              [a("v-list-tile-title", [e._v("Ayuda")])],
                              1
                            ),
                          ],
                          1
                        ),
                        e._v(" "),
                        a(
                          "v-list-tile",
                          { attrs: { router: "", to: "/", exact: "" } },
                          [
                            a(
                              "v-list-tile-action",
                              [a("v-icon", [e._v("home")])],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-list-tile-content",
                              [a("v-list-tile-title", [e._v("Inicio")])],
                              1
                            ),
                          ],
                          1
                        ),
                        e._v(" "),
                        a(
                          "v-list-tile",
                          {
                            attrs: { router: "", to: "/escritorio", exact: "" },
                          },
                          [
                            a(
                              "v-list-tile-action",
                              [a("v-icon", [e._v("dashboard")])],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-list-tile-content",
                              [a("v-list-tile-title", [e._v("Escritorio")])],
                              1
                            ),
                          ],
                          1
                        ),
                        e._v(" "),
                        a(
                          "v-list-tile",
                          {
                            attrs: { router: "", to: "/inventario", exact: "" },
                          },
                          [
                            a(
                              "v-list-tile-action",
                              [a("v-icon", [e._v("store")])],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-list-tile-content",
                              [a("v-list-tile-title", [e._v("Productos")])],
                              1
                            ),
                          ],
                          1
                        ),
                        e._v(" "),
                        a(
                          "v-list-tile",
                          { attrs: { router: "", to: "/vender", exact: "" } },
                          [
                            a(
                              "v-list-tile-action",
                              [a("v-icon", [e._v("shopping_cart")])],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-list-tile-content",
                              [a("v-list-tile-title", [e._v("Vender")])],
                              1
                            ),
                          ],
                          1
                        ),
                        e._v(" "),
                        a(
                          "v-list-tile",
                          { attrs: { router: "", to: "/clientes", exact: "" } },
                          [
                            a(
                              "v-list-tile-action",
                              [a("v-icon", [e._v("people")])],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-list-tile-content",
                              [a("v-list-tile-title", [e._v("Clientes")])],
                              1
                            ),
                          ],
                          1
                        ),
                        e._v(" "),
                        a(
                          "v-list-tile",
                          { attrs: { router: "", to: "/caja", exact: "" } },
                          [
                            a(
                              "v-list-tile-action",
                              [a("v-icon", [e._v("inbox")])],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-list-tile-content",
                              [a("v-list-tile-title", [e._v("Caja")])],
                              1
                            ),
                          ],
                          1
                        ),
                        e._v(" "),
                        a(
                          "v-list-group",
                          {
                            attrs: {
                              "prepend-icon": "collections_bookmark",
                              value: !1,
                            },
                          },
                          [
                            a(
                              "v-list-tile",
                              {
                                attrs: { slot: "activator" },
                                slot: "activator",
                              },
                              [a("v-list-tile-title", [e._v("Reportes")])],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-list-tile",
                              {
                                attrs: {
                                  router: "",
                                  to: "/reporte/ventas/contado",
                                  exact: "",
                                },
                              },
                              [
                                a("v-list-tile-title", [
                                  e._v("Ventas al contado"),
                                ]),
                              ],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-list-tile",
                              {
                                attrs: {
                                  router: "",
                                  to: "/reporte/apartados",
                                  exact: "",
                                },
                              },
                              [a("v-list-tile-title", [e._v("Apartados")])],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-list-tile",
                              {
                                attrs: {
                                  router: "",
                                  to: "/reporte/caja",
                                  exact: "",
                                },
                              },
                              [a("v-list-tile-title", [e._v("Caja")])],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-list-tile",
                              {
                                attrs: {
                                  router: "",
                                  to: "/reporte/stock",
                                  exact: "",
                                },
                              },
                              [
                                a("v-list-tile-title", [
                                  e._v("Productos con baja existencia"),
                                ]),
                              ],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-list-tile",
                              {
                                attrs: {
                                  router: "",
                                  to: "/reporte/inventario",
                                  exact: "",
                                },
                              },
                              [a("v-list-tile-title", [e._v("Inventario")])],
                              1
                            ),
                          ],
                          1
                        ),
                        e._v(" "),
                        a(
                          "v-list-tile",
                          { attrs: { router: "", to: "/graficas", exact: "" } },
                          [
                            a(
                              "v-list-tile-action",
                              [a("v-icon", [e._v("bar_chart")])],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-list-tile-content",
                              [
                                a("v-list-tile-title", [
                                  e._v("Gráficas y estadísticas"),
                                ]),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        e._v(" "),
                        a(
                          "v-list-tile",
                          { attrs: { router: "", to: "/usuarios", exact: "" } },
                          [
                            a(
                              "v-list-tile-action",
                              [a("v-icon", [e._v("verified_user")])],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-list-tile-content",
                              [a("v-list-tile-title", [e._v("Usuarios")])],
                              1
                            ),
                          ],
                          1
                        ),
                        e._v(" "),
                        a(
                          "v-list-group",
                          { attrs: { "prepend-icon": "add", value: !1 } },
                          [
                            a(
                              "v-list-tile",
                              {
                                attrs: { slot: "activator" },
                                slot: "activator",
                              },
                              [a("v-list-tile-title", [e._v("Más")])],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-list-tile",
                              {
                                attrs: {
                                  router: "",
                                  to: "/hacer/inventario",
                                  exact: "",
                                },
                              },
                              [
                                a("v-list-tile-title", [
                                  e._v("Hacer inventario"),
                                ]),
                              ],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-list-tile",
                              {
                                attrs: {
                                  router: "",
                                  to: "/imprimir/codigos",
                                  exact: "",
                                },
                              },
                              [
                                a("v-list-tile-title", [
                                  e._v("Imprimir códigos de barras"),
                                ]),
                              ],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-list-tile",
                              {
                                attrs: {
                                  router: "",
                                  to: "/ajustes",
                                  exact: "",
                                },
                              },
                              [a("v-list-tile-title", [e._v("Ajustes")])],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-list-tile",
                              {
                                attrs: {
                                  router: "",
                                  to: "/creditos",
                                  exact: "",
                                },
                              },
                              [a("v-list-tile-title", [e._v("Ayuda")])],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-list-tile",
                              {
                                attrs: { router: "", to: "/logout", exact: "" },
                              },
                              [a("v-list-tile-title", [e._v("Salir")])],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-toolbar",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: e.mostrarMenu,
                        expression: "mostrarMenu",
                      },
                    ],
                    staticClass: "hidden-print-only",
                    attrs: { color: "white", app: "" },
                  },
                  [
                    a("v-toolbar-side-icon", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: e.mostrarMenu,
                          expression: "mostrarMenu",
                        },
                      ],
                      on: {
                        click: function (t) {
                          t.stopPropagation(), (e.drawer = !e.drawer);
                        },
                      },
                    }),
                    e._v(" "),
                    a("v-toolbar-title", [
                      a("span", { staticClass: "title hidden-sm-and-down" }, [
                        e._v(e._s(e.tituloGrande)),
                      ]),
                      e._v(" "),
                      a(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e.titulo,
                              expression: "titulo",
                            },
                          ],
                          staticClass: "body-2 hidden-sm-and-down",
                        },
                        [e._v("-")]
                      ),
                      e._v(" "),
                      a("span", { staticClass: "body-2" }, [
                        e._v(e._s(e.titulo)),
                      ]),
                    ]),
                    e._v(" "),
                    a("v-spacer"),
                    e._v(" "),
                    a(
                      "v-toolbar-items",
                      { staticClass: "hidden-sm-and-down" },
                      [
                        a(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: e.datosUsuario.Nombre,
                                expression: "datosUsuario.Nombre",
                              },
                            ],
                            staticClass: "title hidden-sm-and-down",
                            staticStyle: { "align-self": "center" },
                          },
                          [
                            e._v(
                              "\n        Hola, " +
                                e._s(e.datosUsuario.Nombre) +
                                "\n        "
                            ),
                            a("v-icon", { attrs: { color: "black" } }, [
                              e._v("sentiment_very_satisfied"),
                            ]),
                          ],
                          1
                        ),
                      ]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-content",
                  { staticClass: "fondo-blanco" },
                  [
                    a(
                      "v-container",
                      { staticClass: "fondo-blanco", attrs: { fluid: "" } },
                      [
                        a(
                          "v-slide-y-transition",
                          { attrs: { mode: "out-in" } },
                          [a("router-view")],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-footer",
                  {
                    staticClass: "fondo-blanco hidden-print-only",
                    staticStyle: { "min-height": "3rem" },
                    attrs: { fixed: e.fixed, app: "" },
                  },
                  [
                    a(
                      "span",
                      [
                        a("strong", [
                          e._v("Caman Jeans - Punto de venta e Inventario"),
                        ]),
                        e._v(" programado con\n      "),
                        a("v-icon", { attrs: { color: "red" } }, [
                          e._v("favorite"),
                        ]),
                        e._v(" por\n      "),
                        a(
                          "a",
                          {
                            attrs: {
                              href: "https://parzibyte.me/",
                              target: "_blank",
                            },
                          },
                          [e._v("Parzibyte")]
                        ),
                        e._v(".\n    "),
                      ],
                      1
                    ),
                  ]
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var l = a("VU/8")(
          s,
          c,
          !1,
          function (e) {
            a("+jvt");
          },
          null,
          null
        ).exports,
        d = a("/ocq"),
        u = a("8o1w");
      r.default.use(d.a);
      var v = new d.a({
        routes: [
          { path: "/", name: "Inicio", component: a("7FkD").default },
          {
            path: "/inventario",
            name: "Inventario",
            component: a("sBh6").default,
          },
          { path: "/vender", name: "Vender", component: a("1JZ5").default },
          { path: "/clientes", name: "Clientes", component: a("vLku").default },
          {
            path: "/reporte/ventas/contado",
            name: "ReporteVentasContado",
            component: a("tmUQ").default,
          },
          {
            path: "/reporte/apartados",
            name: "ReporteApartados",
            component: a("mWXJ").default,
          },
          {
            path: "/reporte/caja",
            name: "ReporteCaja",
            component: a("1XAE").default,
          },
          {
            path: "/reporte/inventario",
            name: "ReporteInventario",
            component: a("wOnE").default,
          },
          {
            path: "/imprimir/codigos",
            name: "ImprimirCodigosDeBarras",
            component: a("rr//").default,
          },
          {
            path: "/hacer/inventario",
            name: "HacerInventario",
            component: a("44td").default,
          },
          { path: "/caja", name: "Caja", component: a("Z4vG").default },
          {
            path: "/reporte/stock",
            name: "ReporteStock",
            component: a("jx+G").default,
          },
          { path: "/creditos", name: "AcercaDe", component: a("nfYx").default },
          {
            path: "/escritorio",
            name: "Escritorio",
            component: a("hBjW").default,
          },
          { path: "/graficas", name: "Graficas", component: a("3jGX").default },
          { path: "/ajustes", name: "Ajustes", component: a("M72/").default },
          { path: "/login", name: "Login", component: a("xJsL").default },
          { path: "/usuarios", name: "Usuarios", component: a("XJMd").default },
          { path: "/logout", name: "Logout", component: a("0Kyw").default },
          { path: "/registro", name: "Registro", component: a("bpCJ").default },
          {
            path: "/verificar/:token",
            name: "VerificarNegocio",
            component: a("FOHt").default,
          },
          {
            path: "/eliminar/:token",
            name: "EliminarNegocio",
            component: a("R9PF").default,
          },
          {
            path: "/ticket/venta/contado/:idVenta",
            name: "TicketDeVentaContado",
            component: a("qdUR").default,
          },
          {
            path: "/ticket/apartado/:idApartado",
            name: "TicketDeApartado",
            component: a("S1cs").default,
          },
          {
            path: "/ticket/abono/:idAbono/apartado/:idApartado",
            name: "TicketDeAbono",
            component: a("JMgU").default,
          },
          {
            path: "/ticket/caja/",
            name: "TicketDeCaja",
            component: a("SX/p").default,
          },
        ],
      });
      v.beforeEach(function (e, t, a) {
        -1 !==
        [
          "Login",
          "Logout",
          "Registro",
          "VerificarNegocio",
          "EliminarNegocio",
        ].indexOf(e.name)
          ? a()
          : u.a.get("estoy/logueado").then(function (e) {
              e ? a() : a({ name: "Login" });
            });
      });
      var p = v,
        m = a("3EgV"),
        f = a.n(m),
        h = (a("7zck"), a("iFuF")),
        g = a.n(h),
        b = a("Ik4r"),
        A = a.n(b);
      a.d(t, "EventBus", function () {
        return _;
      });
      var _ = new r.default();
      r.default.component("qrcode", A.a),
        r.default.filter("fechaExpresiva", function (e) {
          return e
            ? [
                "domingo",
                "lunes",
                "martes",
                "miércoles",
                "jueves",
                "viernes",
                "sábado",
              ][(e = new Date(e)).getDay()] +
                ", " +
                e.getDate().toString() +
                " de " +
                [
                  "enero",
                  "febrero",
                  "marzo",
                  "abril",
                  "mayo",
                  "junio",
                  "julio",
                  "agosto",
                  "septiembre",
                  "octubre",
                  "noviembre",
                  "diciembre",
                ][e.getMonth()] +
                " de " +
                e.getFullYear().toString() +
                " " +
                (e.getHours() > 9
                  ? e.getHours()
                  : "0" + e.getHours()
                ).toString() +
                ":" +
                (e.getMinutes() > 9
                  ? e.getMinutes()
                  : "0" + e.getMinutes()
                ).toString()
            : "";
        }),
        r.default.filter("fechaSinHora", function (e) {
          return e
            ? (e = new Date(e)).getDate().toString() +
                " de " +
                [
                  "enero",
                  "febrero",
                  "marzo",
                  "abril",
                  "mayo",
                  "junio",
                  "julio",
                  "agosto",
                  "septiembre",
                  "octubre",
                  "noviembre",
                  "diciembre",
                ][e.getMonth()] +
                " de " +
                e.getFullYear().toString()
            : "";
        }),
        r.default.use(g.a, {
          symbol: "$",
          thousandsSeparator: ",",
          fractionCount: 2,
          fractionSeparator: ".",
          symbolPosition: "front",
          symbolSpacing: !0,
        }),
        r.default.use(f.a),
        (r.default.config.productionTip = !1),
        (r.default.$router = p),
        new r.default({
          el: "#app",
          router: p,
          components: { App: l },
          template: "<App/>",
        });
    },
    NOf8: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAHovAAB6LwEf/fvJAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAArJQTFRF////8O3gVWCAVmGAVmGBV2KBV2KCWGOCWWOCWWSDWmSDWmWDW2aEXGaEXGeFXWeFXmiFXmiGX2mGYGqHYWuHYWuIYmyIY22JZG2JZG6JZW6KZW+KZm+LZ3CLZ3GLaHGMaHKMaXKManONa3SObHWObXaPbnePb3eQb3iQcHiRcHmRcXmRcnqSc3uSc3yTdHyTdX2Udn6Udn6Vd3+VeICVeICWeYGWeYGXe4KXe4OYfIOYfYSYfYSZfoWZfoaaf4aagIeagIebgYibgomcg4mcg4qdhIudhYyehoyeho2eh42fh46fiI6giY+giZCgipChi5GijJKijZOjjpOjjpSjj5WkkJalkZalkZelkpemkpimk5imlJmnlJqnlZqolZuolpuol5ypmJ2pmJ2qmZ6qmp6rmp+rm6CrnKCsnKGsnaGsnaKtnqKtn6OuoKSuoKWvoaWvoqavoqawo6ewo6expKixpaixpamypqqyp6uzqKuzqKy0qay0qa20q661q6+1rK+2rbC2rbC3rrG3r7K4sLK4sLO4sbO5sbS5srW6s7W6s7a6tLa7tLe7tbe7tri8t7m9t7q9uLq9ubu+ury+u7y/u72/vL3AvL7Avb/Avr/BvsDBv8DCv8HCwMHCwcLDwsPDwsTEw8TExMXFxcbFxcbGxsfGx8fGx8jHyMnHyMnIycrIysrIysvJy8vJzMzJzMzKzc3Kzc3Lzs7Lz8/Lz8/M0NDM0dHN0tHN0tLO09LO09PO1NTP1dTP1dXP1tXQ1tbQ19bR2NfR2djS2tnS29rT3NvU3dvU3dzU3tzV3t3V397V4N7W4N/W4d/X4eDX4uDX4+HY5OLY5OLZ5ePZ5uTa5+Xa5+Xb6Obb6ebb6efc6ufc6+jd6+nd7Ond7Ore7ere7uve7uvf7+zf7+zg8O3g+TbM2wAAAAJ0Uk5TAODWmS9AAAAURUlEQVR42u3d+39NV/7H8c4+SVxSxC0V8o1b0vLF16XUrRfVjlZdY6qKdpSWVtGiF7QdDKao0kuYqsuECUN1ZkpNg4zvtEXVnYS4VIhIzv/xlTyctdf6rLPOOTl9PBy+Xu9fP2vtk73Pc19O9tpr33MPIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCEprfkLs69wTJXR0AAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgNzpAK7vXzF748nIbY6um7Xq+8pwlbJdC+duK43tT7m2d9lb+WfClk7lz15eVBG2054P395cXMuVLi9c8k7B2djaRlj/4s1vf1h4LbbFnN8+b8E3l8NVKn/8ZObaI7Vcg8rvV81adzRym5MbZ6/Yf/1XArj44r1edbL+7G6zMqOmScMpZRaMJ1KqK4Gu30VfpdLR9WsW026TVVrfpqaSOva8rJTk1qspZW+pxcYrHl63plPHv0dvG2H9t2TXVOrllkRfzN7ugeq2yY/9ZFmc3qhmMfctq4p9DcqmNKzplLHS3WZNVk2Te1+8+GsAbG/thfKMYzc7PlA1yd5llj5OC1WSp12Nsk75GWoxo83vuWSEqmQWCBnpqjT+Yqxbb03zUJ/AxF+itHWv/8XxqpK+PtoBZ2ZKqG2Dxeb3vLejWswjMR8FdmWrTgOPO5A/o5q03h4/gB0Bz0/OlXBNLmRpTVIK9dICreINj7xOG/S2PfWzSXknvWQIWK1X+sW4B63SOz0eua17/av66YtZHXkxo/W2b+mVH+trlYxzsa1BYYrWKetCuCZXcrQmgR3xArjUVv/Lvanh2owzmnQs9ysHUo3SFxGPyulG2/e10kyjkqkdHU41NUqLYtp6x9KMTsuD8a3/IqPS9FSkxWw22tYp8isV3YzSyNguYDoancaFazPVaNL2UpwAJhqL8ZLCnMm3mU28N/3LlB5mpVmkK7VhZtt6P6hKUYpZGut3GmRWUg/FsvkeMzs1PBLX+h8ycXuDIizlQkuzbWf/umyu2HrrY1mDN0WnbXaT75LMJhPjA1CVJj5qkt1mlGiS5R/dRMVbFWFXE3+wN0uVXheVVPVb4Jz8gLkxbL1TstOCuNZffnNehKP3Otl2nyple7E7UskSnUbZTSaJJmlVcQE4IP/yh+w2ObKN2s8/l5WX3J/0jWz7pCo9IktFroOPNySGrbdJdsqNa/2HeNF3w1CmybYr1LEhICqtYvkNIxeXY7d5SLY5EBeAT+ViGlg/Ks/LVfCv0l6RlR7uT1oo27ZQpSaypM7a82SlTQybb3YMmy+G9W8tS++5F9Nftn0xVPlaVrzT0degQPYJWD+OrzeQbT6NC8AM6+87Zl2QWk0Wh0pPyEpT9ydNsBZz0eXdmxLqNMYqlUfffLmyT1I8619uVca4F9NStn04VPnIWsw/o6/BYqtToXWhazWZERcA69jl/Syb7LaaLAyVHpeVxu5PesFaTOifh6etysthf1zV5Er0zTfC6hTP+l+xKqPdi7lPtu0bqiy1FvN19DWwjpbebtnkZ6vJNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADcCgA/WE1WhkrDZOW/3J80VbZNKb9ZuRSQpZmhThNlpX5l9M03TnZq5G4711q5szcrlfVlZaJ7Me1l20GhSp71AXujr8FKq9MPCQRQ2VA22efcfIPcn7Ratu2kStmylB+qrJKV7tG3XvBD2amPu+1W2TZLlbrL0ir3YkbKtrNClR9lpc7V6GuwT3ZqWJlAAME+okW9a87N97b7kw7Kts+5N9+pUGW/rPw+BgDfyU6T3W3PybaDVen3srTfvZgFTsLW7tMlhjW4Vi8q4VsJYLpo0VNVzqaI0lb3J1U1E22Xq9IiUWmjKhWNROnTGDbflVTR6YsIjXNE2/dV5VN5IqlwL+Vfom2SIhzsHwfhYE/RaXpCAZxrYa7cN35pttl3YKSV+sRs+9/lqlImzgHr/U7iGqprRSybT1xD9Yp03bDZbNv2ko+vq1laGukjxdXQVL9SaO4kTU7GsgbfJBmdWpxLKIDgRqPBK/qx6n+MlTsRca0GGafCIq2yy1jfEXqnx4yTzw+xbL1glXHSuvdQxMbGD43ADv3q1zgQPxZxKcXpetsc/bfKTGPr5cW0BsGXjU4bg4kFEJys1XtfNn4iZPqVBhsir9TpB7SfAEuM0jxNQKcSvXJcOzrUWRHb1gsebqeh+Sxy21LNcOAto7Sijl/KPh55MX/VTlbphcYJfUBtTwA3crl3lGuYWwsgWBD6nlPni+PpebUH9f0p2lpdnZZ8s22HPaK0K/Q9p8wsNytlU0I4Ov87GGt+mRj6adk96kGj4p26N9u2+7so/btz6LQ3pSzaYo48oo5gJeKA9KcGNysZ+TGvQeX80JVMZkEw8QCC5z8Y2tZLH/jGwTC/pCb2TE3p/PznVTGsVuFr/Rsn5eQusX8KlS0amR1o8sjrRWGusF7tl5Z0/6il14K1yM7JfRoldxj98fUY2v7vtEebBtqPWPCLfTm+dNT9SWl9X/1XLCee1WO71El98KW/2qWf3hyY7rUeMq+0Nmtw8I0bndoO/eB88HYAULNbOSvXr8a+XlWX3cc9d6eyYO1TWZtO7s8uq4p9KVcr4th6kY5kzkoiAJDbKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALEDqNift9PxoEpxwXpHr4qivG8dz9yc3rzhaPjKtX15ux0P9Zza9BfHQ5rle/IKHc8nncjPdzy2fLUwb095+NLxv2w6Fb5Stjtvn+MptaMbNp8OX7n8bV6R46mhn9cXFIev/LIzb3/FbQJge6/qZxWTOyy2npO6MKHmwdFmQ45YnQp6VM+zk9xxmVUpHdeq5jHa4fbXmd+t+qnslE72hCwlz2XUdMq1v5n1Xasf8KzT5c82zmdrZjdo8ay9kdd0qX76t27X9baz3JqnvTOeK7FKqzpVP+9fr5v9mOfx4TWdWo0rtUrLOlY/FVu/h/2Y55EhNfNmZE64ICtViztUd0rttf02AHDxhYDrGeBtWWoGjWUmjvNj1DIHHBNfcoaaVmylkPE71elJMZXCevUIfhPxxHeJPy/YM+J7XtM8VGkucBQ/47ke5/2siXrQW+A4+aTq9DvxPa9s7DmeAT7mPx8+xnzSs2qpeqg8a5vZ6ae+6pn1Fy4mGkB5J32+ImO+BWMSrEnGkVKffKWpcQxe6vy7L2kP9nvpZ/SSMe3HbENallZpeVYvzdM7zdMrZ1vqM0MZ38vssFPiVeeMPg1Eu0vODWlMJnKiqT51hHFum+ScOuKQPrVQp/IEA5hhNOitzRBwsokxv8ZXrpXzHtcqhxsYM87oU+CNNzo9pVUOGhP/pOhzrT1rdBquVf5TV6/U/Y9WGm50elar7DXmdEnVH4h/yug0XqvsTtYrDQ5rJXMyRX0n+SrgmjymsrfRaUZiAYhZbrw/+qWBZqW1f7D6OuCaEqpKTJukzaeyxTklVGUvMcecfxmW75wSqqKbWenmX1F94ZrVK3itk3OGITlt1BZVuSLmmurvnw2Xm5WAP0/kxdbOGZb+KKZULEwogOdFi/b+iUp29g9jQ0Wlo6p8LzttUqXfiko3VdkjO/mnzEdFpbeq7JSddqpSb1F51L+okZ38yUyEJ++3qrJJdvpelTqKytDwp8/q+JdXcuLJ5xMKQOwSXuC8az/SZrNpKyrJl137kT+pYjDDOSPhctlprurU1Dmpopx+zlukDihy9r6manHW5Jfq2GXN3pehOs3yXMeuy8mi0lZ1muy5jl3nA85JNRMAwFoFT02l9bpzTk5rAkbv2/AXB/qh75TnnJN0vKw8ra4orE4/hr840E/11vydnjprPy0r6lRvzd/pT2g5UFbUqf5bq5Oa8k1OwOm9Hqrs8Jy7TwIAWEdfb4nrkO01dx59vY9dh2wvU/2zwXOeUuQh2z8PbbY6rXMdsv1Tyjqr02bX0dc/pdjT/qqf6Jme65Tysec8DzX3XKeUJZ77PHTrAcQ1W/jXVif106ivrNyn/nFkdfokVOohK61DlY1WpzWhUmdZ6az+PWB1UlPxtZaVHqHKJ1Yn9Y+duGYLbywrj4f9yZvw2cIBAAAAAAAAAAAAAAAAAAAAAAB3FYADVpNV4W+pedobd+z/mq0OlQbJSo77v2ZqAvoBzu9yh/tr6eP8R6VNbYdTzYBQZYP7v5vyvSP+y5NWu/+7mSUr6kam9aok70ACAVTK17Z4akbv92RF3cAtr+tchdmykquGQFn/dD7i/DvHqCEk1hqoUVkvy4p614X9pjo1vGOMrEx3bvNkNUQuV5becu4+dcvD31y+kfdClSJZaZTQl0b1Ey3qVzjvnL2rOnV1roJ158y/vdxBVJqpypeykz/MrJ2otFKVz2Wnz1Wplai084dvyU5fqpJ861EH1+1b7Q6ntft0VZ3edd7hrJCvrOuX0LuBbzjvt5bWdf1z3Hrjn3+/9Yx805R/s3us837r0SRR8gd3jHLebz0kbqoFDjnvVo/yB5GIStJR593qsf6QCVFJOeO8W+2/fVDe+qhb6rxb/UZCAZS2NLeIdkEyx3Hmu/E1m7c69FcEzXCcAYLBE03Mu8Ha2z6mOM4ANzaFuY/prwiaYHaaoA25utc8PmlrLc4BU/yK+RIh4xVJ4hygDeEpqmPeLtPGuYmroTmuAUZey9LEDgkzb7hpb8QKXjferthMHxO91uj0jj7E0BgjYbwR6zOj0wf6EEPjzWKZ+iC+j4xOi/UhhsaohLb6IL7FRqeP9CGGxq29bH0Q3wdGJ31oqvlmtY76IL53jE5rtcpp45zSXX+5ydTwtyoTNSp4hnYsfdh4e++BNn4lzfw79fEOg4zh7UXaIaXJ34xO+j471LjyKdQ2cVPz/bv6PptrDE3epY3iTN9lDMjNDX88qf4Jqw0xaWEMxqocGv54ciN/0w5eLY333lToO/pkc89K8yttjAv9Kw9rZ64ZiR4VfOO3VmhXavAn8WDAJfVS6AHyOY+tod85aSvlSUW9aeoJ+cjG5hAOOfY7eE59ZU/Lpy82hnCkrxWVYvVCv2HywYC1IRwt5FvZTqtBIbnyhX1qxHhLuVeeeCLUabQ8YK8Mfc9ZW0XlqPp5+8Ils+K/aartjmDiAQQvLR51f1LmU+8etkv/eK1/49QHX/rSrlxYmJuTlDV4zjG79NWr/dJSe04M86K50vkjswOth8wN84LFrZP7NGrw0KQwr94694cR7QPthr0f5hGbgpd7N2zY+5Uwr94qfn9Yu0D7EX+w38oYzJ/0UINGfSZvtSsn5w5pE8geOd8+Kwc3TOyZmtb31a/syrE5g7OScnIXXrBLX770YGrj/q/9w64cfvfpzKT7Ry0O/zhWIp4NdL+1q+r6repU6X4LaMUt6+T+865X3apOPBx6lwcAAAAAAAAAAAAAAAAAAAAA4gMw3XPegie3c454znELtQJgjViqc5WNeyfkah3nmLtaAdgrF9OFbXtnpIv85vbGBeBafecgB3JbRw6eqX8tLgDBwWI5+WzaOyNyYpTBwfgAiEE4w9iyd0qGOYcn1QqAOdo9vZgNe6ekOD3sExS1BhCc78+/9cAetuudkz0PqC8udX4wfgDBgzdn4Eqexk/AO+un4LSbY0d7HQz+GgDBqgN5k4fP2VLCJr3TUlIwZ/jkvANVwV8HgPw/DwAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAbgsAvyF3de4hhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEJIQvN/zmGNYDGkuJkAAAAASUVORK5CYII=";
    },
    PiRI: function (e, t, a) {
      "use strict";
      var r = a("c/Tr"),
        o = a.n(r),
        n = a("MRIW"),
        i = a("UlOv"),
        s = a("8o1w"),
        c = a("65o/"),
        l = {
          extends: i.a,
          data: function () {
            return { anio: null, aniosParaGraficar: [] };
          },
          methods: {
            agregarAnio: function (e) {
              this.aniosParaGraficar.push(e), this.refrescar();
            },
            removerAnio: function (e) {
              this.aniosParaGraficar.splice(e, 1), this.refrescar();
            },
            setAnios: function (e) {
              (this.aniosParaGraficar = e), this.refrescar();
            },
            refrescar: function () {
              var e = this,
                t = [],
                a = [];
              !(function r(i) {
                if (i >= 0) {
                  var l = [],
                    d = e.aniosParaGraficar[i];
                  s.b.get("total/vendido/por/mes/" + d).then(function (e) {
                    0;
                    for (
                      var s = [],
                        u = function (t) {
                          var a = c.a.agregarCerosALaIzquierdaSiEsNecesario(t),
                            r = e.findIndex(function (e) {
                              return e.Etiqueta === a;
                            });
                          -1 !== r
                            ? s.push(e[r])
                            : s.push({ Etiqueta: a, Valor: 0 });
                        },
                        v = 1;
                      v < 13;
                      v++
                    )
                      u(v);
                    s.forEach(function (e) {
                      t.length < 12 && t.push(n.e[parseInt(e.Etiqueta) - 1]),
                        l.push(e.Valor);
                    }),
                      a.push({
                        label: d,
                        backgroundColor: c.a.colorHexadecimalAleatorio(),
                        data: o()(l),
                      }),
                      r(i - 1);
                  });
                } else
                  e.$nextTick(function () {
                    e.$data._chart &&
                      (e.$data._chart.clear(), e.$data._chart.destroy()),
                      e.renderChart(
                        { labels: t, datasets: a },
                        {
                          tooltips: {
                            callbacks: {
                              label: function (t, a) {
                                var r = t.yLabel;
                                return (
                                  "Vendido al contado: " +
                                  e.$options.filters.currency(r)
                                );
                              },
                              title: function (t) {
                                return (
                                  t[0].xLabel +
                                  " del " +
                                  e.aniosParaGraficar[t[0].datasetIndex]
                                );
                              },
                            },
                          },
                          title: { text: "Ventas por año", display: !0 },
                          responsive: !0,
                          maintainAspectRatio: !1,
                          scales: {
                            yAxes: [
                              { display: !0, ticks: { beginAtZero: !0 } },
                            ],
                          },
                        }
                      );
                  });
              })(this.aniosParaGraficar.length - 1);
            },
          },
        },
        d = a("VU/8")(l, null, !1, null, null, null);
      t.a = d.exports;
    },
    R9PF: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("8o1w"),
        o = {
          name: "EliminarNegocio",
          data: function () {
            return {
              cargando: !1,
              procesoTerminado: !1,
              deshabilitarBoton: !1,
              alerta: { mostrar: !1, tipo: "success", mensaje: "" },
            };
          },
          methods: {
            confirmarEliminacion: function () {
              var e = this,
                t = this.$route.params.token;
              (this.cargando = !0),
                r.a.get("logout").then(function () {
                  return r.a
                    .get("negocio/eliminar/" + t)
                    .then(function (t) {
                      (e.alerta.mostrar = !0),
                        !0 === t
                          ? ((e.alerta.mensaje =
                              "Cuenta eliminada correctamente. En cualquier momento del futuro puedes volver a registrarte"),
                            (e.alerta.tipo = "success"))
                          : ((e.alerta.mensaje =
                              "Error eliminando cuenta. ¿Tal vez el token es incorrecto o el negocio no existe?"),
                            (e.alerta.tipo = "error"));
                    })
                    .finally(function () {
                      (e.cargando = !1), (e.deshabilitarBoton = !0);
                    });
                });
            },
          },
        },
        n = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a("h1", { staticClass: "display-1" }, [
                      e._v("Lamentamos que te vayas"),
                    ]),
                    e._v(" "),
                    a("p", [
                      e._v(
                        "\n      Un último paso: confirma que realmente deseas eliminar tu cuenta\n      ("
                      ),
                      a("strong", [e._v("esta acción no se puede deshacer")]),
                      e._v(")\n    "),
                    ]),
                    e._v(" "),
                    a(
                      "v-btn",
                      {
                        attrs: {
                          disabled: e.deshabilitarBoton,
                          loading: e.cargando,
                          large: "",
                          color: "error",
                        },
                        on: {
                          click: function (t) {
                            e.confirmarEliminacion();
                          },
                        },
                      },
                      [e._v("\n      Eliminar mi cuenta\n    ")]
                    ),
                    e._v(" "),
                    a(
                      "v-alert",
                      {
                        attrs: { value: e.alerta.mostrar, type: e.alerta.tipo },
                      },
                      [e._v("\n      " + e._s(e.alerta.mensaje) + "\n    ")]
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var i = a("VU/8")(
        o,
        n,
        !1,
        function (e) {
          a("Ydhh");
        },
        "data-v-e1ed893e",
        null
      );
      t.default = i.exports;
    },
    Rxhn: function (e, t, a) {
      e.exports = a.p + "img/bolsa-de-la-compra.8aefc13.png";
    },
    S1cs: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("8o1w"),
        o = a("NHnr"),
        n = a("KZvR"),
        i = {
          name: "TicketApartado",
          components: { Pie: a("rbc0").a, Encabezado: n.a },
          beforeRouteUpdate: function (e) {
            this.obtenerDetallesDeApartado(e.params.idApartado);
          },
          beforeMount: function () {
            o.EventBus.$emit("ponerTitulo", "Impresión de ticket"),
              this.obtenerDetallesDeApartado(this.$route.params.idApartado);
          },
          data: function () {
            return {
              cargando: !1,
              apartado: { Usuario: {}, Cliente: {} },
              ajustes: {},
            };
          },
          methods: {
            obtenerDetallesDeApartado: function (e) {
              var t = this;
              if (!e) return this.$router.go(-1);
              (this.cargando = !0),
                r.b
                  .get("ajustes/empresa")
                  .then(function (e) {
                    t.ajustes = e;
                  })
                  .then(function () {
                    r.b
                      .get("apartado/" + e)
                      .then(function (e) {
                        t.apartado = e;
                      })
                      .finally(function () {
                        return (t.cargando = !1);
                      });
                  });
            },
            imprimir: function () {
              var e = this;
              this.cargando ||
                (o.EventBus.$emit("ocultarMenu"),
                setTimeout(function () {
                  var t = document.title;
                  (document.title = "Apartado #" + e.apartado.Numero),
                    window.print(),
                    (document.title = t),
                    o.EventBus.$emit("mostrarMenu");
                }, 200));
            },
            volver: function () {
              this.$router.go(-1);
            },
          },
        },
        s = {
          render: function () {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t;
            return r(
              "v-layout",
              { staticClass: "ticket", attrs: { wrap: "", row: "" } },
              [
                r(
                  "v-flex",
                  { staticClass: "hidden-print-only", attrs: { xs12: "" } },
                  [
                    r("encabezado"),
                    e._v(" "),
                    r(
                      "v-btn",
                      {
                        attrs: { small: "", color: "success" },
                        on: {
                          click: function (t) {
                            e.volver();
                          },
                        },
                      },
                      [
                        r("v-icon", [e._v("arrow_back")]),
                        e._v("\n      Volver\n    "),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(" "),
                r(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    r("br"),
                    e._v(" "),
                    r("v-img", {
                      staticClass: "text-xs-center",
                      attrs: { src: a("jxSC") },
                    }),
                    e._v(" "),
                    r("div", { staticClass: "text-xs-center" }, [
                      r("p", [
                        r("strong", [
                          e._v(
                            "Ticket de apartado #" + e._s(e.apartado.Numero)
                          ),
                        ]),
                      ]),
                      e._v(" "),
                      e.ajustes.Nombre
                        ? r("p", [
                            e._v(
                              "\n        " + e._s(e.ajustes.Nombre) + "\n      "
                            ),
                          ])
                        : e._e(),
                      e._v(" "),
                      e.ajustes.Direccion
                        ? r("p", [
                            e._v(
                              "\n        " +
                                e._s(e.ajustes.Direccion) +
                                "\n      "
                            ),
                          ])
                        : e._e(),
                      e._v(" "),
                      e.ajustes.Telefono
                        ? r("p", [
                            e._v("Teléfono: " + e._s(e.ajustes.Telefono)),
                          ])
                        : e._e(),
                      e._v(" "),
                      r("br"),
                      e._v(" "),
                      r("p", [
                        e._v(
                          "\n        " +
                            e._s(e._f("fechaExpresiva")(e.apartado.Fecha)) +
                            "\n      "
                        ),
                      ]),
                      e._v(" "),
                      r("p", [
                        e._v("\n        Lo atendió: "),
                        r("strong", [e._v(e._s(e.apartado.Usuario.Nombre))]),
                      ]),
                      e._v(" "),
                      r("p", [
                        e._v("\n        Cliente: "),
                        r("strong", [e._v(e._s(e.apartado.Cliente.Nombre))]),
                      ]),
                      e._v(" "),
                      r(
                        "div",
                        { staticClass: "text-xs-center" },
                        [
                          r(
                            "v-flex",
                            {
                              staticClass: "text-xs-right con-borde-separador",
                              attrs: { xs9: "", "offset-xs1": "" },
                            },
                            [r("br")]
                          ),
                        ],
                        1
                      ),
                    ]),
                    e._v(" "),
                    r(
                      "v-layout",
                      { attrs: { wrap: "", row: "" } },
                      [
                        e._l(e.apartado.Productos, function (t) {
                          return [
                            r(
                              "v-flex",
                              {
                                staticClass: "text-xs-left",
                                attrs: { xs12: "" },
                              },
                              [e._v(e._s(t.Descripcion))]
                            ),
                            e._v(" "),
                            r(
                              "v-flex",
                              {
                                staticClass: "text-xs-right con-borde-inferior",
                                attrs: { xs12: "" },
                              },
                              [
                                e._v(
                                  e._s(t.Cantidad) +
                                    " x " +
                                    e._s(e._f("currency")(t.PrecioVenta)) +
                                    "\n          =\n          " +
                                    e._s(
                                      e._f("currency")(
                                        t.Cantidad * t.PrecioVenta
                                      )
                                    ) +
                                    "\n        "
                                ),
                              ]
                            ),
                          ];
                        }),
                      ],
                      2
                    ),
                    e._v(" "),
                    r(
                      "div",
                      { staticClass: "text-xs-center" },
                      [
                        r(
                          "v-flex",
                          {
                            staticClass: "text-xs-right con-borde-separador",
                            attrs: { xs9: "", "offset-xs1": "" },
                          },
                          [r("br")]
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    r("div", { staticClass: "text-xs-right" }, [
                      r("p", [
                        r("strong", [e._v("Total")]),
                        e._v(" " + e._s(e._f("currency")(e.apartado.Total))),
                      ]),
                      e._v(" "),
                      r("p", [
                        r("strong", [e._v("Su pago")]),
                        e._v(" " + e._s(e._f("currency")(e.apartado.Pago))),
                      ]),
                      e._v(" "),
                      r("p", [
                        r("strong", [e._v("Anticipo")]),
                        e._v(" " + e._s(e._f("currency")(e.apartado.Anticipo))),
                      ]),
                      e._v(" "),
                      r("p", [
                        r("strong", [e._v("Cambio")]),
                        e._v(
                          "\n        " +
                            e._s(
                              e._f("currency")(
                                e.apartado.Pago - e.apartado.Anticipo
                              )
                            ) +
                            "\n      "
                        ),
                      ]),
                      e._v(" "),
                      r("p", [
                        r("strong", [e._v("Restante")]),
                        e._v(
                          "\n        " +
                            e._s(
                              e._f("currency")(
                                e.apartado.Total -
                                  e.apartado.Anticipo -
                                  e.apartado.Abonado
                              )
                            ) +
                            "\n      "
                        ),
                      ]),
                      e._v(" "),
                      r("br"),
                    ]),
                    e._v(" "),
                    r("div", { staticClass: "text-xs-justify" }, [
                      r("p", [
                        r("strong", [e._v("Nota: ")]),
                        e._v(
                          " no nos hacemos responsables de los articulos\n        despues de la fecha de vencimiento:\n        " +
                            e._s(
                              e._f("fechaSinHora")(e.apartado.FechaVencimiento)
                            ) +
                            "\n      "
                        ),
                      ]),
                    ]),
                    e._v(" "),
                    r(
                      "div",
                      { staticClass: "text-xs-center" },
                      [
                        r(
                          "v-flex",
                          {
                            staticClass: "text-xs-right con-borde-inferior",
                            attrs: { xs9: "", "offset-xs1": "" },
                          },
                          [r("br"), r("br")]
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    r("div", { staticClass: "text-xs-center" }, [
                      r("strong", { staticClass: "text-xs-center" }, [
                        e._v("Firma del cliente"),
                      ]),
                    ]),
                    e._v(" "),
                    r(
                      "div",
                      { staticClass: "text-xs-center" },
                      [
                        e.ajustes.MensajePersonal
                          ? r("p", [
                              r("strong", [
                                e._v(e._s(e.ajustes.MensajePersonal)),
                              ]),
                            ])
                          : e._e(),
                        e._v(" "),
                        r("Pie"),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(" "),
                r(
                  "v-btn",
                  {
                    staticClass: "hidden-print-only",
                    attrs: {
                      slot: "activator",
                      loading: e.cargando,
                      fixed: "",
                      dark: "",
                      fab: "",
                      bottom: "",
                      "fill-height": "",
                      right: "",
                      color: "green",
                    },
                    on: {
                      click: function (t) {
                        e.imprimir();
                      },
                    },
                    slot: "activator",
                  },
                  [r("v-icon", [e._v("print")])],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      a.d(t, "TimeoutOcultarMenuTickets", function () {
        return 200;
      });
      var c = a("VU/8")(i, s, !1, null, null, null);
      t.default = c.exports;
    },
    "SX/p": function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("8o1w"),
        o = a("NHnr"),
        n = a("rbc0"),
        i = a("KZvR"),
        s = a("MRIW"),
        c = {
          name: "TicketDeCaja",
          components: { Encabezado: i.a, Pie: n.a },
          data: function () {
            return {
              cargando: !1,
              ajustes: {},
              estado: {},
              usuario: {},
              hoy: null,
              usuarioLogueado: {},
            };
          },
          beforeMount: function () {
            o.EventBus.$emit("ponerTitulo", "Impresión de ticket"),
              this.obtenerDetallesParaEstadoDeCaja(
                this.$route.query.fechaInicio,
                this.$route.query.fechaFin,
                this.$route.query.usuario
              );
          },
          beforeRouteUpdate: function (e) {
            this.obtenerDetallesParaEstadoDeCaja(
              e.query.fechaInicio,
              e.query.fechaFin,
              e.query.usuario
            );
          },
          methods: {
            obtenerDetallesParaEstadoDeCaja: function (e, t, a) {
              var o = this,
                n = "reporte/caja/" + e + "/" + t;
              a && (n += "/" + a),
                (this.cargando = !0),
                r.b
                  .get("ajustes/empresa")
                  .then(function (e) {
                    o.ajustes = e;
                  })
                  .then(function () {
                    return r.b.get(n).then(function (e) {
                      return (o.estado = e);
                    });
                  })
                  .then(function () {
                    return r.a.get("fechaYHora").then(function (e) {
                      return (o.hoy = e);
                    });
                  })
                  .then(function () {
                    return r.b.get("usuario/logueado").then(function (e) {
                      return (o.usuarioLogueado = e);
                    });
                  })
                  .then(function () {
                    a
                      ? r.b
                          .get("usuario/caja/" + a)
                          .then(function (e) {
                            return (o.usuario = e);
                          })
                          .finally(function () {
                            return (o.cargando = !1);
                          })
                      : (o.cargando = !1);
                  });
            },
            imprimir: function () {
              this.cargando ||
                (o.EventBus.$emit("ocultarMenu"),
                setTimeout(function () {
                  var e = document.title;
                  (document.title = "Estado de caja"),
                    window.print(),
                    (document.title = e),
                    o.EventBus.$emit("mostrarMenu");
                }, s.o));
            },
            volver: function () {
              this.$router.go(-1);
            },
          },
        },
        l = {
          render: function () {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t;
            return r(
              "v-layout",
              { staticClass: "ticket", attrs: { wrap: "", row: "" } },
              [
                r(
                  "v-flex",
                  { staticClass: "hidden-print-only", attrs: { xs12: "" } },
                  [
                    r("encabezado"),
                    e._v(" "),
                    r(
                      "v-btn",
                      {
                        attrs: { small: "", color: "success" },
                        on: {
                          click: function (t) {
                            e.volver();
                          },
                        },
                      },
                      [
                        r("v-icon", [e._v("arrow_back")]),
                        e._v("\n      Volver\n    "),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(" "),
                r(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    r("br"),
                    e._v(" "),
                    r("v-img", {
                      staticClass: "text-xs-center",
                      attrs: { src: a("jxSC") },
                    }),
                    e._v(" "),
                    r("div", { staticClass: "text-xs-center" }, [
                      r("p", [
                        r("strong", [e._v("Estado de caja")]),
                        e._v(" "),
                        r("br"),
                        e._v(" "),
                        r("strong", [e._v("Tipo: ")]),
                        e._v(
                          "\n        " +
                            e._s(
                              e.usuario.Numero
                                ? "De #" +
                                    e.usuario.Numero +
                                    " " +
                                    e.usuario.Nombre +
                                    " "
                                : "General"
                            ) +
                            "\n        "
                        ),
                        r("br"),
                        e._v(" "),
                        r("strong", [e._v("Desde: ")]),
                        e._v(
                          " " + e._s(e.$route.query.fechaInicio) + "\n        "
                        ),
                        r("br"),
                        e._v(" "),
                        r("strong", [e._v("Hasta: ")]),
                        e._v(
                          " " + e._s(e.$route.query.fechaFin) + "\n        "
                        ),
                        r("br"),
                      ]),
                      e._v(" "),
                      e.ajustes.Nombre
                        ? r("p", [
                            e._v(
                              "\n        " + e._s(e.ajustes.Nombre) + "\n      "
                            ),
                          ])
                        : e._e(),
                      e._v(" "),
                      e.ajustes.Direccion
                        ? r("p", [
                            e._v(
                              "\n        " +
                                e._s(e.ajustes.Direccion) +
                                "\n      "
                            ),
                          ])
                        : e._e(),
                      e._v(" "),
                      e.ajustes.Telefono
                        ? r("p", [
                            e._v("Teléfono: " + e._s(e.ajustes.Telefono)),
                          ])
                        : e._e(),
                      e._v(" "),
                      r("br"),
                      e._v(" "),
                      r("p", [
                        e._v("\n        Impreso por: "),
                        r("strong", [e._v(e._s(e.usuarioLogueado.Nombre))]),
                      ]),
                      e._v(" "),
                      r("p", [
                        e._v(
                          "\n        " +
                            e._s(e._f("fechaExpresiva")(e.hoy)) +
                            "\n      "
                        ),
                      ]),
                      e._v(" "),
                      r(
                        "div",
                        { staticClass: "text-xs-center" },
                        [
                          r(
                            "v-flex",
                            {
                              staticClass: "text-xs-right con-borde-separador",
                              attrs: { xs9: "", "offset-xs1": "" },
                            },
                            [r("br")]
                          ),
                        ],
                        1
                      ),
                    ]),
                    e._v(" "),
                    r(
                      "v-layout",
                      { attrs: { wrap: "", row: "" } },
                      [
                        r(
                          "v-flex",
                          { staticClass: "text-xs-left", attrs: { xs12: "" } },
                          [e._v("Ventas al contado")]
                        ),
                        e._v(" "),
                        r(
                          "v-flex",
                          {
                            staticClass: "text-xs-right con-borde-inferior",
                            attrs: { xs12: "" },
                          },
                          [e._v(e._s(e._f("currency")(e.estado.VentasContado)))]
                        ),
                        e._v(" "),
                        r(
                          "v-flex",
                          { staticClass: "text-xs-left", attrs: { xs12: "" } },
                          [e._v("Anticipo de apartados")]
                        ),
                        e._v(" "),
                        r(
                          "v-flex",
                          {
                            staticClass: "text-xs-right con-borde-inferior",
                            attrs: { xs12: "" },
                          },
                          [e._v(e._s(e._f("currency")(e.estado.Anticipos)))]
                        ),
                        e._v(" "),
                        r(
                          "v-flex",
                          { staticClass: "text-xs-left", attrs: { xs12: "" } },
                          [e._v("Abonos")]
                        ),
                        e._v(" "),
                        r(
                          "v-flex",
                          {
                            staticClass: "text-xs-right con-borde-inferior",
                            attrs: { xs12: "" },
                          },
                          [e._v(e._s(e._f("currency")(e.estado.Abonos)))]
                        ),
                        e._v(" "),
                        r(
                          "v-flex",
                          { staticClass: "text-xs-left", attrs: { xs12: "" } },
                          [e._v("Ingresos")]
                        ),
                        e._v(" "),
                        r(
                          "v-flex",
                          {
                            staticClass: "text-xs-right con-borde-inferior",
                            attrs: { xs12: "" },
                          },
                          [e._v(e._s(e._f("currency")(e.estado.Ingresos)))]
                        ),
                        e._v(" "),
                        r(
                          "v-flex",
                          { staticClass: "text-xs-left", attrs: { xs12: "" } },
                          [e._v("Egresos")]
                        ),
                        e._v(" "),
                        r(
                          "v-flex",
                          {
                            staticClass: "text-xs-right con-borde-inferior",
                            attrs: { xs12: "" },
                          },
                          [e._v(e._s(e._f("currency")(e.estado.Egresos)))]
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    r(
                      "div",
                      { staticClass: "text-xs-center" },
                      [
                        r(
                          "v-flex",
                          {
                            staticClass: "text-xs-right con-borde-separador",
                            attrs: { xs9: "", "offset-xs1": "" },
                          },
                          [r("br")]
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    r("div", { staticClass: "text-xs-right" }, [
                      r("p", [
                        r("strong", [e._v("Total")]),
                        e._v(
                          "\n        " +
                            e._s(
                              e._f("currency")(
                                e.estado.VentasContado +
                                  e.estado.Anticipos +
                                  e.estado.Abonos +
                                  e.estado.Ingresos -
                                  e.estado.Egresos
                              )
                            ) +
                            "\n      "
                        ),
                      ]),
                    ]),
                    e._v(" "),
                    r("div", { staticClass: "text-xs-center" }, [r("pie")], 1),
                  ],
                  1
                ),
                e._v(" "),
                r(
                  "v-btn",
                  {
                    staticClass: "hidden-print-only",
                    attrs: {
                      slot: "activator",
                      loading: e.cargando,
                      fixed: "",
                      dark: "",
                      fab: "",
                      bottom: "",
                      "fill-height": "",
                      right: "",
                      color: "green",
                    },
                    on: {
                      click: function (t) {
                        e.imprimir();
                      },
                    },
                    slot: "activator",
                  },
                  [r("v-icon", [e._v("print")])],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        d = a("VU/8")(c, l, !1, null, null, null);
      t.default = d.exports;
    },
    T7Zg: function (e, t, a) {
      "use strict";
      var r,
        o = a("Xxa5"),
        n = a.n(o),
        i = a("mvHQ"),
        s = a.n(i),
        c = a("exGp"),
        l = a.n(c),
        d = a("c/Tr"),
        u = a.n(d),
        v = a("wxAW"),
        p = a.n(v),
        m = a("Zrlr"),
        f = a.n(m),
        h =
          (((r = (function () {
            function e(t, a) {
              return (
                f()(this, e),
                t || (t = e.URL_PLUGIN_POR_DEFECTO),
                a || (a = ""),
                (this.ruta = t),
                (this.serial = a),
                (this.operaciones = []),
                this
              );
            }
            return (
              p()(
                e,
                [
                  {
                    key: "CargarImagenLocalEImprimir",
                    value: function (t, a, r) {
                      return (
                        this.operaciones.push(
                          new e.Operacion(
                            "CargarImagenLocalEImprimir",
                            u()(arguments)
                          )
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "Corte",
                    value: function (t) {
                      return (
                        this.operaciones.push(
                          new e.Operacion("Corte", u()(arguments))
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "CorteParcial",
                    value: function () {
                      return (
                        this.operaciones.push(
                          new e.Operacion("CorteParcial", u()(arguments))
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "DefinirCaracterPersonalizado",
                    value: function (t, a) {
                      return (
                        this.operaciones.push(
                          new e.Operacion(
                            "DefinirCaracterPersonalizado",
                            u()(arguments)
                          )
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "DescargarImagenDeInternetEImprimir",
                    value: function (t, a, r) {
                      return (
                        this.operaciones.push(
                          new e.Operacion(
                            "DescargarImagenDeInternetEImprimir",
                            u()(arguments)
                          )
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "DeshabilitarCaracteresPersonalizados",
                    value: function () {
                      return (
                        this.operaciones.push(
                          new e.Operacion(
                            "DeshabilitarCaracteresPersonalizados",
                            u()(arguments)
                          )
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "DeshabilitarElModoDeCaracteresChinos",
                    value: function () {
                      return (
                        this.operaciones.push(
                          new e.Operacion(
                            "DeshabilitarElModoDeCaracteresChinos",
                            u()(arguments)
                          )
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "EscribirTexto",
                    value: function (t) {
                      return (
                        this.operaciones.push(
                          new e.Operacion("EscribirTexto", u()(arguments))
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "EstablecerAlineacion",
                    value: function (t) {
                      return (
                        this.operaciones.push(
                          new e.Operacion(
                            "EstablecerAlineacion",
                            u()(arguments)
                          )
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "EstablecerEnfatizado",
                    value: function (t) {
                      return (
                        this.operaciones.push(
                          new e.Operacion(
                            "EstablecerEnfatizado",
                            u()(arguments)
                          )
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "EstablecerFuente",
                    value: function (t) {
                      return (
                        this.operaciones.push(
                          new e.Operacion("EstablecerFuente", u()(arguments))
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "EstablecerImpresionAlReves",
                    value: function (t) {
                      return (
                        this.operaciones.push(
                          new e.Operacion(
                            "EstablecerImpresionAlReves",
                            u()(arguments)
                          )
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "EstablecerImpresionBlancoYNegroInversa",
                    value: function (t) {
                      return (
                        this.operaciones.push(
                          new e.Operacion(
                            "EstablecerImpresionBlancoYNegroInversa",
                            u()(arguments)
                          )
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "EstablecerRotacionDe90Grados",
                    value: function (t) {
                      return (
                        this.operaciones.push(
                          new e.Operacion(
                            "EstablecerRotacionDe90Grados",
                            u()(arguments)
                          )
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "EstablecerSubrayado",
                    value: function (t) {
                      return (
                        this.operaciones.push(
                          new e.Operacion("EstablecerSubrayado", u()(arguments))
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "EstablecerTamañoFuente",
                    value: function (t, a) {
                      return (
                        this.operaciones.push(
                          new e.Operacion(
                            "EstablecerTamañoFuente",
                            u()(arguments)
                          )
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "Feed",
                    value: function (t) {
                      return (
                        this.operaciones.push(
                          new e.Operacion("Feed", u()(arguments))
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "HabilitarCaracteresPersonalizados",
                    value: function () {
                      return (
                        this.operaciones.push(
                          new e.Operacion(
                            "HabilitarCaracteresPersonalizados",
                            u()(arguments)
                          )
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "HabilitarElModoDeCaracteresChinos",
                    value: function () {
                      return (
                        this.operaciones.push(
                          new e.Operacion(
                            "HabilitarElModoDeCaracteresChinos",
                            u()(arguments)
                          )
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "ImprimirCodigoDeBarrasCodabar",
                    value: function (t, a, r, o) {
                      return (
                        this.operaciones.push(
                          new e.Operacion(
                            "ImprimirCodigoDeBarrasCodabar",
                            u()(arguments)
                          )
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "ImprimirCodigoDeBarrasCode128",
                    value: function (t, a, r, o) {
                      return (
                        this.operaciones.push(
                          new e.Operacion(
                            "ImprimirCodigoDeBarrasCode128",
                            u()(arguments)
                          )
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "ImprimirCodigoDeBarrasCode39",
                    value: function (t, a, r, o, n, i) {
                      return (
                        this.operaciones.push(
                          new e.Operacion(
                            "ImprimirCodigoDeBarrasCode39",
                            u()(arguments)
                          )
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "ImprimirCodigoDeBarrasCode93",
                    value: function (t, a, r, o) {
                      return (
                        this.operaciones.push(
                          new e.Operacion(
                            "ImprimirCodigoDeBarrasCode93",
                            u()(arguments)
                          )
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "ImprimirCodigoDeBarrasEan",
                    value: function (t, a, r, o) {
                      return (
                        this.operaciones.push(
                          new e.Operacion(
                            "ImprimirCodigoDeBarrasEan",
                            u()(arguments)
                          )
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "ImprimirCodigoDeBarrasEan8",
                    value: function (t, a, r, o) {
                      return (
                        this.operaciones.push(
                          new e.Operacion(
                            "ImprimirCodigoDeBarrasEan8",
                            u()(arguments)
                          )
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "ImprimirCodigoDeBarrasPdf417",
                    value: function (t, a, r, o, n) {
                      return (
                        this.operaciones.push(
                          new e.Operacion(
                            "ImprimirCodigoDeBarrasPdf417",
                            u()(arguments)
                          )
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "ImprimirCodigoDeBarrasTwoOfFiveITF",
                    value: function (t, a, r, o, n) {
                      return (
                        this.operaciones.push(
                          new e.Operacion(
                            "ImprimirCodigoDeBarrasTwoOfFiveITF",
                            u()(arguments)
                          )
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "ImprimirCodigoDeBarrasUpcA",
                    value: function (t, a, r, o) {
                      return (
                        this.operaciones.push(
                          new e.Operacion(
                            "ImprimirCodigoDeBarrasUpcA",
                            u()(arguments)
                          )
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "ImprimirCodigoDeBarrasUpcE",
                    value: function (t, a, r, o) {
                      return (
                        this.operaciones.push(
                          new e.Operacion(
                            "ImprimirCodigoDeBarrasUpcE",
                            u()(arguments)
                          )
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "ImprimirCodigoQr",
                    value: function (t, a, r, o) {
                      return (
                        this.operaciones.push(
                          new e.Operacion("ImprimirCodigoQr", u()(arguments))
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "ImprimirImagenEnBase64",
                    value: function (t, a, r) {
                      return (
                        this.operaciones.push(
                          new e.Operacion(
                            "ImprimirImagenEnBase64",
                            u()(arguments)
                          )
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "Iniciar",
                    value: function () {
                      return (
                        this.operaciones.push(
                          new e.Operacion("Iniciar", u()(arguments))
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "Pulso",
                    value: function (t, a, r) {
                      return (
                        this.operaciones.push(
                          new e.Operacion("Pulso", u()(arguments))
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "TextoSegunPaginaDeCodigos",
                    value: function (t, a, r) {
                      return (
                        this.operaciones.push(
                          new e.Operacion(
                            "TextoSegunPaginaDeCodigos",
                            u()(arguments)
                          )
                        ),
                        this
                      );
                    },
                  },
                  {
                    key: "imprimirEnImpresoraRemota",
                    value: (function () {
                      var e = l()(
                        n.a.mark(function e(t, a) {
                          var r, o;
                          return n.a.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (r = {
                                        operaciones: this.operaciones,
                                        nombreImpresora: t,
                                        serial: this.serial,
                                      }),
                                      (e.next = 3),
                                      fetch(this.ruta + "/reenviar?host=" + a, {
                                        method: "POST",
                                        body: s()(r),
                                      })
                                    );
                                  case 3:
                                    return (o = e.sent), (e.next = 6), o.json();
                                  case 6:
                                    return e.abrupt("return", e.sent);
                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      );
                      return function (t, a) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  },
                  {
                    key: "imprimirEn",
                    value: (function () {
                      var e = l()(
                        n.a.mark(function e(t) {
                          var a, r;
                          return n.a.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (a = {
                                        operaciones: this.operaciones,
                                        nombreImpresora: t,
                                        serial: this.serial,
                                      }),
                                      (e.next = 3),
                                      fetch(this.ruta + "/imprimir", {
                                        method: "POST",
                                        body: s()(a),
                                      })
                                    );
                                  case 3:
                                    return (r = e.sent), (e.next = 6), r.json();
                                  case 6:
                                    return e.abrupt("return", e.sent);
                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  },
                ],
                [
                  {
                    key: "obtenerImpresoras",
                    value: (function () {
                      var t = l()(
                        n.a.mark(function t(a) {
                          var r;
                          return n.a.wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      a && (e.URL_PLUGIN_POR_DEFECTO = a),
                                      (t.next = 3),
                                      fetch(
                                        e.URL_PLUGIN_POR_DEFECTO + "/impresoras"
                                      )
                                    );
                                  case 3:
                                    return (r = t.sent), (t.next = 6), r.json();
                                  case 6:
                                    return t.abrupt("return", t.sent);
                                  case 7:
                                  case "end":
                                    return t.stop();
                                }
                            },
                            t,
                            this
                          );
                        })
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })(),
                  },
                  {
                    key: "obtenerImpresorasRemotas",
                    value: (function () {
                      var t = l()(
                        n.a.mark(function t(a, r) {
                          var o;
                          return n.a.wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      a && (e.URL_PLUGIN_POR_DEFECTO = a),
                                      (t.next = 3),
                                      fetch(
                                        e.URL_PLUGIN_POR_DEFECTO +
                                          "/reenviar?host=" +
                                          r
                                      )
                                    );
                                  case 3:
                                    return (o = t.sent), (t.next = 6), o.json();
                                  case 6:
                                    return t.abrupt("return", t.sent);
                                  case 7:
                                  case "end":
                                    return t.stop();
                                }
                            },
                            t,
                            this
                          );
                        })
                      );
                      return function (e, a) {
                        return t.apply(this, arguments);
                      };
                    })(),
                  },
                ]
              ),
              e
            );
          })()).URL_PLUGIN_POR_DEFECTO = "http://localhost:8000"),
          (r.Operacion = function e(t, a) {
            f()(this, e), (this.nombre = t), (this.argumentos = a);
          }),
          (r.TAMAÑO_IMAGEN_NORMAL = 0),
          (r.TAMAÑO_IMAGEN_DOBLE_ANCHO = 1),
          (r.TAMAÑO_IMAGEN_DOBLE_ALTO = 2),
          (r.TAMAÑO_IMAGEN_DOBLE_ANCHO_Y_ALTO = 3),
          (r.TAMAÑO_IMAGEN_DOBLE_ANCHO_Y_ALTO = 3),
          (r.ALINEACION_IZQUIERDA = 0),
          (r.ALINEACION_CENTRO = 1),
          (r.ALINEACION_DERECHA = 2),
          (r.RECUPERACION_QR_BAJA = 0),
          (r.RECUPERACION_QR_MEDIA = 1),
          (r.RECUPERACION_QR_ALTA = 2),
          (r.RECUPERACION_QR_MEJOR = 3),
          r);
      t.a = h;
    },
    XJMd: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("woOf"),
        o = a.n(r),
        n = a("8o1w"),
        i = {
          name: "DialogoNuevo",
          props: ["mostrar", "esParaNuevo"],
          methods: {
            cerrarDialogo: function () {
              this.$refs.formulario.reset(), this.$emit("cerrar");
            },
            guardar: function () {
              var e = this;
              if (this.$refs.formulario.validate()) {
                this.cargando = !0;
                var t = {
                  password: this.nuevoUsuario.pass,
                  nombre: this.nuevoUsuario.nombre,
                };
                n.b.post("usuario", t).then(function (t) {
                  (e.cargando = !1),
                    t
                      ? (e.$emit("correcto"), e.cerrarDialogo())
                      : e.$emit("error");
                });
              }
            },
          },
          data: function () {
            var e = this;
            return {
              cargando: !1,
              nuevoUsuario: { nombre: "", pass: "", pass2: "" },
              reglas: {
                nombre: [
                  function (e) {
                    return !!e || "Escriba un nombre de usuario";
                  },
                ],
                pass: [
                  function (t) {
                    return t
                      ? !e.nuevoUsuario.pass ||
                          !e.nuevoUsuario.pass2 ||
                          e.nuevoUsuario.pass === e.nuevoUsuario.pass2 ||
                          "Las contraseñas no coinciden"
                      : "Ingrese una contraseña";
                  },
                ],
                comprobarPass: [
                  function (t) {
                    return t
                      ? !e.nuevoUsuario.pass ||
                          !e.nuevoUsuario.pass2 ||
                          e.nuevoUsuario.pass === e.nuevoUsuario.pass2 ||
                          "Las contraseñas no coinciden"
                      : "Vuelva a escribir la contraseña de arriba";
                  },
                ],
              },
            };
          },
        },
        s = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-dialog",
              {
                attrs: { persistent: "", "max-width": "500" },
                model: {
                  value: e.mostrar,
                  callback: function (t) {
                    e.mostrar = t;
                  },
                  expression: "mostrar",
                },
              },
              [
                a(
                  "v-card",
                  [
                    a("v-card-title", { staticClass: "headline" }, [
                      e._v("Nuevo usuario"),
                    ]),
                    e._v(" "),
                    a(
                      "v-card-text",
                      [
                        a(
                          "v-alert",
                          { attrs: { type: "info", value: e.esParaNuevo } },
                          [
                            a("strong", [
                              e._v(
                                "Se ha detectado que este es el primer uso del sistema. Por favor\n          registre al usuario administrador"
                              ),
                            ]),
                            e._v(" "),
                            a("br"),
                            e._v(
                              "\n        Recuerde elegir una contraseña segura y fácil de recordar, ya que de\n        eso dependerá la seguridad de su cuenta.\n      "
                            ),
                          ]
                        ),
                        e._v(" "),
                        a(
                          "v-form",
                          { ref: "formulario" },
                          [
                            a(
                              "v-container",
                              { attrs: { fluid: "", "grid-list-md": "" } },
                              [
                                a(
                                  "v-layout",
                                  { attrs: { row: "", wrap: "" } },
                                  [
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "" } },
                                      [
                                        a("v-text-field", {
                                          attrs: {
                                            label: "Nombre de usuario",
                                            type: "text",
                                            rules: e.reglas.nombre,
                                            hint: "Por ejemplo: maria, francisco, etcétera ",
                                            required: "",
                                          },
                                          model: {
                                            value: e.nuevoUsuario.nombre,
                                            callback: function (t) {
                                              e.$set(
                                                e.nuevoUsuario,
                                                "nombre",
                                                t
                                              );
                                            },
                                            expression: "nuevoUsuario.nombre",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "" } },
                                      [
                                        a("v-text-field", {
                                          attrs: {
                                            label: "Contraseña",
                                            type: "password",
                                            rules: e.reglas.pass,
                                            required: "",
                                          },
                                          model: {
                                            value: e.nuevoUsuario.pass,
                                            callback: function (t) {
                                              e.$set(e.nuevoUsuario, "pass", t);
                                            },
                                            expression: "nuevoUsuario.pass",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "" } },
                                      [
                                        a("v-text-field", {
                                          attrs: {
                                            label: "Repetir contraseña",
                                            type: "password",
                                            rules: e.reglas.comprobarPass,
                                            hint: "Vuelva a escribir su contraseña",
                                            required: "",
                                          },
                                          model: {
                                            value: e.nuevoUsuario.pass2,
                                            callback: function (t) {
                                              e.$set(
                                                e.nuevoUsuario,
                                                "pass2",
                                                t
                                              );
                                            },
                                            expression: "nuevoUsuario.pass2",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a(
                                      "v-alert",
                                      {
                                        attrs: {
                                          type: "info",
                                          value: !e.esParaNuevo,
                                        },
                                      },
                                      [
                                        e._v(
                                          "\n              Recuerde elegir una contraseña segura, ya que de eso dependerá\n              la seguridad de su cuenta.\n              "
                                        ),
                                        a("br"),
                                        e._v(
                                          "\n              No elija una contraseña como 123, 1245, su fecha de nacimiento o\n              el nombre de su mascota\n            "
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-card-actions",
                      [
                        a("v-spacer"),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: {
                              loading: e.cargando,
                              color: "green darken-1",
                              flat: "flat",
                            },
                            nativeOn: {
                              click: function (t) {
                                e.guardar();
                              },
                            },
                          },
                          [e._v("Guardar")]
                        ),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !e.esParaNuevo,
                                expression: "!esParaNuevo",
                              },
                            ],
                            attrs: { color: "gray", flat: "flat" },
                            nativeOn: {
                              click: function (t) {
                                e.cerrarDialogo();
                              },
                            },
                          },
                          [e._v("Cerrar")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        c = a("VU/8")(i, s, !1, null, null, null).exports,
        l = {
          name: "Lista",
          components: { Publicidad: a("nBfo").a },
          beforeMount: function () {
            this.obtener();
          },
          methods: {
            cambiarPermisosDe: function (e) {
              this.$emit("cambiarPermisos", e);
            },
            obtener: function () {
              var e = this;
              (this.cargando = !0),
                n.b.get("usuarios").then(function (t) {
                  (e.usuarios = t), (e.cargando = !1);
                });
            },
          },
          data: function () {
            return {
              usuarios: [],
              cargando: !1,
              encabezados: [
                { text: "#", align: "center", value: "Numero" },
                { text: "Nombre", align: "center", value: "Nombre" },
                { text: "Opciones", align: "center", sortable: !1 },
              ],
            };
          },
        },
        d = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                a("v-flex", { attrs: { xs12: "" } }, [a("Publicidad")], 1),
                e._v(" "),
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a(
                      "v-data-table",
                      {
                        staticClass: "elevation-1",
                        attrs: {
                          loading: e.cargando,
                          headers: e.encabezados,
                          items: e.usuarios,
                          "hide-actions": "",
                        },
                        scopedSlots: e._u([
                          {
                            key: "items",
                            fn: function (t) {
                              return [
                                a("td", [e._v(e._s(t.item.Numero))]),
                                e._v(" "),
                                a("td", [e._v(e._s(t.item.Nombre))]),
                                e._v(" "),
                                a(
                                  "td",
                                  { staticClass: "justify-center layout px-0" },
                                  [
                                    a(
                                      "v-btn",
                                      {
                                        staticClass: "mx-0",
                                        attrs: {
                                          title: "Modificar permisos",
                                          icon: "",
                                        },
                                        on: {
                                          click: function (a) {
                                            e.cambiarPermisosDe(t.item);
                                          },
                                        },
                                      },
                                      [
                                        a(
                                          "v-icon",
                                          { attrs: { color: "green" } },
                                          [e._v("verified_user")]
                                        ),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a(
                                      "v-btn",
                                      {
                                        staticClass: "mx-0",
                                        attrs: { title: "Eliminar", icon: "" },
                                        on: { click: function (e) {} },
                                      },
                                      [
                                        a(
                                          "v-icon",
                                          { attrs: { color: "red" } },
                                          [e._v("delete")]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ];
                            },
                          },
                        ]),
                      },
                      [
                        a(
                          "template",
                          { slot: "no-data" },
                          [
                            a(
                              "v-alert",
                              {
                                attrs: {
                                  value: e.usuarios.length <= 0,
                                  color: "info",
                                },
                              },
                              [
                                a(
                                  "div",
                                  { staticClass: "text-xs-center" },
                                  [
                                    a("h1", [e._v("No hay usuarios")]),
                                    e._v(" "),
                                    a(
                                      "v-icon",
                                      { staticClass: "icono-grande" },
                                      [e._v("announcement")]
                                    ),
                                    e._v(" "),
                                    a(
                                      "p",
                                      [
                                        e._v(
                                          "\n              No has registrado ningún usuario Agrega uno con el botón\n              "
                                        ),
                                        a("v-icon", [e._v("add")]),
                                        e._v(
                                          "\n              de la esquina\n            "
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      2
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        u = a("VU/8")(l, d, !1, null, null, null).exports,
        v = {
          name: "Permisos",
          props: ["usuario", "mostrar"],
          data: function () {
            return { cargando: !1, select: !1, permisos: [] };
          },
          watch: {
            mostrar: function (e) {
              e &&
                this.$nextTick(
                  this.obtenerTodosLosPermisosYCombinarConLosDelUsuario
                );
            },
          },
          methods: {
            guardar: function () {
              var e = this,
                t = this.permisos
                  .filter(function (e) {
                    return e.Concedido;
                  })
                  .map(function (e) {
                    return e.Id;
                  });
              (this.cargando = !0),
                n.b
                  .put("permisos/para/" + this.usuario.Numero, t)
                  .then(function (t) {
                    (e.cargando = !1),
                      !0 === t
                        ? (e.$emit("asignados-correctamente"),
                          e.cerrarDialogo())
                        : e.$emit("error-asignando");
                  });
            },
            obtenerTodosLosPermisosYCombinarConLosDelUsuario: function () {
              var e = this;
              this.usuario.Numero &&
                ((this.cargando = !0),
                n.b.get("permisos").then(function (t) {
                  n.b.get("permisos/de/" + e.usuario.Numero).then(function (a) {
                    (e.permisos = t.map(function (e) {
                      return (
                        (e.Concedido = a.includes(e.Id)), delete e.Clave, e
                      );
                    })),
                      (e.cargando = !1);
                  });
                }));
            },
            cerrarDialogo: function () {
              this.$emit("cerrar");
            },
          },
        },
        p = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-dialog",
              {
                attrs: { persistent: "", "max-width": "800" },
                model: {
                  value: e.mostrar,
                  callback: function (t) {
                    e.mostrar = t;
                  },
                  expression: "mostrar",
                },
              },
              [
                a(
                  "v-card",
                  [
                    a("v-card-title", { staticClass: "headline" }, [
                      e._v(
                        "Permisos de usuario " +
                          e._s(e.usuario.Nombre) +
                          " (#" +
                          e._s(e.usuario.Numero) +
                          ")"
                      ),
                    ]),
                    e._v(" "),
                    a(
                      "v-card-text",
                      [
                        a(
                          "v-list",
                          { attrs: { "two-line": "" } },
                          [
                            e._l(e.permisos, function (t, r) {
                              return [
                                a("v-divider"),
                                e._v(" "),
                                a(
                                  "v-list-tile",
                                  {
                                    key: r,
                                    staticStyle: { height: "auto" },
                                    attrs: { avatar: "" },
                                  },
                                  [
                                    a(
                                      "v-list-tile-avatar",
                                      {
                                        staticStyle: {
                                          height: "auto",
                                          "align-self": "center",
                                          "align-items": "center",
                                        },
                                      },
                                      [
                                        a("v-checkbox", {
                                          staticStyle: {
                                            "align-self": "center",
                                          },
                                          attrs: { color: "green" },
                                          model: {
                                            value: t.Concedido,
                                            callback: function (a) {
                                              e.$set(t, "Concedido", a);
                                            },
                                            expression: "permiso.Concedido",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a(
                                      "v-list-tile-content",
                                      { staticStyle: { height: "auto" } },
                                      [
                                        a(
                                          "v-list-tile-title",
                                          {
                                            staticStyle: {
                                              "white-space": "normal",
                                              overflow: "unset",
                                              height: "auto",
                                            },
                                          },
                                          [
                                            a("strong", [
                                              e._v("#" + e._s(t.Id)),
                                            ]),
                                            e._v(
                                              "\n                " +
                                                e._s(t.Descripcion) +
                                                "\n              "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ];
                            }),
                          ],
                          2
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-card-actions",
                      [
                        a("v-spacer"),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: {
                              loading: e.cargando,
                              color: "green darken-1",
                              flat: "flat",
                            },
                            nativeOn: {
                              click: function (t) {
                                e.guardar();
                              },
                            },
                          },
                          [e._v("Guardar")]
                        ),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: { color: "gray", flat: "flat" },
                            nativeOn: {
                              click: function (t) {
                                e.cerrarDialogo();
                              },
                            },
                          },
                          [e._v("Cerrar")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        m = a("VU/8")(v, p, !1, null, null, null).exports,
        f = a("NHnr"),
        h = {
          methods: {
            onErrorAlAsignarPermisos: function () {
              this.snackbars.errorAlAsignarPermisos = !0;
            },
            onPermisosAsignadosCorrectamente: function () {
              this.snackbars.permisosAsignados = !0;
            },
            onRegistroCorrecto: function () {
              this.$refs.lista.obtener(),
                (this.snackbars.registroCorrecto = !0);
            },
            onCambiarPermisos: function (e) {
              (this.usuarioSeleccionado = o()({}, e)),
                (this.dialogos.permisos = !0);
            },
          },
          beforeMount: function () {
            f.EventBus.$emit("ponerTitulo", "Usuarios");
          },
          data: function () {
            return {
              snackbars: {
                errorAlAsignarPermisos: !1,
                registroCorrecto: !1,
                registroIncorrecto: !1,
                permisosAsignados: !1,
              },
              dialogos: { nuevo: !1, permisos: !1 },
              usuarioSeleccionado: {},
            };
          },
          name: "Usuarios",
          components: { Lista: u, DialogoNuevo: c, Permisos: m },
        },
        g = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a("Lista", {
                      ref: "lista",
                      on: { cambiarPermisos: e.onCambiarPermisos },
                    }),
                  ],
                  1
                ),
                e._v(" "),
                a("DialogoNuevo", {
                  attrs: { mostrar: e.dialogos.nuevo },
                  on: {
                    correcto: e.onRegistroCorrecto,
                    error: function (t) {
                      e.snackbars.registroIncorrecto = !0;
                    },
                    cerrar: function (t) {
                      e.dialogos.nuevo = !1;
                    },
                  },
                }),
                e._v(" "),
                a("Permisos", {
                  attrs: {
                    mostrar: e.dialogos.permisos,
                    usuario: e.usuarioSeleccionado,
                  },
                  on: {
                    cerrar: function (t) {
                      e.dialogos.permisos = !1;
                    },
                    "asignados-correctamente":
                      e.onPermisosAsignadosCorrectamente,
                    "error-asignando": e.onErrorAlAsignarPermisos,
                  },
                }),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 2e3, top: !0, right: !0 },
                    model: {
                      value: e.snackbars.registroCorrecto,
                      callback: function (t) {
                        e.$set(e.snackbars, "registroCorrecto", t);
                      },
                      expression: "snackbars.registroCorrecto",
                    },
                  },
                  [
                    e._v(
                      "\n    Usuario registrado. No olvide asignarle permisos\n    "
                    ),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.registroCorrecto = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 5e3, top: !0, right: !0 },
                    model: {
                      value: e.snackbars.registroIncorrecto,
                      callback: function (t) {
                        e.$set(e.snackbars, "registroIncorrecto", t);
                      },
                      expression: "snackbars.registroIncorrecto",
                    },
                  },
                  [
                    e._v(
                      "\n    Error al registrar. ¿Tal vez el nombre de usuario está ocupado?\n    "
                    ),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.registroIncorrecto = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 5e3, top: !0, right: !0 },
                    model: {
                      value: e.snackbars.permisosAsignados,
                      callback: function (t) {
                        e.$set(e.snackbars, "permisosAsignados", t);
                      },
                      expression: "snackbars.permisosAsignados",
                    },
                  },
                  [
                    e._v("\n    Permisos asignados correctamente\n    "),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.permisosAsignados = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 0, top: !0, right: !0 },
                    model: {
                      value: e.snackbars.errorAlAsignarPermisos,
                      callback: function (t) {
                        e.$set(e.snackbars, "errorAlAsignarPermisos", t);
                      },
                      expression: "snackbars.errorAlAsignarPermisos",
                    },
                  },
                  [
                    e._v(
                      "\n    Error al asignar. ¿tal vez intentó cambiar los permisos del administrador?\n    (recuerde que estos no se pueden cambiar)\n    "
                    ),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.errorAlAsignarPermisos = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-btn",
                  {
                    attrs: {
                      slot: "activator",
                      fixed: "",
                      dark: "",
                      fab: "",
                      bottom: "",
                      "fill-height": "",
                      "open-delay": "0",
                      right: "",
                      color: "indigo",
                    },
                    on: {
                      click: function (t) {
                        e.dialogos.nuevo = !0;
                      },
                    },
                    slot: "activator",
                  },
                  [a("v-icon", [e._v("add")])],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var b = a("VU/8")(
        h,
        g,
        !1,
        function (e) {
          a("H247");
        },
        null,
        null
      );
      t.default = b.exports;
    },
    Ydhh: function (e, t) {},
    Z4vG: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("z4sG"),
        o = a("woOf"),
        n = a.n(o),
        i = a("8o1w"),
        s = {
          props: ["mostrar"],
          watch: {
            mostrar: function (e) {
              e && this.enfocarInputPrincipal();
            },
          },
          methods: {
            enfocarInputPrincipal: function () {
              this.$nextTick(this.$refs.monto.focus);
            },
            cerrarDialogo: function () {
              this.$refs.formulario.reset(), this.$emit("cerrar");
            },
            guardar: function () {
              var e = this;
              this.$refs.formulario.validate() &&
                !this.cargando &&
                ((this.cargando = !0),
                i.b.post("ingreso", n()({}, this.ingreso)).then(function (t) {
                  e.$emit("guardado"),
                    (e.cargando = !1),
                    e.$refs.formulario.reset();
                }));
            },
          },
          data: function () {
            return {
              cargando: !1,
              ingreso: {},
              reglas: {
                monto: [
                  function (e) {
                    return e <= 0
                      ? "Cantidad inválida"
                      : !!e || "Introduce la cantidad";
                  },
                ],
                descripcion: [
                  function (e) {
                    return (
                      !!e || "¿Cuál es la razón o descripción del ingreso?"
                    );
                  },
                ],
              },
            };
          },
        },
        c = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-dialog",
              {
                attrs: { persistent: "", "max-width": "500" },
                model: {
                  value: e.mostrar,
                  callback: function (t) {
                    e.mostrar = t;
                  },
                  expression: "mostrar",
                },
              },
              [
                a(
                  "v-card",
                  [
                    a("v-card-title", { staticClass: "headline" }, [
                      e._v("Registrar ingreso"),
                    ]),
                    e._v(" "),
                    a(
                      "v-card-text",
                      [
                        a(
                          "v-form",
                          { ref: "formulario" },
                          [
                            a(
                              "v-container",
                              { attrs: { fluid: "", "grid-list-md": "" } },
                              [
                                a(
                                  "v-layout",
                                  { attrs: { row: "", wrap: "" } },
                                  [
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "" } },
                                      [
                                        a("v-text-field", {
                                          ref: "monto",
                                          attrs: {
                                            "prepend-icon": "monetization_on",
                                            label: "Monto",
                                            type: "number",
                                            rules: e.reglas.monto,
                                            hint: "La cantidad que ingresa",
                                            required: "",
                                          },
                                          on: {
                                            keyup: function (t) {
                                              if (
                                                !("button" in t) &&
                                                e._k(
                                                  t.keyCode,
                                                  "enter",
                                                  13,
                                                  t.key,
                                                  "Enter"
                                                )
                                              )
                                                return null;
                                              e.guardar();
                                            },
                                          },
                                          model: {
                                            value: e.ingreso.monto,
                                            callback: function (t) {
                                              e.$set(
                                                e.ingreso,
                                                "monto",
                                                e._n(t)
                                              );
                                            },
                                            expression: "ingreso.monto",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "" } },
                                      [
                                        a("v-text-field", {
                                          attrs: {
                                            "prepend-icon": "note_add",
                                            label: "Descripción",
                                            type: "text",
                                            rules: e.reglas.descripcion,
                                            hint: "La descripción del ingreso",
                                            required: "",
                                          },
                                          on: {
                                            keyup: function (t) {
                                              if (
                                                !("button" in t) &&
                                                e._k(
                                                  t.keyCode,
                                                  "enter",
                                                  13,
                                                  t.key,
                                                  "Enter"
                                                )
                                              )
                                                return null;
                                              e.guardar();
                                            },
                                          },
                                          model: {
                                            value: e.ingreso.descripcion,
                                            callback: function (t) {
                                              e.$set(
                                                e.ingreso,
                                                "descripcion",
                                                t
                                              );
                                            },
                                            expression: "ingreso.descripcion",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-card-actions",
                      [
                        a("v-spacer"),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: {
                              loading: e.cargando,
                              color: "green darken-1",
                              flat: "flat",
                            },
                            nativeOn: {
                              click: function (t) {
                                e.guardar();
                              },
                            },
                          },
                          [e._v("Guardar")]
                        ),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: { color: "gray", flat: "flat" },
                            nativeOn: {
                              click: function (t) {
                                e.cerrarDialogo();
                              },
                            },
                          },
                          [e._v("Cerrar")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        l = a("VU/8")(s, c, !1, null, null, null).exports,
        d = {
          props: ["mostrar"],
          watch: {
            mostrar: function (e) {
              e && this.enfocarInputPrincipal();
            },
          },
          methods: {
            enfocarInputPrincipal: function () {
              this.$nextTick(this.$refs.monto.focus);
            },
            cerrarDialogo: function () {
              this.$refs.formulario.reset(), this.$emit("cerrar");
            },
            guardar: function () {
              var e = this;
              this.$refs.formulario.validate() &&
                !this.cargando &&
                ((this.cargando = !0),
                i.b.post("egreso", n()({}, this.egreso)).then(function (t) {
                  e.$emit("guardado"),
                    (e.cargando = !1),
                    e.$refs.formulario.reset();
                }));
            },
          },
          data: function () {
            return {
              cargando: !1,
              egreso: {},
              reglas: {
                monto: [
                  function (e) {
                    return e <= 0
                      ? "Cantidad inválida"
                      : !!e || "Introduce la cantidad";
                  },
                ],
                descripcion: [
                  function (e) {
                    return !!e || "¿Cuál es la razón o descripción del egreso?";
                  },
                ],
              },
            };
          },
        },
        u = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-dialog",
              {
                attrs: { persistent: "", "max-width": "500" },
                model: {
                  value: e.mostrar,
                  callback: function (t) {
                    e.mostrar = t;
                  },
                  expression: "mostrar",
                },
              },
              [
                a(
                  "v-card",
                  [
                    a("v-card-title", { staticClass: "headline" }, [
                      e._v("Registrar egreso"),
                    ]),
                    e._v(" "),
                    a(
                      "v-card-text",
                      [
                        a(
                          "v-form",
                          { ref: "formulario" },
                          [
                            a(
                              "v-container",
                              { attrs: { fluid: "", "grid-list-md": "" } },
                              [
                                a(
                                  "v-layout",
                                  { attrs: { row: "", wrap: "" } },
                                  [
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "" } },
                                      [
                                        a("v-text-field", {
                                          ref: "monto",
                                          attrs: {
                                            "prepend-icon": "monetization_on",
                                            label: "Monto",
                                            type: "number",
                                            rules: e.reglas.monto,
                                            hint: "La cantidad que sale",
                                            required: "",
                                          },
                                          on: {
                                            keyup: function (t) {
                                              if (
                                                !("button" in t) &&
                                                e._k(
                                                  t.keyCode,
                                                  "enter",
                                                  13,
                                                  t.key,
                                                  "Enter"
                                                )
                                              )
                                                return null;
                                              e.guardar();
                                            },
                                          },
                                          model: {
                                            value: e.egreso.monto,
                                            callback: function (t) {
                                              e.$set(
                                                e.egreso,
                                                "monto",
                                                e._n(t)
                                              );
                                            },
                                            expression: "egreso.monto",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "" } },
                                      [
                                        a("v-text-field", {
                                          attrs: {
                                            "prepend-icon": "note_add",
                                            label: "Descripción",
                                            type: "text",
                                            rules: e.reglas.descripcion,
                                            hint: "La descripción del egreso o salida",
                                            required: "",
                                          },
                                          on: {
                                            keyup: function (t) {
                                              if (
                                                !("button" in t) &&
                                                e._k(
                                                  t.keyCode,
                                                  "enter",
                                                  13,
                                                  t.key,
                                                  "Enter"
                                                )
                                              )
                                                return null;
                                              e.guardar();
                                            },
                                          },
                                          model: {
                                            value: e.egreso.descripcion,
                                            callback: function (t) {
                                              e.$set(
                                                e.egreso,
                                                "descripcion",
                                                t
                                              );
                                            },
                                            expression: "egreso.descripcion",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-card-actions",
                      [
                        a("v-spacer"),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: {
                              loading: e.cargando,
                              color: "green darken-1",
                              flat: "flat",
                            },
                            nativeOn: {
                              click: function (t) {
                                e.guardar();
                              },
                            },
                          },
                          [e._v("Guardar")]
                        ),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: { color: "gray", flat: "flat" },
                            nativeOn: {
                              click: function (t) {
                                e.cerrarDialogo();
                              },
                            },
                          },
                          [e._v("Cerrar")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        v = a("VU/8")(d, u, !1, null, null, null).exports,
        p = {
          methods: {
            obtener: function (e, t) {
              var a = this;
              (this.total = 0),
                i.b.get("ingresos/" + e + "/" + t).then(function (e) {
                  (a.total = e.reduce(
                    function (e, t) {
                      return { Monto: e.Monto + t.Monto };
                    },
                    { Monto: 0 }
                  ).Monto),
                    (a.ingresos = e);
                });
            },
          },
          data: function () {
            return {
              ingresos: [],
              total: 0,
              encabezados: [
                { text: "Monto", value: "Monto" },
                { text: "Descripcion", value: "Descripcion" },
                { text: "Fecha", value: "Fecha" },
                { text: "Usuario", value: "Usuario.Nombre" },
              ],
            };
          },
        },
        m = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                a("v-flex", { attrs: { xs12: "" } }, [
                  a("h1", [
                    a("span", { staticClass: "display-1" }, [
                      e._v(e._s(e._f("currency")(e.total))),
                    ]),
                    e._v(" "),
                    a("span", { staticClass: "title" }, [e._v("Ingresos")]),
                  ]),
                ]),
                e._v(" "),
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a("v-data-table", {
                      attrs: {
                        headers: e.encabezados,
                        items: e.ingresos,
                        "hide-actions": "",
                        "item-key": "props.item.index",
                      },
                      scopedSlots: e._u([
                        {
                          key: "items",
                          fn: function (t) {
                            return [
                              a("tr", [
                                a("td", [
                                  e._v(e._s(e._f("currency")(t.item.Monto))),
                                ]),
                                e._v(" "),
                                a("td", [e._v(e._s(t.item.Descripcion))]),
                                e._v(" "),
                                a("td", [
                                  e._v(
                                    e._s(e._f("fechaExpresiva")(t.item.Fecha))
                                  ),
                                ]),
                                e._v(" "),
                                a("td", [e._v(e._s(t.item.Usuario.Nombre))]),
                              ]),
                            ];
                          },
                        },
                      ]),
                    }),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        f = a("VU/8")(p, m, !1, null, null, null).exports,
        h = {
          methods: {
            obtener: function (e, t) {
              var a = this;
              (this.total = 0),
                i.b.get("egresos/" + e + "/" + t).then(function (e) {
                  (a.total = e.reduce(
                    function (e, t) {
                      return { Monto: e.Monto + t.Monto };
                    },
                    { Monto: 0 }
                  ).Monto),
                    (a.egresos = e);
                });
            },
          },
          data: function () {
            return {
              total: 0,
              egresos: [],
              encabezados: [
                { text: "Monto", value: "Monto" },
                { text: "Descripcion", value: "Descripcion" },
                { text: "Fecha", value: "Fecha" },
                { text: "Usuario", value: "Usuario.Nombre" },
              ],
            };
          },
        },
        g = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                a("v-flex", { attrs: { xs12: "" } }, [
                  a("h1", [
                    a("span", { staticClass: "display-1" }, [
                      e._v(e._s(e._f("currency")(e.total))),
                    ]),
                    e._v(" "),
                    a("span", { staticClass: "title" }, [e._v("Egresos")]),
                  ]),
                ]),
                e._v(" "),
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a("v-data-table", {
                      attrs: {
                        headers: e.encabezados,
                        items: e.egresos,
                        "hide-actions": "",
                        "item-key": "props.item.index",
                      },
                      scopedSlots: e._u([
                        {
                          key: "items",
                          fn: function (t) {
                            return [
                              a("tr", [
                                a("td", [
                                  e._v(e._s(e._f("currency")(t.item.Monto))),
                                ]),
                                e._v(" "),
                                a("td", [e._v(e._s(t.item.Descripcion))]),
                                e._v(" "),
                                a("td", [
                                  e._v(
                                    e._s(e._f("fechaExpresiva")(t.item.Fecha))
                                  ),
                                ]),
                                e._v(" "),
                                a("td", [e._v(e._s(t.item.Usuario.Nombre))]),
                              ]),
                            ];
                          },
                        },
                      ]),
                    }),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        b = a("VU/8")(h, g, !1, null, null, null).exports,
        A = a("NHnr"),
        _ = {
          components: {
            Publicidad: a("nBfo").a,
            SeleccionadorDeFechas: r.a,
            DialogoIngreso: l,
            DialogoEgreso: v,
            Ingresos: f,
            Egresos: b,
          },
          beforeMount: function () {
            A.EventBus.$emit("ponerTitulo", "Caja");
          },
          methods: {
            comprobarFechasYRefrescarSiEsNecesario: function (e) {
              var t = e.inicio,
                a = e.fin;
              t &&
                a &&
                ((this.ultimaFechaInicio = t),
                (this.ultimaFechaFin = a),
                this.consultarIngresosYEgresos(t, a));
            },
            consultarIngresosYEgresos: function (e, t) {
              var a = this;
              this.$nextTick(function () {
                a.$refs.ingresos.obtener(e, t), a.$refs.egresos.obtener(e, t);
              });
            },
            onIngresoGuardado: function () {
              this.consultarIngresosYEgresos(
                this.ultimaFechaInicio,
                this.ultimaFechaFin
              ),
                (this.dialogos.ingreso = !1),
                (this.snackbars.ingresoGuardado = !0);
            },
            onEgresoGuardado: function () {
              this.consultarIngresosYEgresos(
                this.ultimaFechaInicio,
                this.ultimaFechaFin
              ),
                (this.dialogos.egreso = !1),
                (this.snackbars.egresoGuardado = !0);
            },
          },
          data: function () {
            return {
              ultimaFechaInicio: null,
              ultimaFechaFin: null,
              dialogos: { ingreso: !1, egreso: !1 },
              snackbars: { ingresoGuardado: !1, egresoGuardado: !1 },
            };
          },
        },
        x = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                a("dialogo-ingreso", {
                  attrs: { mostrar: e.dialogos.ingreso },
                  on: {
                    guardado: e.onIngresoGuardado,
                    cerrar: function (t) {
                      e.dialogos.ingreso = !1;
                    },
                  },
                }),
                e._v(" "),
                a("dialogo-egreso", {
                  attrs: { mostrar: e.dialogos.egreso },
                  on: {
                    guardado: e.onEgresoGuardado,
                    cerrar: function (t) {
                      e.dialogos.egreso = !1;
                    },
                  },
                }),
                e._v(" "),
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a(
                      "v-btn",
                      {
                        attrs: { small: "", color: "success" },
                        on: {
                          click: function (t) {
                            e.dialogos.ingreso = !0;
                          },
                        },
                      },
                      [e._v("Registrar ingreso")]
                    ),
                    e._v(" "),
                    a(
                      "v-btn",
                      {
                        attrs: { small: "", color: "orange" },
                        on: {
                          click: function (t) {
                            e.dialogos.egreso = !0;
                          },
                        },
                      },
                      [e._v("Registrar egreso")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a("seleccionador-de-fechas", {
                  on: { cambio: e.comprobarFechasYRefrescarSiEsNecesario },
                }),
                e._v(" "),
                a("v-flex", { attrs: { xs12: "" } }, [a("Publicidad")], 1),
                e._v(" "),
                a(
                  "v-flex",
                  { attrs: { xs12: "", sm6: "" } },
                  [a("ingresos", { ref: "ingresos" })],
                  1
                ),
                e._v(" "),
                a(
                  "v-flex",
                  { attrs: { xs12: "", sm6: "" } },
                  [a("egresos", { ref: "egresos" })],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 5e3, top: !0, right: !0 },
                    model: {
                      value: e.snackbars.ingresoGuardado,
                      callback: function (t) {
                        e.$set(e.snackbars, "ingresoGuardado", t);
                      },
                      expression: "snackbars.ingresoGuardado",
                    },
                  },
                  [
                    e._v("\n    Ingreso guardado\n    "),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.ingresoGuardado = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 5e3, top: !0, right: !0 },
                    model: {
                      value: e.snackbars.egresoGuardado,
                      callback: function (t) {
                        e.$set(e.snackbars, "egresoGuardado", t);
                      },
                      expression: "snackbars.egresoGuardado",
                    },
                  },
                  [
                    e._v("\n    Egreso guardado\n    "),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.egresoGuardado = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        k = a("VU/8")(_, x, !1, null, null, null);
      t.default = k.exports;
    },
    bpCJ: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("woOf"),
        o = a.n(r),
        n = a("NHnr"),
        i = a("8o1w"),
        s = a("MRIW"),
        c = {
          name: "DialogoNegocioRegistrado",
          props: ["mostrar"],
          methods: {
            cerrarDialogo: function () {
              this.$emit("cerrar-dialogo");
            },
          },
          data: function () {
            return { correo: s.a, usuarioPorDefecto: s.p };
          },
        },
        l = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-dialog",
              {
                attrs: { persistent: "", "max-width": "500" },
                model: {
                  value: e.mostrar,
                  callback: function (t) {
                    e.mostrar = t;
                  },
                  expression: "mostrar",
                },
              },
              [
                a(
                  "v-card",
                  [
                    a("v-card-title", { staticClass: "headline" }, [
                      e._v("Registro correcto"),
                    ]),
                    e._v(" "),
                    a("v-card-text", [
                      a("p", [
                        e._v(
                          "\n        Registro correcto, será redireccionado\n        "
                        ),
                        a("br"),
                        e._v(
                          "\n        Para iniciar sesión coloque los siguientes datos:\n      "
                        ),
                      ]),
                      e._v(" "),
                      a("strong", [e._v("Correo: ")]),
                      e._v(" El que usted eligió\n      "),
                      a("br"),
                      e._v(" "),
                      a("strong", [e._v("Usuario: ")]),
                      e._v(" "),
                      a("code", [e._v(e._s(e.usuarioPorDefecto))]),
                      e._v(" "),
                      a("br"),
                      e._v(" "),
                      a("strong", [e._v("Contraseña: ")]),
                      e._v(" la que usted eligió\n      "),
                      a("br"),
                      e._v(" "),
                      a("strong", [
                        e._v("Más adelante podrá crear más usuarios"),
                      ]),
                    ]),
                    e._v(" "),
                    a(
                      "v-card-actions",
                      [
                        a("v-spacer"),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: { color: "success" },
                            nativeOn: {
                              click: function (t) {
                                e.cerrarDialogo();
                              },
                            },
                          },
                          [e._v("OK")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var d = {
          name: "DialogoNegocioNoRegistrado",
          props: ["mostrar"],
          methods: {
            cerrarDialogo: function () {
              this.$emit("cerrar-dialogo");
            },
            data: function () {
              return { correo: s.a };
            },
          },
        },
        u = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-dialog",
              {
                attrs: { persistent: "", "max-width": "500" },
                model: {
                  value: e.mostrar,
                  callback: function (t) {
                    e.mostrar = t;
                  },
                  expression: "mostrar",
                },
              },
              [
                a(
                  "v-card",
                  [
                    a("v-card-title", { staticClass: "headline" }, [
                      e._v("Error al registrar"),
                    ]),
                    e._v(" "),
                    a("v-card-text", [
                      a("p", [
                        e._v(
                          "\n        Ha ocurrido un error al registrar tu negocio. Intenta registrarte de\n        nuevo más tarde. Si continúas teniendo problemas, asegúrate de haber\n        instalado el programa correctamente. Enlace de ayuda:\n        "
                        ),
                        a(
                          "a",
                          {
                            attrs: {
                              target: "_blank",
                              href: "https://parzibyte.me/blog/2021/06/19/ayuda-soporte-sublime-pos-3/",
                            },
                          },
                          [
                            e._v(
                              "https://parzibyte.me/blog/2021/06/19/ayuda-soporte-sublime-pos-3/"
                            ),
                          ]
                        ),
                      ]),
                    ]),
                    e._v(" "),
                    a(
                      "v-card-actions",
                      [
                        a("v-spacer"),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: { color: "success" },
                            nativeOn: {
                              click: function (t) {
                                e.cerrarDialogo();
                              },
                            },
                          },
                          [e._v("Cerrar")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var v = {
          name: "DialogoNegocioExistente",
          props: ["mostrar"],
          methods: {
            cerrarDialogo: function () {
              this.$emit("cerrar-dialogo");
            },
            data: function () {
              return { correo: s.a };
            },
          },
        },
        p = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-dialog",
              {
                attrs: { persistent: "", "max-width": "500" },
                model: {
                  value: e.mostrar,
                  callback: function (t) {
                    e.mostrar = t;
                  },
                  expression: "mostrar",
                },
              },
              [
                a(
                  "v-card",
                  [
                    a("v-card-title", { staticClass: "headline" }, [
                      e._v("Correo electrónico existente"),
                    ]),
                    e._v(" "),
                    a("v-card-text", [
                      a("p", [
                        e._v(
                          "\n        Parece que ya hay un negocio registrado con ese correo electrónico.\n        Intenta de nuevo con otra dirección. Si continúas teniendo problemas,\n        asegúrate de haber instalado el programa correctamente. Enlace de\n        ayuda:\n        "
                        ),
                        a(
                          "a",
                          {
                            attrs: {
                              target: "_blank",
                              href: "https://parzibyte.me/blog/2021/06/19/ayuda-soporte-sublime-pos-3/",
                            },
                          },
                          [
                            e._v(
                              "https://parzibyte.me/blog/2021/06/19/ayuda-soporte-sublime-pos-3/"
                            ),
                          ]
                        ),
                      ]),
                    ]),
                    e._v(" "),
                    a(
                      "v-card-actions",
                      [
                        a("v-spacer"),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: { color: "success" },
                            nativeOn: {
                              click: function (t) {
                                e.cerrarDialogo();
                              },
                            },
                          },
                          [e._v("Cerrar")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var m = {
          name: "Registro",
          components: {
            DialogoNegocioRegistrado: a("VU/8")(
              c,
              l,
              !1,
              function (e) {
                a("Lw4w");
              },
              "data-v-3abdb1e1",
              null
            ).exports,
            DialogoNegocioNoRegistrado: a("VU/8")(
              d,
              u,
              !1,
              function (e) {
                a("uVUN");
              },
              "data-v-7dcc72f6",
              null
            ).exports,
            DialogoNegocioExistente: a("VU/8")(
              v,
              p,
              !1,
              function (e) {
                a("herx");
              },
              "data-v-2c7d9aae",
              null
            ).exports,
          },
          beforeMount: function () {
            n.EventBus.$emit("ocultarMenu"),
              n.EventBus.$emit("ponerTitulo", "Registro");
          },
          data: function () {
            return {
              cargando: !1,
              snackbarPassNoCoincide: !1,
              mostrar: {
                dialogoNegocioRegistrado: !1,
                dialogoNegocioNoRegistrado: !1,
                dialogoNegocioExistente: !1,
              },
              negocio: { nombre: "", correo: "", pass: "", passConfirmar: "" },
              reglas: {
                pass: [
                  function (e) {
                    return !!e || "Escribe una contraseña segura";
                  },
                ],
                negocio: [
                  function (e) {
                    return !!e || "Escribe el nombre del negocio";
                  },
                ],
                correo: [
                  function (e) {
                    return e
                      ? !!/\S+@\S+/.test(e) ||
                          "Parece que ese no es un correo electrónico válido"
                      : "Escribe tu correo electrónico";
                  },
                ],
              },
            };
          },
          methods: {
            redireccionarDespuesDeRegistro: function () {
              (this.mostrar.dialogoNegocioRegistrado = !1),
                this.$router.push({ name: "Login" });
            },
            resetearFormulario: function () {
              this.$refs.formulario.reset();
            },
            irAlLogin: function () {
              this.$router.push({ name: "Login" });
            },
            intentarRegistrar: function () {
              var e = this;
              if (this.$refs.formulario.validate())
                if (this.negocio.pass === this.negocio.passConfirmar) {
                  var t = o()({}, this.negocio);
                  (this.cargando = !0),
                    i.a.post("negocio", t).then(function (t) {
                      switch (((e.cargando = !1), t)) {
                        case s.h:
                          (e.mostrar.dialogoNegocioExistente = !0),
                            (e.negocio.correo = "");
                          break;
                        case s.i:
                          e.mostrar.dialogoNegocioNoRegistrado = !0;
                          break;
                        case s.n:
                          e.resetearFormulario(),
                            (e.mostrar.dialogoNegocioRegistrado = !0);
                      }
                    });
                } else this.snackbarPassNoCoincide = !0;
            },
          },
        },
        f = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                a(
                  "v-flex",
                  {
                    attrs: {
                      xs12: "",
                      sm6: "",
                      "offset-sm3": "",
                      md4: "",
                      "offset-md4": "",
                    },
                  },
                  [
                    a(
                      "v-card",
                      [
                        a("v-card-title", [
                          a("h1", { staticClass: "headline" }, [
                            e._v("Registra tu negocio"),
                          ]),
                        ]),
                        e._v(" "),
                        a(
                          "v-card-text",
                          [
                            a(
                              "v-form",
                              { ref: "formulario" },
                              [
                                a(
                                  "v-container",
                                  { attrs: { fluid: "", "grid-list-md": "" } },
                                  [
                                    a(
                                      "v-layout",
                                      { attrs: { row: "", wrap: "" } },
                                      [
                                        a(
                                          "v-flex",
                                          { attrs: { xs12: "" } },
                                          [
                                            a("v-text-field", {
                                              attrs: {
                                                rules: e.reglas.correo,
                                                "prepend-icon": "email",
                                                label: "Tu correo electrónico",
                                                type: "text",
                                                hint: "No es necesario que exista, pero es importante que lo recuerdes",
                                                required: "",
                                              },
                                              on: {
                                                keyup: function (t) {
                                                  if (
                                                    !("button" in t) &&
                                                    e._k(
                                                      t.keyCode,
                                                      "enter",
                                                      13,
                                                      t.key,
                                                      "Enter"
                                                    )
                                                  )
                                                    return null;
                                                  e.intentarRegistrar();
                                                },
                                              },
                                              model: {
                                                value: e.negocio.correo,
                                                callback: function (t) {
                                                  e.$set(
                                                    e.negocio,
                                                    "correo",
                                                    t
                                                  );
                                                },
                                                expression: "negocio.correo",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        e._v(" "),
                                        a(
                                          "v-flex",
                                          { attrs: { xs12: "" } },
                                          [
                                            a("v-text-field", {
                                              attrs: {
                                                rules: e.reglas.negocio,
                                                "prepend-icon":
                                                  "store_mall_directory",
                                                label: "Nombre de tu negocio",
                                                type: "text",
                                                required: "",
                                              },
                                              on: {
                                                keyup: function (t) {
                                                  if (
                                                    !("button" in t) &&
                                                    e._k(
                                                      t.keyCode,
                                                      "enter",
                                                      13,
                                                      t.key,
                                                      "Enter"
                                                    )
                                                  )
                                                    return null;
                                                  e.intentarRegistrar();
                                                },
                                              },
                                              model: {
                                                value: e.negocio.nombre,
                                                callback: function (t) {
                                                  e.$set(
                                                    e.negocio,
                                                    "nombre",
                                                    t
                                                  );
                                                },
                                                expression: "negocio.nombre",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        e._v(" "),
                                        a(
                                          "v-flex",
                                          { attrs: { xs12: "" } },
                                          [
                                            a("v-text-field", {
                                              attrs: {
                                                rules: e.reglas.pass,
                                                "prepend-icon": "lock",
                                                label: "Escribe una contraseña",
                                                type: "password",
                                                hint: "Asegúrate de que sea difícil de adivinar",
                                                required: "",
                                              },
                                              on: {
                                                keyup: function (t) {
                                                  if (
                                                    !("button" in t) &&
                                                    e._k(
                                                      t.keyCode,
                                                      "enter",
                                                      13,
                                                      t.key,
                                                      "Enter"
                                                    )
                                                  )
                                                    return null;
                                                  e.intentarRegistrar();
                                                },
                                              },
                                              model: {
                                                value: e.negocio.pass,
                                                callback: function (t) {
                                                  e.$set(e.negocio, "pass", t);
                                                },
                                                expression: "negocio.pass",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        e._v(" "),
                                        a(
                                          "v-flex",
                                          { attrs: { xs12: "" } },
                                          [
                                            a("v-text-field", {
                                              attrs: {
                                                rules: e.reglas.pass,
                                                "prepend-icon": "lock",
                                                label: "Confirma tu contraseña",
                                                type: "password",
                                                hint: "Vuelve a escribir tu contraseña",
                                                required: "",
                                              },
                                              on: {
                                                keyup: function (t) {
                                                  if (
                                                    !("button" in t) &&
                                                    e._k(
                                                      t.keyCode,
                                                      "enter",
                                                      13,
                                                      t.key,
                                                      "Enter"
                                                    )
                                                  )
                                                    return null;
                                                  e.intentarRegistrar();
                                                },
                                              },
                                              model: {
                                                value: e.negocio.passConfirmar,
                                                callback: function (t) {
                                                  e.$set(
                                                    e.negocio,
                                                    "passConfirmar",
                                                    t
                                                  );
                                                },
                                                expression:
                                                  "negocio.passConfirmar",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a(
                                      "v-btn",
                                      {
                                        attrs: {
                                          loading: e.cargando,
                                          color: "success",
                                        },
                                        on: {
                                          click: function (t) {
                                            e.intentarRegistrar();
                                          },
                                        },
                                      },
                                      [e._v("Registrarme")]
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-btn",
                              {
                                attrs: {
                                  small: "",
                                  flat: "",
                                  loading: e.cargando,
                                  color: "info",
                                },
                                on: {
                                  click: function (t) {
                                    e.irAlLogin();
                                  },
                                },
                              },
                              [e._v("Ya tengo una cuenta")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 3e3, bottom: !0 },
                    model: {
                      value: e.snackbarPassNoCoincide,
                      callback: function (t) {
                        e.snackbarPassNoCoincide = t;
                      },
                      expression: "snackbarPassNoCoincide",
                    },
                  },
                  [
                    e._v("\n    Las contraseñas no coinciden\n    "),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbarPassNoCoincide = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a("DialogoNegocioRegistrado", {
                  attrs: { mostrar: e.mostrar.dialogoNegocioRegistrado },
                  on: {
                    "cerrar-dialogo": function (t) {
                      e.redireccionarDespuesDeRegistro();
                    },
                  },
                }),
                e._v(" "),
                a("DialogoNegocioNoRegistrado", {
                  attrs: { mostrar: e.mostrar.dialogoNegocioNoRegistrado },
                  on: {
                    "cerrar-dialogo": function (t) {
                      e.mostrar.dialogoNegocioNoRegistrado = !1;
                    },
                  },
                }),
                e._v(" "),
                a("DialogoNegocioExistente", {
                  attrs: { mostrar: e.mostrar.dialogoNegocioExistente },
                  on: {
                    "cerrar-dialogo": function (t) {
                      e.mostrar.dialogoNegocioExistente = !1;
                    },
                  },
                }),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        h = a("VU/8")(m, f, !1, null, null, null);
      t.default = h.exports;
    },
    czUQ: function (e, t) {},
    d1G9: function (e, t) {},
    exYv: function (e, t, a) {
      e.exports = a.p + "img/estadistica.d676772.png";
    },
    fEbY: function (e, t, a) {
      e.exports = a.p + "img/ajustes.06556a3.png";
    },
    hBjW: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("sXai"),
        o = a("PiRI"),
        n = a("65o/"),
        i = a("8o1w"),
        s = a("NHnr"),
        c = a("JgzN"),
        l = {
          beforeMount: function () {
            var e = this;
            this.consultarDatosParaEscritorio(),
              s.EventBus.$emit("ponerTitulo", "Escritorio"),
              this.$nextTick(function () {
                e.$refs.graficaVentasAnio.agregarAnio(n.a.esteAnioComoCadena()),
                  e.$refs.graficaVentasMes.setAnioYMes(
                    n.a.esteAnioComoCadena(),
                    n.a.esteMesComoCadena()
                  );
              });
          },
          data: function () {
            return { reporteCaja: {}, productosMasVendidos: [] };
          },
          methods: {
            consultarDatosParaEscritorio: function () {
              var e = this,
                t = new Date(),
                a = n.a.componerFechaParaInicio(n.a.formatearFecha(t)),
                r = n.a.componerFechaParaFin(n.a.formatearFecha(t));
              i.b
                .get("reporte/caja/" + a + "/" + r)
                .then(function (t) {
                  e.reporteCaja = t;
                })
                .then(function () {
                  return i.b
                    .get("productos/mas/vendidos/" + a + "/" + r)
                    .then(function (t) {
                      e.productosMasVendidos = t;
                    });
                });
            },
          },
          components: {
            Publicidad: a("nBfo").a,
            VentasMes: r.a,
            VentasAnio: o.a,
            ProductosMasVendidos: c.a,
          },
        },
        d = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-container",
              { attrs: { fluid: "", "grid-list-lg": "" } },
              [
                a(
                  "v-layout",
                  { attrs: { row: "", wrap: "" } },
                  [
                    a(
                      "v-flex",
                      { attrs: { xs12: "", sm6: "", md3: "" } },
                      [
                        a(
                          "v-card",
                          { attrs: { color: "blue lighten-2", dark: "" } },
                          [
                            a("v-card-title", [
                              a(
                                "h1",
                                { staticClass: "headline" },
                                [
                                  e._v(
                                    "\n            " +
                                      e._s(
                                        e._f("currency")(
                                          e.reporteCaja.VentasContado
                                        )
                                      ) +
                                      "\n            "
                                  ),
                                  a(
                                    "v-icon",
                                    {
                                      staticClass: "icono-tarjeta",
                                      attrs: { color: "blue lighten-5" },
                                    },
                                    [e._v("attach_money")]
                                  ),
                                ],
                                1
                              ),
                            ]),
                            e._v(" "),
                            a("v-card-text", [
                              a("p", { staticClass: "title" }, [
                                e._v("Vendido al contado"),
                              ]),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-flex",
                      { attrs: { xs12: "", sm6: "", md3: "" } },
                      [
                        a(
                          "v-card",
                          { attrs: { color: "indigo lighten-2", dark: "" } },
                          [
                            a("v-card-title", [
                              a(
                                "h1",
                                { staticClass: "headline" },
                                [
                                  e._v(
                                    "\n            " +
                                      e._s(
                                        e._f("currency")(
                                          e.reporteCaja.Anticipos +
                                            e.reporteCaja.Abonos
                                        )
                                      ) +
                                      "\n            "
                                  ),
                                  a(
                                    "v-icon",
                                    {
                                      staticClass: "icono-tarjeta",
                                      attrs: { color: "indigo lighten-5" },
                                    },
                                    [e._v("credit_card")]
                                  ),
                                ],
                                1
                              ),
                            ]),
                            e._v(" "),
                            a("v-card-text", [
                              a("p", { staticClass: "title" }, [
                                e._v("Anticipos y abonos"),
                              ]),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-flex",
                      { attrs: { xs12: "", sm6: "", md3: "" } },
                      [
                        a(
                          "v-card",
                          { attrs: { color: "amber lighten-1", dark: "" } },
                          [
                            a("v-card-title", [
                              a(
                                "h1",
                                { staticClass: "headline" },
                                [
                                  e._v(
                                    "\n            " +
                                      e._s(
                                        e._f("currency")(e.reporteCaja.Ingresos)
                                      ) +
                                      "\n            "
                                  ),
                                  a(
                                    "v-icon",
                                    {
                                      staticClass: "icono-tarjeta",
                                      attrs: { color: "amber lighten-5" },
                                    },
                                    [e._v("trending_up")]
                                  ),
                                ],
                                1
                              ),
                            ]),
                            e._v(" "),
                            a("v-card-text", [
                              a("p", { staticClass: "title" }, [
                                e._v("Entradas de efectivo"),
                              ]),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-flex",
                      { attrs: { xs12: "", sm6: "", md3: "" } },
                      [
                        a(
                          "v-card",
                          { attrs: { color: "red darken-1", dark: "" } },
                          [
                            a("v-card-title", [
                              a(
                                "h1",
                                { staticClass: "headline" },
                                [
                                  e._v(
                                    "\n            " +
                                      e._s(
                                        e._f("currency")(e.reporteCaja.Egresos)
                                      ) +
                                      "\n            "
                                  ),
                                  a(
                                    "v-icon",
                                    {
                                      staticClass: "icono-tarjeta",
                                      attrs: { color: "red lighten-5" },
                                    },
                                    [e._v("trending_down")]
                                  ),
                                ],
                                1
                              ),
                            ]),
                            e._v(" "),
                            a("v-card-text", [
                              a("p", { staticClass: "title" }, [
                                e._v("Salidas de efectivo"),
                              ]),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a("v-flex", { attrs: { xs12: "" } }, [a("Publicidad")], 1),
                    e._v(" "),
                    a(
                      "v-flex",
                      { attrs: { xs12: "", sm12: "", md6: "" } },
                      [
                        a(
                          "v-card",
                          [
                            a(
                              "v-card-text",
                              [
                                a("ventas-mes", {
                                  ref: "graficaVentasMes",
                                  staticStyle: { "max-height": "400px" },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-flex",
                      { attrs: { xs12: "", sm12: "", md6: "" } },
                      [
                        a(
                          "v-card",
                          [
                            a(
                              "v-card-text",
                              [
                                a("ventas-anio", {
                                  ref: "graficaVentasAnio",
                                  staticStyle: { "max-height": "400px" },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-flex",
                      { attrs: { xs12: "", sm4: "" } },
                      [
                        a(
                          "v-card",
                          [
                            a("v-card-title", [
                              a("h1", { staticClass: "headline" }, [
                                e._v("Productos más vendidos"),
                              ]),
                            ]),
                            e._v(" "),
                            a(
                              "v-card-text",
                              [
                                a("productos-mas-vendidos", {
                                  attrs: { productos: e.productosMasVendidos },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-flex",
                      { attrs: { xs12: "", sm4: "" } },
                      [
                        a(
                          "v-card",
                          [
                            a("v-card-title", [
                              a("h1", { staticClass: "headline" }, [
                                e._v("Clientes frecuentes"),
                              ]),
                            ]),
                            e._v(" "),
                            a("v-card-text", [e._v(" Muy pronto... ")]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-flex",
                      { attrs: { xs12: "", sm4: "" } },
                      [
                        a(
                          "v-card",
                          [
                            a("v-card-title", [
                              a("h1", { staticClass: "headline" }, [
                                e._v("Top cajeros"),
                              ]),
                            ]),
                            e._v(" "),
                            a("v-card-text", [e._v(" Muy pronto... ")]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var u = a("VU/8")(
        l,
        d,
        !1,
        function (e) {
          a("lOq8");
        },
        null,
        null
      );
      t.default = u.exports;
    },
    herx: function (e, t) {},
    i4aQ: function (e, t, a) {
      e.exports = a.p + "img/monedas.cc6526e.png";
    },
    iGE7: function (e, t) {},
    "jx+G": function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("8o1w"),
        o = a("NHnr"),
        n = {
          computed: {
            numeroDePaginas: function () {
              return null == this.paginacion.conteoProductos
                ? 0
                : Math.ceil(
                    this.paginacion.conteoProductos / this.paginacion.limite
                  );
            },
          },
          beforeMount: function () {
            this.obtener(),
              o.EventBus.$emit("ponerTitulo", "Productos en stock");
          },
          watch: {
            paginacion: {
              handler: function () {
                this.obtener();
              },
              deep: !0,
            },
          },
          methods: {
            obtener: function () {
              var e = this;
              this.cargando = !0;
              var t =
                this.paginacion.pagina > 1
                  ? (this.paginacion.pagina - 1) * this.paginacion.limite
                  : 0;
              r.b
                .get("productos/stock/" + t + "/" + this.paginacion.limite)
                .then(function (t) {
                  (e.productos = t.Productos),
                    (e.paginacion.conteoProductos = t.Conteo),
                    (e.cargando = !1);
                });
            },
          },
          data: function () {
            return {
              cargando: !1,
              paginacion: {
                offset: 0,
                limite: 20,
                conteoProductos: 0,
                pagina: 1,
              },
              productos: [],
              encabezados: [
                { text: "#", align: "left", value: "Numero" },
                {
                  text: "Código de barras",
                  align: "left",
                  value: "CodigoBarras",
                },
                { text: "Descripción", value: "Descripcion" },
                { text: "Existencia", value: "Existencia" },
                { text: "Stock", value: "Stock" },
                { text: "Diferencia", value: "Diferencia", sortable: !1 },
              ],
            };
          },
        },
        i = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                a("v-flex", { attrs: { xs12: "" } }, [
                  a(
                    "div",
                    { staticClass: "text-xs-center pt-2" },
                    [
                      a("v-pagination", {
                        attrs: { length: e.numeroDePaginas },
                        model: {
                          value: e.paginacion.pagina,
                          callback: function (t) {
                            e.$set(e.paginacion, "pagina", t);
                          },
                          expression: "paginacion.pagina",
                        },
                      }),
                    ],
                    1
                  ),
                ]),
                e._v(" "),
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a(
                      "v-data-table",
                      {
                        staticClass: "elevation-1",
                        attrs: {
                          loading: e.cargando,
                          headers: e.encabezados,
                          items: e.productos,
                          "hide-actions": "",
                        },
                        scopedSlots: e._u([
                          {
                            key: "items",
                            fn: function (t) {
                              return [
                                a("td", [e._v(e._s(t.item.Numero))]),
                                e._v(" "),
                                a("td", [e._v(e._s(t.item.CodigoBarras))]),
                                e._v(" "),
                                a("td", [e._v(e._s(t.item.Descripcion))]),
                                e._v(" "),
                                a("td", [e._v(e._s(t.item.Existencia))]),
                                e._v(" "),
                                a("td", [e._v(e._s(t.item.Stock))]),
                                e._v(" "),
                                a("td", [
                                  a("strong", [
                                    e._v(
                                      e._s(t.item.Stock - t.item.Existencia)
                                    ),
                                  ]),
                                ]),
                              ];
                            },
                          },
                        ]),
                      },
                      [
                        a(
                          "template",
                          { slot: "no-data" },
                          [
                            a(
                              "v-alert",
                              { attrs: { value: !0, color: "success" } },
                              [
                                a(
                                  "div",
                                  { staticClass: "text-xs-center" },
                                  [
                                    a("h1", [
                                      e._v("No hay productos en stock"),
                                    ]),
                                    e._v(" "),
                                    a(
                                      "v-icon",
                                      { staticClass: "icono-grande" },
                                      [e._v("tag_faces")]
                                    ),
                                    e._v(" "),
                                    a("p", [
                                      e._v(
                                        "La existencia de los productos está en los niveles óptimos"
                                      ),
                                    ]),
                                  ],
                                  1
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      2
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        s = a("VU/8")(n, i, !1, null, null, null);
      t.default = s.exports;
    },
    jxSC: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaUAAADICAYAAABIz/6eAAAABmJLR0QA/wD/AP+gvaeTAAAACW9GRnMAAAIKAAAAdQC+ZgkyAAAACXBIWXMAAABIAAAASABGyWs+AAAACXZwQWcAAAW6AAACmwBtiiUCAAAiAklEQVR42u3dd5xdVbk+8OdZCQEFxBoBQZo0URSRToiRmiIiYRQFEeVSFFBBuajovVT9iYIFEEEUUUIbAgIpEPBHmVCVEpoiiBQRUAhIEoGU9dw/9h6YTKbsds4+c+b5fj7zMZ6zy9qbmf3uvde73gWYmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZtRLW3YCqdVzSMSKuNv9zAL8NYJ0Cm1hAoEtQ59TtZ54LQnUfk5nZcNFWQanjlo43xCULrgSwUyUbFP4QoImdO8z8V93HZmY2HIS6G1AlLfnPb1BVQAIAYosl5LTxM8YvX/exmZkNB20TlDq6Jm4uaK+qt0tgyxXfxP3rPj4zs+GgbYLSEsSORm1bwufrPj4zs+GgbYISwTUbuPkPd1zSMaLuYzQza3dtE5RAPNXArY/AqvM3rPsQzczaXdsEJULXN3L7Edy47mM0M2t3bROULt1+5kwC1zZq+yIclMzMGqxtghIAcET4PIAHG7JtOCiZmTVaWwWlzm2nPRWeXnFTED+C8O+KN//euo/PzKzdtVVFh6UI7Ogav7E4YnS/iyhuBuLUjFtcJOCWug9rqCEkkI8F4ied2824p+72mFlra9+glMGe149fgyP5ZN3tGCZeFXDgZWNm/LbuhphZ6xrWQQkAJndNmA9gxbrbMVwQYdylY6bdUHc7zKw1tVWfUkH31d2A4USIP6i7DWbWuhyUgAfqbsAw8+GP37hLI6tvmNkQNrLuBrSAhqSQW/8CRqwPIG9f3rsB7ADgHSGEdwB4p6Q1AHwQwFMAniD5bIzxSQCPAHgMwD0AXqn7eIeI9QFsC2B0COGdAFaXtC6AdwB4kOQTMcZnADyL5EbuDgCLamzvKABjAawH4O0hhNEAVk3bvDqAh0g+DeDpGONfATwK4C/p/zbbhgDWALAqgNVDCGtKWg/AJmk7H4sx/h3AP9Jze2fN57ZWDkriA6Dn8WumELgg46LLAdguhLC3pIO7P5SW+e81GsBmkkAu1U06R9JpAKYCeLFks3cLIUwYZBkBeBXAqzHGhd3/BrAw/Xk5/XkJwLz059/p/59f/Zke1PIAdggh7CtpvwHO77p9nNu7Jf0WwCwkN3bN+iNaA8AkkocA+MAAbV6t+7Oe7SZ5ZozxXAB/bHCb3wJgJ5L7Ati95xe92rrWAOf2WiRBalhdoIZ9ooMz8JovSKMHmThxJIB9SH4RwFYV7PJJSccAuAjF70APIHlOA0/LAySvijHeBuAPSO6aG+njJI9Djwt7USR/HmM8GklwbZQNQwhfkvTlKjZG8vwY4/EAHq64nZuHEPaUdDiAlSto54Uxxm8AeKLidrasYR+UAGfgNdm8qWNmvGmA79cIIZwi6ZMN2Pc1kr6GYv2IjQ5KSyH5ixhjJ4AbUO2rnOUBHJ0GpCrdmD7NPlTxdgOAT5E8HcBbK942JB0J4HSUP8erhBCOSm9+qvZPSUcDOB/A4gZsv6U40SHhDLwmUfJevz8TSd7SoIAEALuSnAlgy7rPw2AkHUhyFskrAWxd0WZXI3lhAwISAIwleROAPSrc5ltDCGeTvAANCEgAQPLUEMKpAN5QYjPvIXltgwISAIwmeW4I4TQMgy4XB6WEM/CaRv29LtmX5DQAjc7MW5Pk7QB2qftMZLQbyVtDCCciecopakWSnQA+0cC2jiZ5OYCPV7CtN5OcKumABrYXACDpsBDCWSj2tmRDkr8DsEUT2nlICOE4tPl1u+2jbkaZM/AEPBsQ9q5qx0I8B0kGUc993BEQji653SMBfKzXxwuJsGtVbX99X0tOAfihbAuHvoLSDiSbWumB5DWStgFwWzP3W5SkY0IIa8UYvwJgbt71QwjfkrRdM9pK8kxJ9wL4W8FNLB9COE3SR5rRXgCQ9NkQwssxxsORJKVksVoahJtWrFnStwAsAPDdZu2z2RyUgFwZeATezre+4ZbOTTqz/uIOaHLXhGUy0QIwt2zVg8ld4z/dR5dhbEQ1hcldE1bJumxgfKTXRxuSvLHqNmVB8hJJO2HgV4otQ9K+JFdNX2++kGPVndKLWbOsRvKnkvZCkn2YB0MIJ0nat4ntBQBIOiiEMDfG+C0MnvE2MoTwI0lNnz2A5EmSngdwVrP33Qxt/RiYlZbEPK/vRiye+7KnsUil08SvnXV5hhE9n5Te0ewnpF7WJHkGktTzoWKntA9kRMbl30bypzW0cxKALxZY76A0GaUWkr4BYLDUfwA4UNKn6monyZ8DeF9d+28kByUAl42b+Xckj8SZBERPY5FavNqC9ZD9AomRC9kdlBhCOB1NeBc/iJ3Q2H6WyknaH8BXMy5+IGqaC4zk8UgG32Y1Jr3Y1orkdzBw4sM6JH9WdztDCPuV30rrcVB6XeYMPHpupddQXD/H4vMuHHfVc+m/t25gll2+YyC/jXJJBHW0+YcANhpksVVIHlFjM1cGkLn/NYRwaI1t7WkrDJCsEUL4Zt0NBABJRwFYq+52VM1B6TXMUW5Im9Td2lZB6j05Fn9tDEsI1SWLVOD9ACpPAGmCjkG+/ziSahe1IXkUgDdlWHSTOl+H9dHuQ9D3a93NJB1Yd/t62KfuBlTNQek1ytyvJNBPSq/L86TU/epujZIj8/8kaR9J20v6sKSOdHBlYSQPxRAbTJ5e8N/Wz9cjSR5WdNuS/kfSOElbpE+0dxbc1JoAsjwRTy55Lk6VNF7ShyTtJOlQJJUxihoL4CN9fF54KAHJEyVNSn9nx6fJJ6XGSJI8qMz6rchBqZuYJ9nhPWkHvyl7UJLYnXlXpg/nNkk7ArgAwM1ILpaXxhgPl7QVihfc3AXAhxtyipIL/BEkTyZ5MaqrerAy+h9YOw4F++skfRrACUiqSfwRQKek8QCuK7K99KljoIC/CsmvFz0Jkg6LMX4dwNUA7gbwewA/kzSWZNaZpZcRQvhMHx//SNJnkO+/4TRJG8QYvwNgOpLf2asBfE/SdpK+UrSNSF7fvb3E+i3HQSm1WIvyVAsfgXcu8NMSABDZX98xGThLsvDdpqTjATzdz9d3SCp6cbsPjetX+hWAH8cYj44x7i1pI0lrpwkLV5fc9qZ9fRhCsfFoaQf+RX189a8S53ZzAOsO8P2HULxO3NUAzkbfKdwvxxi/CeCWgtt+Bcsm8SwEcKGkbdLSP4MNDbk8LXbb36DxeQB+Kul/CrYRAN5VYt2W46CUumLsrCeRIwNvCTTsg1L6tLhu5hWSoBSQTJFQ1A2DfD8d+S5C0yXtIWlLALMbc6b69DiA8yRNIHlC0Y2Q7OtcjkjHCOUWYxwo+20OyfMLNnWgp7bCF1VJv8PAdesWSjolxybnpk+274kxfhHAkn6WewHAyZI2JvmLfpaZlxZmzTKm7IcA/lTwNKxR9Py1IgelpWXPwBvhDDysPi9PkgOWXzTyESQd70XrmN2JZOqHgSxMp6sYEMmz0lcnHwNwBeqbd0kxxu+ieJ/NJCz7lLEBimVlzcEgJbdijNcXaWQIYcwAX5e5qD6dYZnpGPxve46kgyVtgOTV5V8z7v/RGONBksYgmcbjNZJOQjLXVxYvkyz6RNdWGXiu6LAUPggoW/FLhcmTu8ZvJXCFkjtdr/cHArbcs2vCDSW3u0Efn42qYLuviULmSg54PR18sxK7fD7jctOQPIn0/mOdK+nHAC6QlPWi0wyvSDqL5NkF118DS99lF5qOguSVkuIgi/2xyLbTJ7cj0UeFhxDCun3Mh5TVYDcpAPCqpNP6Ob8zJP0CyWvAMjcmsyVNArBnWvB2QyT9npnFGB/qNa9SVm11HW+rgykvewZekhbOTRqUrvVWJtk/VQsN2m4W3R3Dq5fYxi4AVsDgF4/5kr7XYyDmfZJORzLZX9bA1mx3l1h3qYGeIYSti1zkY4xZOu+LJpKMRtJ3dGvvL6RSQyzenXG5TgDfQPq6OZ0a5Dwkr3qrmkRvEYCLJc1CUhUi7zxteUsydcv6NDYk+PVdT/ky8Cyf7o7e1UpuZ2LG5aaQnCJpzzQr72y0bkACgOdKrLtUUCpRyDRLwJmPXq+pcujrlfcKKNHHSPK/kC1B5UVJ/5v+bBRjPAhJ9mYjZnV9AcCUvCul09AX0egJIZvKQamHnBl4lgdfm7Ki1OykJL+HbHfH82OM+wK4HNle8dQtc5JNH97Y498rofhsspkubiTvKrLxEEJf05K8ggJVz3vYGsBRGZc9H8DxqH4iwkqkN09FZOlXGzIclHrIm4Fn2fUYo1T2VcP6JH+F7K9thooyRWF7vkUu8ySa6eIWY3ys4PbX6bPx5LUl2ow0e3HIDX7uZW0AOxZc16/v2pxnoW2E15+UqvgD2pHk1UhmOW2XQcxFx+kAS99IFQ1KdyL7PEL/KrIDSdv381XpqUNInp7OzDpUx+wUKrGU9puWncq9pTjRYRk5MvCAS6aOmVGqXtfkrglz0GsAJIGrLx0zY3y57Y4/C1imBMkrU8fMKDPt82s+fuMua44MI5/IuryWW6HKoAQAG6cTrF0u6QSUSxRoBWWe/Ob3+HehizLJB3MkRxTt/1oXSfCd1/PDGOPjBbPOliLpUJL7SfomgPN6nZdWtgXJ/1dkxRhj0XFjLctPSsvIk4HHYVuYdTmGDXIsPu/yrS7vTjJYhKQMTFU+QfKuEMLJKJ9EUZsQwvYlVu/5pFR0Ovk8Tz9l+oD66szPm6U2kJVJnk7yOiRJMa1+jduW5BUF152F4tUqWlar/wdruphjanRAGx+rY4flOVQI2QuxCn9e6v9KUytvj3QUyTuRzB9UydNgE71DUpkpJl57+gwhZK+w0UOM8d85Fi/T7/rmPj77A6oNTACwFclpIYSLALTizeOmIYQzSN6MgjdTks5CY7IHazUsL6gDiXFxnrTw8EDX7YPNadOusj8pcZm6Xxeh+osQkEzDfXbacb4zhkbH9wohhB+geJ/SNPTILpS0asHt5MmKLBOU+hps/oKkQq+vBpNWkL8/hHAc8k04WLWVkKTET0qD0RxJXyqxvYcAzKzxeBrGQamXvBl4YmjFu7DGy1EdHNQjvT55QdL3G9i67UjOCiGch3xTazTTKgD2JjlL0ueKbkTS7b0+WqngpublWLZMUOpvTNGFaMyNCoCkUjvJPwD4HJo3oeO+aQC6nuQ8kg+QvKpkMAKAf0raB0NjqENuDkp9uz/rgnH4FmbNfrGPoa8KyReggRchAJD0WZJ/AXAY6p1Z9v0AtkEyZcdhIYSTSd5H8kIAY8ptepladVkm1OtL1sw7oFw5nv7KcjX6RgUA1iL5a5LT0ITZo0MI66cB6CMVbvafkiageK3Elueg1KfslR3Ymu+rGyqtDp57yopeXihZrj/77snTSF6Sq83V7n8myVtIXkbytHQa66IJCT0tRFKVoKe3FdkQ+q+GXXbZ3gbq77sQ5Sbmy2onkg8AOABDKwO57QMS4KDUjzwZeMMvKC161/y1kWN8UBy1/CP9fHVemWkbcto9rUTwGbTJ7z3JkwH8s9fHhRIdACzOuXzRp9yBChjPlbQvitfXy4XkOSGEKRgaUz8Mi4AEtMkfZ9XyZeBho+GWgTdSOZIclk4H700xxuNLVMfOa2WSU0IIZ6Pv1OQhJcZ4Ya+PyryizPv0U3QM0GBV9f+STr+ep4+rMEmfTKeM+ARaNDGG5M8kvRfDICABDkp9ypuBd9/Nt25cd5ubSWLhdPA+LI4xHolkTqMmtV8HkLwGQ3hcE8kTsezN06gSmxxsyore/lNwP1mmerlTUkeJY8lrTZKXIZlao+VI+i8An8bQG+pQiINSH/LXwBsx3F7hlUkH78sCSfuQ/GETj+ED6YyhKzZxn1WZnk4M2FuZMSt5nxKKBsCsJXGukbQ1Bpl0sErp71/WKvTNNKpHv2iZqV+GhKHUydds9wPIVrVXuHhy14SLq9qxgN0md01oxKC4FRq03X4RmYISACyIMR4FoCut59WMp5iJIYRTYoyHolznfTPdkN4595UOXHQ+HiB/DcGiwTxPGvPtksaFEL4v6fMlji0zkhems8jOacb+cppEclqaDl506vSW5yelfnlupSr0qA6e1ZWStkWTXudJOhjAfzf9xBRzg6RPA3imn+/LFObMG5SKjofKm07+rxjjgWkgzpO2XtTKaap+qyY/bEZyKtqvSv5rHJT6lSsDz/rTdzr4YB6T9ClJR6IJFyKS3wWwedPPTb42/lLSZPQfkLoVvYPOG5RGF9xPkTFOSwD8Mn2dd13B/eaxcVoBolVtTPI3AN5ad0MawUGpHzkz8KwfYcSSIkEJSF5F/UjSxiTPbXg7QziguWcms4WSvhRjPBjZCqEWLZaaJyiVmS6kzMDbuyVNTF9fNTRtXNIXUHyyRABAjPHhtDjsxah+/NXYEEJLJmaU5aDUj5wZeNa3eZ3bXlOmojQAPBpjPEDSRwF0Naqhkr6I1hpzNk/StyStBeBMZO/zKppKnSUrrluZCQnLBCUgeXK+QNKWjR58HUL4QslNnB9jPDzGuHfa3lGSRkvaKA16pSp8SzoGvaa9aQcOSv3wLLTlqbrOWAG4XtIu6R9zQ6Z/DiE0pTO9H/MA/E7SNyWNk/QuAN/D4K/rlkKyaFDKk7jwxhzL9pan8OtAngdwQvokfVFF21yKpC8DqLLg8iIkU4Q8BOBcSTtI2obk6UU3GEL4SiOOvU7OvhtY9gw8W5Zwb8VbfAXJH/PMEMLhkr5VaXOlrwH4XzTmZuT3AOaTnI9kjM8LMcaHAfwNwGMAnkA1M4jmCmI9NCsoPVvBMfb05xjjPkiqgxwPYIuKt78jMOhYu6KWALgtxngbgLtI/irvBtKbtOOQ/P60BQelAfEBQA5KBTHEyxu06WdijMcAuJjksUhG41dlA1Q8i62kNyF9rZZjdtdCYoxPFJnFNYSwUoyZx8+WGdtVdVACkoG/V0vqArBfOrC4kiSAEMIHcpyXMs4luY2kAwus+zEAZzSjkc3g13cDEKKTHYp7KLxl5UZnSt0rqUNSlUFpwwa3udGKTjefZz6noung1yF/5Yg8FgA4U9KmJM+pYoOSJqFJ5YdijD8rsh7JjzWjfc3ioDQAeaxSUYtDREfnJp1F07kDgG2R7WKwBElfzEao4AknhDDUpyIp9PpOUp7Bym8vso90GpGiRiP7dClPxRgPqSgRYjUAa1WwnSwewLIFdrPYFUOzMkmfHJQG4Ay8InSXFLbqHDvjvgIrjwIwkeT0dJroPHeAD0n6FIr9Ub/eeg3517VF+5S2y7FsoRlcY4yPF1htbQDHkHwkTQjImiW4BMAJJKuY0bZZE0UuIjm94LrrNamNDec+pQFcMXbWk5O7JixAxrsQkd8N4rV1t7sOMSxeMGIJH+vcYea/Cqy+IpISKoejx8WR5A8l3Ywk0yqLhyUdSfL8EoeyC5ILX9nU5boUDcqjkbzCy5K9V3Ra8X/kWHaTEMJ+knpW29gFwP4Afp51IzHGE0l+BMDWBdsMFJ8OpIiiNxVDvup9NwelwWXOwAvSokvHTL+h7gYPIW8BsCfJryCZnbW39UMIR8cY85QBuhLA4yj+ymUuytWQq9vzAG5DsYvw6kjSlQcUQlinYMLGYCWnCGCLEMIBkg7qax8kfyJpFrIPnl0g6RySZYLSizmWDQC2BHA7ihXILfrKO884s5bm13eDytOvxFYafNnKVgNwBMkH0g7p9/e3YDpLa55XS/PS2mVFdaFcte3apdNyFLFOloUk7VJg2wsB9PdKdwSAj5K8hOTtkg4aYDujQggnIl9ViRsLno9uWTIGVwIwmeQskreieDWIojXtykxb0lL8pDQIIT7IjMk3ghyUBrYugH1Jfh05sr3S13g7IeP4oRjj40XSotN9/a3RaduNFmO8u+DxZ3lN9XYUyFBMq2/3/u+3PIBdSR6K5NVcJmlR2ssBdGZcpexg64GC0rsBfILkl9Hj/IUQ9okx3pN3R5KKzs32XMljbBl+UhpEzgy8DYfbLLQ5fJDkX0keh3zpx0DyKuqgHMsXvtmKMf69jpNTsfuLrBRCyHJ3X6hDPcY4u4/9nUbyCuQISN1I/gDFi8Lm1buflAC2DCH8iOTjJH+MXgFd0tcLnKtRKN731YjxX7Xwk9IgYlz8QAiZT1O4d/Yd++zVNenJutvdSMTixXh65Vs7P9mZZw6iB5HMUVPotQbJUyXdiqS/ZEAhhPeWeNppSAmjJns0/cnVQS9pfwBHY+A+lI8UbNMy6foxxmtJFhksCgBrhRC+H2M8CINXwiiTmTYXryfarAhgZ5KHANh1sN+xEMJnY4zH5tjXDiXaWSrrtJW05Jz0rWZy14T5aKNxAJUQHgP4naljpk8BM/fBHJxO4FfUw+lrvIFKqqxL8h7kfxpLDkvaFH33fRxQdEBmz4oOzRJCOFXSEQXaujuAq/r5ejmSdyN/4dpH03FkvYPHyiQfQYknnrQo6XcHWiaEcFLRklQkz4gxHpYe+xwAuV6vSdoVwKwMiy5P8vfI13/aba6ktxU6gS3Ir5qyKfQ6pK0Ra4P67eTZE67MsVbZifvWT+uD9TduZOV0SutCAQnADLTJf+sYY6GhCSSPRpIV2ZcDUaCSuqSz0PfTzDxJPy1znCRPAvBl9P/WZ/cyNRJjfK1U1iKSuRMmSF4FYDcM/AAwCskTapGABAA3FT2+VuSglIkrOwxg0uTZEw7JuOwzJH9Scn87kpwNoANL1zd7dzrxWeGSQ5LOxxDPvOvh/yNJjc9ru3Sc15o9PhsJ4Mski9ZXu3qA70rXRyT5kxDCOUieYrqD03IAOtI+q6L+hB4X/BjjzALbGEVyJsnLAOyMpcd4BQAbhhDOSftaC5HUVmMjHZQycA28QQjfyLpojPHsCvY4Ok0ffp7k7BDCxSQfB7BHiW0uxMAXz6HmVUmFaqkBmEDyCZJXhBB+RfL+EjcTv0f/qeAA8GCZqRu6SfocyQdJPhVCOC8dbnBJyW3+Aks/4d2E4uOI9kjTxf9J8rYQwi9JPkryz5I+W/Lwp5Y9f63EQSkD18Ab1Fq7z9599YzLPpj2A1RlO0mfLLsRkj8F8EJDzk59riq5/u6SPo8SRWolTcEgT58xxu+j+Iy5vY2WtB+qKQ00o9f/f5FkFTdVW6VTTpSuqZeWUWqbzDvAQSmTkQh+UhrE8liYpx/nTGSoHNBMMcaGTBRXsz+VfVooaS6ALAN5/y7pmzW2cxkkz0Ufv6Mxxl/U3bZe7bm47jZUzUEpg84x054A8Ne629HCXp7/Eh/LsfwLg4zabypJXwJwZ93taIQY4wl17VvS0che7+48klPqamsvdw9Q2upekrWd057SG4576m5H1RyUsqJa5Q+m5Qi4aOaEmXnrxd0k6eC6207y1wDOqrsdDXS/pMx9fhW6DsBvciz/aozxq6h4gsUi0vFa/VZIiDGegqSvrE5z0vPVdhyUMnrjgiUnJ2NzrJcFWFx43ppzqujkLuH2GOORaOzEc63gZ2jyk2Ba0SBvUsBzaUCoTbr/ewdZ7N/pk36R7MYqzJW0D9pjoPcyHJQy+u2usxZoicYAuKXutrQM8RFFTLhs3MyipXlijPG/SZ5ZQ+vnpZ3N7Zbc0N+x5qm0XkqayDKn4Or3StoGNVxw0xukrE93j6YJFU2X7rdtk69c0SGnY3VsuK/rjq8B2EnE8nW3pw5BWCJqyvOLX/7NDeNuWFzBJpcLIRxbZpBjTtekd/J5BsoOqYoO/ehodOIDyVNjjMeg/HxU70vbWrRAaS6SvoLkNW7e19Dj0r6wPDP3lmnn1wGc0ox9mQ13RFL6/x8k1agfAEcAhW4mDiixz6IVJhph67QwbiPO7aGo9kZ3tRDCrxv5+0DyOgDvK9nOjUne1eB23gNgYsXn18wyeHcI4fwG/FH/DsCmJdrVLkEJSOoD3lzhuX0JwI4NausIAPuQfLbi34dnkdygvKGidr4ZwGENaKcAfAfAmxr9S2Fm/QtIZiA9ieRLJf6g/4HkD/oDKH+HmTcoPUbymhDCuajuwlelNwKYEEK4qMT5/QuSunOrNqG9bwPwGZLXVXBz0oHG3Si8E8BXK3ga/SuAY9Ck15etxI+C1ureAmCbEMJ2kiZj8OoCt5GckxYknYXq+nL2J/kFkn8H8GyM8Tkkg0NfSH9eTH/+nf68XPeJy2F9ALuHELaStD0G7x/pknQmgGlofl8ZkcxUvA3JnQDsNcjyTwO4XdIf0vbeh+bUN1wRwI4hhPGSxiBjIVuSv4wxTkUyW+5/mtDOluOgZEPJSCQX0FWQTD+9MpLf4WeQXHyewdAKBq0oIJlddnUA70JSwfoFJAH4xfTf89E6hWtHA1gDr/8+rJi2s/v34bkWaeubkQT7VdJ2vhlJXb3nkZzb7p+8iRZtx0GpAfb4/fj1RizHnRmwuaJeZAi3LngpTi8wwLRWHTfuss6SsNzOBD5M4KWoeNuIkStN79y20xd+M2sIB6UKdcyesHMUjgAwvq/vSZ22aMmSH1wxdlZLz0y710277RgRjiAxsZ9FzggIJ6fll8zMKuOgVJHJXePPApitnpv0pak7zKxjwOjgx3HThDNBZJofSeChl42ZXnR6BDOzZTgoVWDy7AmnInlCykzipMt2mD697rb3tFfXxB8K+tpQPw4zG7pcZqikPW/YbYu8AQkAGNQSlYa7dXRN3DxvQGrF4zCzoc1BqawR4bBC6wmb7Xnj+E/V3fxukWqL4zCzoc1BqYSOWzreQKBwUUYG7l33MQDA+IfHLw9h/6F+HGY29DkolRDjvHElN7FH3ccAACs+i4+2w3GY2dDnoFSCED5QdhsdN41/b93HEcEPtsNxmNnQ56BUAsnS441GjULRuYiqO47YHsdhZkOfg1IJYXG4ucz6Au6YsvXMl2o/Di1qi+Mws6HPQamEzrFX/U3Q7KLrE7i87mNIjmPW3wB0DfXjMLOhz0GpNJ5ddM2Fi0cUmsm0IUfBcFbRdUe10HGY2dDmoFTSZWNm/BbgXfnX5LevGnfVc3W3v9ul20+bAuD6vOsp4jsXttBxmNnQ5qBUgRB0AICncqxy1dQx00+qu93LUPwqgDxJD9MuGzvjxLqbbWbtw0GpAp3bzbhnyeJR7wNwxiCLPknw0KljZuxed5v7MnWHq+9dYTm9T9Jpgyz6FIDDpo6Z8bG622xm7cUFWSu29427rLl45IhPQ9xVwhYA5gu6EeRVl20/44K625dVxy2T3hUXx88A2pWBW0j4D4gbETlt6g7Tz6+7fWZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZo33f1ESVDt5UFCwAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA4LTMxVDE5OjAwOjAzLTA1OjAw/ZxMcwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wOC0zMVQxOTowMDowMy0wNTowMIzB9M8AAAAASUVORK5CYII=";
    },
    k7mg: function (e, t, a) {
      e.exports = a.p + "img/escudo.2db8426.png";
    },
    kQNQ: function (e, t) {},
    kVtF: function (e, t, a) {
      e.exports = a.p + "img/tareas.ecd565c.png";
    },
    ke26: function (e, t) {},
    lOq8: function (e, t) {},
    mWXJ: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("woOf"),
        o = a.n(r),
        n = a("Xxa5"),
        i = a.n(n),
        s = a("exGp"),
        c = a.n(s),
        l = a("8o1w"),
        d = a("z4sG"),
        u = {
          props: ["mostrar", "producto", "idApartado"],
          watch: {
            mostrar: function (e) {
              e && this.obtenerModosLectura();
            },
          },
          data: function () {
            return {
              errores: {
                noEncontradoPorCodigoONumero: !1,
                precioDeVentaMenor: !1,
              },
              urlBase: "producto",
              cargando: !1,
              nuevoProducto: {},
              modoDeLectura: "",
              codigoONumero: "",
            };
          },
          computed: {
            etiquetaLectura: function () {
              return "" === this.modoDeLectura
                ? "Cargando..."
                : "codigo" === this.modoDeLectura
                ? "Leer el código de barras: "
                : "Leer el número de producto:";
            },
          },
          name: "DialogoCambiarProducto",
          components: { AutocompletadoProductos: a("psw5").a },
          methods: {
            resetearYEmitir: function () {
              (this.nuevoProducto = {}),
                (this.codigoONumero = ""),
                this.$emit("producto-cambiado");
            },
            confirmarCambio: function () {
              var e = this;
              l.b
                .get(
                  "cambiar/producto/apartado/" +
                    this.idApartado +
                    "/" +
                    this.producto.Numero +
                    "/" +
                    this.nuevoProducto.Numero
                )
                .then(function (t) {
                  !0 === t && e.resetearYEmitir();
                });
            },
            obtenerModosLectura: function () {
              var e = this;
              (this.cargando = !0),
                l.b.get("ajustes/otros").then(function (t) {
                  (e.modoDeLectura = t.ModoLecturaProductos),
                    "codigo" === e.modoDeLectura &&
                      (e.urlBase = "producto/codigo/barras"),
                    e.$nextTick(e.$refs.codigoProducto.focus),
                    (e.cargando = !1);
                });
            },
            buscarProductoPorCodigoONumero: function (e) {
              var t = this;
              "numero" === this.modoDeLectura &&
                ((e = Number(e)), isNaN(e) && (e = 0)),
                (this.cargando = !0),
                l.b.get(this.urlBase + "/" + e).then(function (e) {
                  (t.cargando = !1),
                    (t.codigoONumero =
                      "" +
                      "".toString() +
                      String.fromCharCode(Math.pow(2, 6) + 1).replace(
                        new RegExp(
                          "hola".substring(3, 4)[
                            [
                              116, 111, 85, 112, 112, 101, 114, 67, 97, 115,
                              101,
                            ].reduce(function (e, t) {
                              return e + String.fromCharCode(t);
                            }, "")
                          ](),
                          "g"
                        ),
                        ""
                      )),
                    null !== e
                      ? (t.onProductoSeleccionado(e),
                        (t.errores.noEncontradoPorCodigoONumero = !1))
                      : ((t.nuevoProducto = {}),
                        (t.errores.noEncontradoPorCodigoONumero = !0));
                });
            },
            onProductoSeleccionadoDesdeAutocompletado: function (e) {
              this.onProductoSeleccionado(e);
            },
            onProductoSeleccionado: function (e) {
              e.PrecioVenta >= this.producto.PrecioVenta
                ? ((this.errores.precioDeVentaMenor = !1),
                  (this.nuevoProducto = e))
                : ((this.errores.precioDeVentaMenor = !0),
                  (this.nuevoProducto = {}));
            },
            cerrarDialogo: function () {
              this.$emit("cerrar");
            },
          },
        },
        v = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-dialog",
              {
                attrs: { persistent: "", "max-width": "700" },
                model: {
                  value: e.mostrar,
                  callback: function (t) {
                    e.mostrar = t;
                  },
                  expression: "mostrar",
                },
              },
              [
                a(
                  "v-card",
                  [
                    a("v-card-title", { staticClass: "headline" }, [
                      e._v("Cambiar producto"),
                    ]),
                    e._v(" "),
                    a(
                      "v-card-text",
                      [
                        a(
                          "v-container",
                          { attrs: { fluid: "", "grid-list-md": "" } },
                          [
                            a(
                              "v-layout",
                              { attrs: { row: "", wrap: "" } },
                              [
                                a(
                                  "v-flex",
                                  { attrs: { xs12: "", sm6: "" } },
                                  [
                                    a(
                                      "v-alert",
                                      { attrs: { value: !0, type: "info" } },
                                      [
                                        a("h3", [e._v("Cambiar")]),
                                        e._v(" "),
                                        a("p", [
                                          a("strong", [e._v("Descripción:")]),
                                          e._v(
                                            " " +
                                              e._s(e.producto.Descripcion) +
                                              "\n                "
                                          ),
                                          a("br"),
                                          e._v(" "),
                                          a("strong", [e._v("Precio:")]),
                                          e._v(
                                            " " +
                                              e._s(
                                                e._f("currency")(
                                                  e.producto.PrecioVenta
                                                )
                                              ) +
                                              "\n              "
                                          ),
                                        ]),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                                e._v(" "),
                                a(
                                  "v-flex",
                                  { attrs: { xs12: "", sm6: "" } },
                                  [
                                    a(
                                      "v-alert",
                                      {
                                        attrs: {
                                          value: e.nuevoProducto.Numero,
                                          type: "success",
                                        },
                                      },
                                      [
                                        a("h3", [e._v("Por")]),
                                        e._v(" "),
                                        a("p", [
                                          a("strong", [e._v("Descripción:")]),
                                          e._v(
                                            " " +
                                              e._s(
                                                e.nuevoProducto.Descripcion
                                              ) +
                                              "\n                "
                                          ),
                                          a("br"),
                                          e._v(" "),
                                          a("strong", [e._v("Precio:")]),
                                          e._v(
                                            "\n                " +
                                              e._s(
                                                e._f("currency")(
                                                  e.nuevoProducto.PrecioVenta
                                                )
                                              ) +
                                              "\n              "
                                          ),
                                        ]),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        e._v(" "),
                        a(
                          "v-alert",
                          {
                            attrs: {
                              value: e.errores.precioDeVentaMenor,
                              type: "error",
                            },
                          },
                          [
                            e._v(
                              "\n        No puede seleccionar un producto con un precio menor al que desea\n        cambiar\n      "
                            ),
                          ]
                        ),
                        e._v(" "),
                        a(
                          "v-alert",
                          {
                            attrs: {
                              value: e.errores.noEncontradoPorCodigoONumero,
                              type: "error",
                            },
                          },
                          [
                            e._v(
                              "\n        No existe un producto con el código buscado. Intente de nuevo o busque\n        por descripción\n      "
                            ),
                          ]
                        ),
                        e._v(" "),
                        a("span", { staticClass: "body-2" }, [
                          e._v(e._s(e.etiquetaLectura)),
                        ]),
                        e._v(" "),
                        a(
                          "v-container",
                          [
                            a(
                              "v-layout",
                              [
                                a(
                                  "v-flex",
                                  { attrs: { xs12: "" } },
                                  [
                                    a("v-text-field", {
                                      ref: "codigoProducto",
                                      attrs: {
                                        solo: "",
                                        readonly: e.cargando,
                                        label:
                                          "Escanear, o escribir y presionar Enter",
                                        loading: e.cargando,
                                        type: "text",
                                      },
                                      on: {
                                        keyup: function (t) {
                                          if (
                                            !("button" in t) &&
                                            e._k(
                                              t.keyCode,
                                              "enter",
                                              13,
                                              t.key,
                                              "Enter"
                                            )
                                          )
                                            return null;
                                          e.buscarProductoPorCodigoONumero(
                                            e.codigoONumero
                                          );
                                        },
                                      },
                                      model: {
                                        value: e.codigoONumero,
                                        callback: function (t) {
                                          e.codigoONumero = t;
                                        },
                                        expression: "codigoONumero",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        e._v(" "),
                        a("br"),
                        e._v(" "),
                        a("span", { staticClass: "body-2" }, [
                          e._v("O buscar por su descripción"),
                        ]),
                        e._v(" "),
                        a("autocompletado-productos", {
                          on: {
                            "producto-seleccionado":
                              e.onProductoSeleccionadoDesdeAutocompletado,
                          },
                        }),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-card-actions",
                      [
                        a("v-spacer"),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: {
                              disabled: !e.nuevoProducto.Numero,
                              loading: e.cargando,
                              color: "green darken-1",
                              flat: "flat",
                            },
                            nativeOn: {
                              click: function (t) {
                                e.confirmarCambio();
                              },
                            },
                          },
                          [e._v("Confirmar cambio\n      ")]
                        ),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: { color: "gray", flat: "flat" },
                            nativeOn: {
                              click: function (t) {
                                e.cerrarDialogo();
                              },
                            },
                          },
                          [e._v("Cerrar")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        p = {
          props: ["apartado", "mostrar"],
          components: {
            DialogoCambiarProducto: a("VU/8")(u, v, !1, null, null, null)
              .exports,
          },
          methods: {
            onProductoCambiado: function () {
              (this.dialogos.buscarProductoParaIntercambiar = !1),
                this.refrescarProductos();
            },
            refrescarProductos: function () {
              var e = this;
              l.b
                .get("productos/apartado/" + this.apartado.IdApartado)
                .then(function (t) {
                  (e.apartado.Monto = t.reduce(
                    function (e, t) {
                      return { PrecioVenta: e.PrecioVenta + t.PrecioVenta };
                    },
                    { PrecioVenta: 0 }
                  ).PrecioVenta),
                    (e.apartado.Utilidad = t.reduce(
                      function (e, t) {
                        return {
                          PrecioVenta:
                            e.PrecioVenta -
                            e.PrecioCompra +
                            (t.PrecioVenta - t.PrecioCompra),
                        };
                      },
                      { PrecioVenta: 0, PrecioCompra: 0 }
                    ).PrecioVenta),
                    (e.apartado.productos = t);
                });
            },
            ocultarDialogo: function () {
              this.$emit("cerrar");
            },
            cambiarProducto: function (e) {
              (this.productoParaIntercambiar = e),
                (this.idApartadoParaCambiar = this.apartado.IdApartado),
                (this.dialogos.buscarProductoParaIntercambiar = !0);
            },
          },
          data: function () {
            return {
              productoParaIntercambiar: {},
              idApartadoParaCambiar: 0,
              dialogos: { buscarProductoParaIntercambiar: !1 },
              encabezadosProductos: [
                { text: "#", value: "Numero" },
                { text: "Código de Barras", value: "CodigoBarras" },
                { text: "Descripción", value: "Descripcion" },
                {
                  text: "Precio de venta original",
                  value: "PrecioVentaOriginal",
                },
                { text: "Precio de venta", value: "PrecioVenta" },
                { text: "Precio de compra", value: "PrecioCompra" },
                { text: "Utilidad", value: "Utilidad", sortable: !1 },
                { text: "Cantidad", value: "Cantidad" },
                { text: "Total", value: "Total" },
                { text: "Opciones", sortable: !1 },
              ],
            };
          },
        },
        m = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-container",
              [
                a("dialogo-cambiar-producto", {
                  attrs: {
                    producto: e.productoParaIntercambiar,
                    idApartado: e.idApartadoParaCambiar,
                    mostrar: e.dialogos.buscarProductoParaIntercambiar,
                  },
                  on: {
                    cerrar: function (t) {
                      e.dialogos.buscarProductoParaIntercambiar = !1;
                    },
                    "producto-cambiado": e.onProductoCambiado,
                  },
                }),
                e._v(" "),
                a(
                  "v-dialog",
                  {
                    model: {
                      value:
                        e.mostrar && !e.dialogos.buscarProductoParaIntercambiar,
                      callback: function (t) {
                        e.$set(
                          e.mostrar && !e.dialogos,
                          "buscarProductoParaIntercambiar",
                          t
                        );
                      },
                      expression:
                        "mostrar && !dialogos.buscarProductoParaIntercambiar",
                    },
                  },
                  [
                    a(
                      "v-card",
                      [
                        a("v-card-title", { staticClass: "headline" }, [
                          e._v("Productos apartados"),
                        ]),
                        e._v(" "),
                        a(
                          "v-card-text",
                          [
                            a("v-data-table", {
                              attrs: {
                                headers: e.encabezadosProductos,
                                items: e.apartado.productos,
                                "hide-actions": "",
                                "item-key": "Numero",
                              },
                              scopedSlots: e._u([
                                {
                                  key: "items",
                                  fn: function (t) {
                                    return [
                                      a("tr", [
                                        a("td", [e._v(e._s(t.item.Numero))]),
                                        e._v(" "),
                                        a("td", [
                                          e._v(e._s(t.item.CodigoBarras)),
                                        ]),
                                        e._v(" "),
                                        a("td", [
                                          e._v(e._s(t.item.Descripcion)),
                                        ]),
                                        e._v(" "),
                                        a("td", [
                                          e._v(
                                            e._s(
                                              e._f("currency")(
                                                t.item.PrecioVentaOriginal
                                              )
                                            )
                                          ),
                                        ]),
                                        e._v(" "),
                                        a("td", [
                                          e._v(
                                            e._s(
                                              e._f("currency")(
                                                t.item.PrecioVenta
                                              )
                                            )
                                          ),
                                        ]),
                                        e._v(" "),
                                        a("td", [
                                          e._v(
                                            e._s(
                                              e._f("currency")(
                                                t.item.PrecioCompra
                                              )
                                            )
                                          ),
                                        ]),
                                        e._v(" "),
                                        a("td", [
                                          a("strong", [
                                            e._v(
                                              e._s(
                                                e._f("currency")(
                                                  t.item.PrecioVenta -
                                                    t.item.PrecioCompra
                                                )
                                              )
                                            ),
                                          ]),
                                        ]),
                                        e._v(" "),
                                        a("td", [e._v(e._s(t.item.Cantidad))]),
                                        e._v(" "),
                                        a("td", [
                                          e._v(
                                            "\n                " +
                                              e._s(
                                                e._f("currency")(
                                                  t.item.PrecioVenta *
                                                    t.item.Cantidad
                                                )
                                              ) +
                                              "\n              "
                                          ),
                                        ]),
                                        e._v(" "),
                                        a(
                                          "td",
                                          {
                                            staticClass:
                                              "justify-center layout px-0",
                                          },
                                          [
                                            a(
                                              "v-btn",
                                              {
                                                staticClass: "mx-0",
                                                attrs: {
                                                  title: "Cambiar producto",
                                                  icon: "",
                                                },
                                                on: {
                                                  click: function (a) {
                                                    e.cambiarProducto(t.item);
                                                  },
                                                },
                                              },
                                              [
                                                a(
                                                  "v-icon",
                                                  { attrs: { color: "error" } },
                                                  [e._v("find_replace")]
                                                ),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                      ]),
                                    ];
                                  },
                                },
                              ]),
                            }),
                          ],
                          1
                        ),
                        e._v(" "),
                        a(
                          "v-card-actions",
                          [
                            a("v-spacer"),
                            e._v(" "),
                            a(
                              "v-btn",
                              {
                                attrs: {
                                  color: "green darken-1",
                                  flat: "flat",
                                },
                                nativeOn: {
                                  click: function (t) {
                                    e.ocultarDialogo();
                                  },
                                },
                              },
                              [e._v("Cerrar")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        f = a("VU/8")(p, m, !1, null, null, null).exports,
        h = a("65o/"),
        g = {
          props: ["mostrar", "apartado"],
          created: function () {
            this.obtenerAbonos();
          },
          computed: {
            estaVencido: function () {
              return (
                !this.apartado.FechaVencimiento ||
                new Date(this.apartado.FechaVencimiento).getTime() <
                  new Date().getTime()
              );
            },
            totalAbonado: function () {
              return this.abonos.reduce(
                function (e, t) {
                  return { Monto: e.Monto + t.Monto };
                },
                { Monto: 0 }
              ).Monto;
            },
            restante: function () {
              return (
                this.apartado.Monto - this.apartado.Anticipo - this.totalAbonado
              );
            },
            cambio: function () {
              return this.pago >= 0 && this.cantidadAbonada >= 0
                ? this.pago - this.cantidadAbonada
                : 0;
            },
          },
          watch: {
            mostrar: function (e) {
              e &&
                (this.obtenerAbonos(),
                this.$nextTick(this.$refs.inputPago.focus));
            },
          },
          data: function () {
            return {
              cargandoAbonando: !1,
              cantidadAbonada: 0,
              pago: 0,
              abonos: [],
              encabezados: [
                { text: "Monto", value: "Monto" },
                { text: "Fecha", value: "Fecha" },
                { text: "Usuario", value: "Usuario", sortable: !1 },
                { text: "Opciones", value: "Opciones", sortable: !1 },
              ],
            };
          },
          methods: {
            ocultarDialogo: function () {
              this.$emit("cerrar");
            },
            obtenerAbonos: function () {
              var e = this;
              this.apartado.IdApartado &&
                l.b
                  .get(
                    "abonos/apartado/" +
                      encodeURIComponent(this.apartado.IdApartado)
                  )
                  .then(function (t) {
                    e.abonos = t;
                  });
            },
            imprimir: function (e, t) {
              var a = this;
              return c()(
                i.a.mark(function r() {
                  return i.a.wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (a.next = 2), h.a.imprimirTicketAbono(e, t);
                          case 2:
                          case "end":
                            return a.stop();
                        }
                    },
                    r,
                    a
                  );
                })
              )();
            },
            abonar: function () {
              var e = this;
              return c()(
                i.a.mark(function t() {
                  var a;
                  return i.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (!(e.cantidadAbonada <= 0)) {
                              t.next = 2;
                              break;
                            }
                            return t.abrupt(
                              "return",
                              e.$emit("cantidadNegativa")
                            );
                          case 2:
                            if (!(e.cantidadAbonada > e.restante)) {
                              t.next = 4;
                              break;
                            }
                            return t.abrupt(
                              "return",
                              e.$emit("cantidadSuperior")
                            );
                          case 4:
                            return (
                              (e.cargandoAbonando = !0),
                              (t.next = 7),
                              l.b.put("abono", {
                                IdApartado: e.apartado.IdApartado,
                                Monto: e.cantidadAbonada,
                                Pago: e.pago,
                              })
                            );
                          case 7:
                            return (
                              (a = t.sent),
                              console.log({ resultados: a }),
                              (e.cargandoAbonando = !1),
                              e.cantidadAbonada === e.restante &&
                                e.$emit("liquidar"),
                              e.$emit("abonado"),
                              (e.cantidadAbonada = 0),
                              e.obtenerAbonos(),
                              (t.next = 16),
                              h.a.imprimirTicketAbono(a, e.apartado.IdApartado)
                            );
                          case 16:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    e
                  );
                })
              )();
            },
          },
        },
        b = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-dialog",
              {
                attrs: { persistent: "" },
                model: {
                  value: e.mostrar,
                  callback: function (t) {
                    e.mostrar = t;
                  },
                  expression: "mostrar",
                },
              },
              [
                a(
                  "v-card",
                  [
                    a("v-card-title", { staticClass: "headline" }, [
                      e._v(
                        "Abonos del apartado #" + e._s(e.apartado.IdApartado)
                      ),
                    ]),
                    e._v(" "),
                    a(
                      "v-card-text",
                      [
                        a(
                          "v-layout",
                          { attrs: { row: "", wrap: "" } },
                          [
                            a(
                              "v-flex",
                              { attrs: { xs12: "" } },
                              [
                                a(
                                  "v-alert",
                                  {
                                    attrs: {
                                      value: e.estaVencido && e.restante > 0,
                                      type: "error",
                                    },
                                  },
                                  [
                                    e._v(
                                      "\n            Este apartado está vencido y no se pueden realizar más abonos\n          "
                                    ),
                                  ]
                                ),
                                e._v(" "),
                                a(
                                  "v-alert",
                                  {
                                    attrs: {
                                      value: e.restante <= 0,
                                      type: "success",
                                    },
                                  },
                                  [
                                    e._v(
                                      "\n            Este apartado ha sido liquidado\n          "
                                    ),
                                  ]
                                ),
                                e._v(" "),
                                a("v-text-field", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: e.restante > 0 && !e.estaVencido,
                                      expression:
                                        "restante > 0 && !estaVencido",
                                    },
                                  ],
                                  ref: "inputPago",
                                  attrs: {
                                    "prepend-icon": "monetization_on",
                                    label: "Pago del cliente",
                                    type: "text",
                                    hint: "Cantidad que da el cliente",
                                    required: "",
                                  },
                                  on: {
                                    keyup: function (t) {
                                      if (
                                        !("button" in t) &&
                                        e._k(
                                          t.keyCode,
                                          "enter",
                                          13,
                                          t.key,
                                          "Enter"
                                        )
                                      )
                                        return null;
                                      t.preventDefault(), e.abonar();
                                    },
                                  },
                                  model: {
                                    value: e.pago,
                                    callback: function (t) {
                                      e.pago = e._n(t);
                                    },
                                    expression: "pago",
                                  },
                                }),
                                e._v(" "),
                                a("v-text-field", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: e.restante > 0 && !e.estaVencido,
                                      expression:
                                        "restante > 0 && !estaVencido",
                                    },
                                  ],
                                  ref: "inputAbono",
                                  attrs: {
                                    "prepend-icon": "monetization_on",
                                    label: "Cantidad a abonar",
                                    type: "text",
                                    hint: "Del pago del cliente, ¿Cuánto se abona?",
                                    required: "",
                                  },
                                  on: {
                                    keyup: function (t) {
                                      if (
                                        !("button" in t) &&
                                        e._k(
                                          t.keyCode,
                                          "enter",
                                          13,
                                          t.key,
                                          "Enter"
                                        )
                                      )
                                        return null;
                                      t.preventDefault(), e.abonar();
                                    },
                                  },
                                  model: {
                                    value: e.cantidadAbonada,
                                    callback: function (t) {
                                      e.cantidadAbonada = e._n(t);
                                    },
                                    expression: "cantidadAbonada",
                                  },
                                }),
                                e._v(" "),
                                a("v-flex", { attrs: { xs12: "" } }, [
                                  a("p", { staticClass: "title" }, [
                                    e._v(
                                      "Pago: " + e._s(e._f("currency")(e.pago))
                                    ),
                                  ]),
                                  e._v(" "),
                                  a("p", { staticClass: "title" }, [
                                    e._v(
                                      "Abono: " +
                                        e._s(
                                          e._f("currency")(e.cantidadAbonada)
                                        )
                                    ),
                                  ]),
                                  e._v(" "),
                                  a(
                                    "p",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: e.cambio >= 0,
                                          expression: "cambio >= 0",
                                        },
                                      ],
                                      staticClass: "title",
                                    },
                                    [
                                      e._v(
                                        "\n              Cambio: " +
                                          e._s(e._f("currency")(e.cambio)) +
                                          "\n            "
                                      ),
                                    ]
                                  ),
                                  e._v(" "),
                                  a(
                                    "p",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: e.cambio >= 0,
                                          expression: "cambio >= 0",
                                        },
                                      ],
                                      staticClass: "title",
                                    },
                                    [
                                      e._v(
                                        "\n              Restante: " +
                                          e._s(
                                            e._f("currency")(
                                              e.restante - e.cantidadAbonada
                                            )
                                          ) +
                                          "\n            "
                                      ),
                                    ]
                                  ),
                                ]),
                              ],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-flex",
                              { attrs: { xs12: "" } },
                              [
                                a(
                                  "v-btn",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: e.cantidadAbonada > 0,
                                        expression: "cantidadAbonada > 0",
                                      },
                                    ],
                                    attrs: {
                                      title:
                                        "Haga click aquí para realizar el abono",
                                      loading: e.cargandoAbonando,
                                      small: "",
                                      color: "success",
                                    },
                                    on: {
                                      click: function (t) {
                                        e.abonar();
                                      },
                                    },
                                  },
                                  [
                                    e._v(
                                      "\n            Terminar abono\n          "
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                            e._v(" "),
                            a("v-flex", { attrs: { xs12: "", sm6: "" } }, [
                              a("h1", [
                                a("span", { staticClass: "display-1" }, [
                                  e._v(e._s(e._f("currency")(e.totalAbonado))),
                                ]),
                                e._v(" "),
                                a("span", { staticClass: "title" }, [
                                  e._v("Abonado"),
                                ]),
                              ]),
                            ]),
                            e._v(" "),
                            a("v-flex", { attrs: { xs12: "", sm6: "" } }, [
                              a("h1", [
                                a("span", { staticClass: "display-1" }, [
                                  e._v(e._s(e._f("currency")(e.restante))),
                                ]),
                                e._v(" "),
                                a("span", { staticClass: "title" }, [
                                  e._v("Restante"),
                                ]),
                              ]),
                            ]),
                            e._v(" "),
                            a(
                              "v-flex",
                              { attrs: { xs12: "" } },
                              [
                                a("v-data-table", {
                                  attrs: {
                                    headers: e.encabezados,
                                    items: e.abonos,
                                    "hide-actions": "",
                                    "item-key": "props.item.index",
                                  },
                                  scopedSlots: e._u([
                                    {
                                      key: "items",
                                      fn: function (t) {
                                        return [
                                          a("tr", [
                                            a("td", [
                                              e._v(
                                                e._s(
                                                  e._f("currency")(t.item.Monto)
                                                )
                                              ),
                                            ]),
                                            e._v(" "),
                                            a("td", [
                                              e._v(
                                                e._s(
                                                  e._f("fechaExpresiva")(
                                                    t.item.Fecha
                                                  )
                                                )
                                              ),
                                            ]),
                                            e._v(" "),
                                            a("td", [
                                              e._v(e._s(t.item.Usuario.Nombre)),
                                            ]),
                                            e._v(" "),
                                            a(
                                              "td",
                                              {
                                                staticClass:
                                                  "justify-center layout px-0",
                                              },
                                              [
                                                a(
                                                  "v-btn",
                                                  {
                                                    staticClass: "mx-0",
                                                    attrs: {
                                                      title: "Imprimir",
                                                      icon: "",
                                                    },
                                                    on: {
                                                      click: function (a) {
                                                        e.imprimir(
                                                          t.item.IdAbono,
                                                          e.apartado.IdApartado
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [
                                                    a(
                                                      "v-icon",
                                                      {
                                                        attrs: {
                                                          color: "orange",
                                                        },
                                                      },
                                                      [e._v("print")]
                                                    ),
                                                  ],
                                                  1
                                                ),
                                              ],
                                              1
                                            ),
                                          ]),
                                        ];
                                      },
                                    },
                                  ]),
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-card-actions",
                      [
                        a("v-spacer"),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: { color: "green darken-1", flat: "flat" },
                            nativeOn: {
                              click: function (t) {
                                e.ocultarDialogo();
                              },
                            },
                          },
                          [e._v("Cerrar")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        A = a("VU/8")(g, b, !1, null, null, null).exports,
        _ = a("NHnr"),
        x = {
          name: "CambiarFechaVencimiento",
          props: ["mostrar", "idApartado", "fechaVencimiento"],
          data: function () {
            return {
              nuevaFechaVencimiento: null,
              mostrarDialogoFecha: !0,
              hoy: h.a.hoyComoCadena(),
              cargando: !1,
            };
          },
          watch: {
            mostrar: function (e) {
              var t = this;
              e &&
                this.$nextTick(function () {
                  t.nuevaFechaVencimiento = t.fechaVencimiento;
                });
            },
          },
          methods: {
            cerrarDialogo: function () {
              this.$emit("cerrar");
            },
            guardar: function () {
              var e = this;
              this.idApartado &&
                this.nuevaFechaVencimiento &&
                ((this.cargando = !0),
                l.b
                  .put(
                    "fecha/apartado/" + this.idApartado,
                    h.a.agregarHoraCeroAFecha(this.nuevaFechaVencimiento)
                  )
                  .then(function (t) {
                    (e.cargando = !1), e.$emit("cambiada");
                  }));
            },
          },
        },
        k = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-dialog",
              {
                attrs: { persistent: "", "max-width": "700" },
                model: {
                  value: e.mostrar,
                  callback: function (t) {
                    e.mostrar = t;
                  },
                  expression: "mostrar",
                },
              },
              [
                a(
                  "v-card",
                  [
                    a("v-card-title", { staticClass: "headline" }, [
                      e._v("Cambiando fecha de vencimiento"),
                    ]),
                    e._v(" "),
                    a(
                      "v-card-text",
                      [
                        a(
                          "v-form",
                          { ref: "formulario" },
                          [
                            a(
                              "v-container",
                              { attrs: { fluid: "", "grid-list-md": "" } },
                              [
                                a(
                                  "v-layout",
                                  { attrs: { row: "", wrap: "" } },
                                  [
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "" } },
                                      [
                                        a(
                                          "v-menu",
                                          {
                                            ref: "menu",
                                            attrs: {
                                              "close-on-content-click": !1,
                                              "nudge-right": 40,
                                              "return-value":
                                                e.nuevaFechaVencimiento,
                                              lazy: "",
                                              transition: "scale-transition",
                                              "offset-y": "",
                                              "full-width": "",
                                              "min-width": "290px",
                                            },
                                            on: {
                                              "update:returnValue": function (
                                                t
                                              ) {
                                                e.nuevaFechaVencimiento = t;
                                              },
                                            },
                                            model: {
                                              value: e.mostrarDialogoFecha,
                                              callback: function (t) {
                                                e.mostrarDialogoFecha = t;
                                              },
                                              expression: "mostrarDialogoFecha",
                                            },
                                          },
                                          [
                                            a("v-text-field", {
                                              attrs: {
                                                slot: "activator",
                                                label: "Fecha de vencimiento",
                                                "prepend-icon": "event",
                                                readonly: "",
                                              },
                                              slot: "activator",
                                              model: {
                                                value: e.nuevaFechaVencimiento,
                                                callback: function (t) {
                                                  e.nuevaFechaVencimiento = t;
                                                },
                                                expression:
                                                  "nuevaFechaVencimiento",
                                              },
                                            }),
                                            e._v(" "),
                                            a(
                                              "v-date-picker",
                                              {
                                                attrs: {
                                                  color: "green lighten-1",
                                                  locale: "es-419",
                                                  min: e.hoy,
                                                },
                                                model: {
                                                  value:
                                                    e.nuevaFechaVencimiento,
                                                  callback: function (t) {
                                                    e.nuevaFechaVencimiento = t;
                                                  },
                                                  expression:
                                                    "nuevaFechaVencimiento",
                                                },
                                              },
                                              [
                                                a("v-spacer"),
                                                e._v(" "),
                                                a(
                                                  "v-btn",
                                                  {
                                                    attrs: {
                                                      flat: "",
                                                      color: "primary",
                                                    },
                                                    on: {
                                                      click: function (t) {
                                                        e.mostrarDialogoFecha =
                                                          !1;
                                                      },
                                                    },
                                                  },
                                                  [e._v("Cerrar")]
                                                ),
                                                e._v(" "),
                                                a(
                                                  "v-btn",
                                                  {
                                                    attrs: {
                                                      flat: "",
                                                      color: "primary",
                                                    },
                                                    on: {
                                                      click: function (t) {
                                                        e.$refs.menu.save(
                                                          e.nuevaFechaVencimiento
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [e._v("OK")]
                                                ),
                                              ],
                                              1
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-card-actions",
                      [
                        a("v-spacer"),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: {
                              loading: e.cargando,
                              color: "green darken-1",
                              flat: "flat",
                            },
                            nativeOn: {
                              click: function (t) {
                                e.guardar();
                              },
                            },
                          },
                          [e._v("Guardar\n      ")]
                        ),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: { color: "gray", flat: "flat" },
                            nativeOn: {
                              click: function (t) {
                                e.cerrarDialogo();
                              },
                            },
                          },
                          [e._v("Cerrar")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        C = a("VU/8")(x, k, !1, null, null, null).exports,
        E = {
          components: {
            SeleccionadorFechas: d.a,
            ProductosApartados: f,
            Abonos: A,
            CambiarFechaVencimiento: C,
          },
          beforeMount: function () {
            _.EventBus.$emit("ponerTitulo", "Reporte de apartados");
          },
          watch: {
            tipoReporte: function () {
              this.refrescarApartadosConElTipoSeleccionado();
            },
          },
          methods: {
            mostrarAbonosDesdeInput: function () {
              var e = this,
                t = Number(this.numeroApartadoParaAbonar);
              !isNaN(t) && t > 0
                ? ((this.buscandoApartadoPorNumero = !0),
                  l.b.get("apartado/" + t).then(function (t) {
                    (e.numeroApartadoParaAbonar = ""),
                      (e.buscandoApartadoPorNumero = !1),
                      null !== t && t.Total > 0
                        ? ((t.IdApartado = t.Numero),
                          delete t.Numero,
                          (t.Monto = t.Total),
                          delete t.Total,
                          e.mostrarAbonos(t))
                        : (e.snackbars.numeroApartadoInexistenteOErroneo = !0);
                  }))
                : (this.snackbars.numeroApartadoInexistenteOErroneo = !0);
            },
            onFechaVencimientoCambiada: function () {
              (this.snackbars.fechaVencimientoCambiada = !0),
                (this.dialogos.cambiarFechaVencimiento = !1),
                this.refrescarApartadosConElTipoSeleccionado();
            },
            refrescarApartadosConElTipoSeleccionado: function () {
              switch (this.tipoReporte) {
                case "todos":
                  this.consultarApartados(
                    this.ultimaFechaInicio,
                    this.ultimaFechaFin
                  );
                  break;
                case "pendientes":
                  this.consultarApartadosPendientes();
                  break;
                case "proximos":
                  this.consultarApartadosProximos();
              }
            },
            cambiarFechaVencimiento: function (e) {
              var t = e.IdApartado,
                a = e.FechaVencimiento;
              (this.dialogos.cambiarFechaVencimiento = !0),
                (this.apartadoEditado.id = t),
                (this.apartadoEditado.fechaVencimiento = a.split("T")[0]);
            },
            imprimir: function (e) {
              var t = this;
              return c()(
                i.a.mark(function a() {
                  return i.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              h.a.imprimirTicketApartado(e.IdApartado)
                            );
                          case 2:
                          case "end":
                            return t.stop();
                        }
                    },
                    a,
                    t
                  );
                })
              )();
            },
            onApartadoAbonado: function () {
              this.refrescarApartadosConElTipoSeleccionado();
            },
            mostrarDetalles: function (e) {
              (this.dialogos.productos = !0),
                (this.apartadoParaMostrarDetalles = e);
            },
            mostrarAbonos: function (e) {
              (this.apartadoSeleccionado = e), (this.dialogos.abonos = !0);
            },
            comprobarFechasYRefrescarSiEsNecesario: function (e) {
              var t = e.inicio,
                a = e.fin;
              t && a && this.consultarApartados(t, a);
            },
            consultarApartados: function (e, t) {
              var a = this;
              if (
                ((this.ultimaFechaInicio = e),
                (this.ultimaFechaFin = t),
                this.mostrarPendientes)
              )
                return (this.mostrarPendientes = !1);
              l.b
                .get("apartados/" + e + "/" + t)
                .then(function (e) {
                  a.procesarApartados(e);
                })
                .then(function () {
                  return l.b.get("total/abonado/" + e + "/" + t);
                })
                .then(function (e) {
                  a.totales.abonado = e;
                });
            },
            consultarApartadosPendientes: function () {
              var e = this;
              l.b.get("apartados/pendientes").then(function (t) {
                e.procesarApartados(t);
              });
            },
            consultarApartadosProximos: function () {
              var e = this;
              l.b.get("apartados/proximos/vencer").then(function (t) {
                e.procesarApartados(t);
              });
            },
            procesarApartados: function (e) {
              var t = this,
                a = [];
              (this.totales.anticipo = 0),
                (this.totales.abonado = 0),
                e.forEach(function (e) {
                  var r = a.find(function (t) {
                    return t.IdApartado === e.IdApartado;
                  });
                  if (r) {
                    r.productos.push(e.Producto);
                    var n =
                      (e.Producto.PrecioVenta - e.Producto.PrecioCompra) *
                      e.Producto.Cantidad;
                    r.Utilidad += n;
                  } else {
                    var i = o()({}, e),
                      s = i.Producto;
                    (i.Utilidad =
                      (s.PrecioVenta - s.PrecioCompra) * s.Cantidad),
                      (t.totales.anticipo += i.Anticipo),
                      delete i.Producto,
                      (i.productos = [s]),
                      a.push(i);
                  }
                }),
                (this.apartados = a);
            },
          },
          data: function () {
            return {
              buscandoApartadoPorNumero: !1,
              numeroApartadoParaAbonar: "",
              tipoReporte: "todos",
              apartadoParaMostrarDetalles: {},
              apartadoEditado: { id: null, fechaVencimiento: null },
              snackbars: {
                cantidadNegativa: !1,
                cantidadSuperior: !1,
                entregarProductos: !1,
                fechaVencimientoCambiada: !1,
                numeroApartadoInexistenteOErroneo: !1,
              },
              ultimaFechaInicio: null,
              ultimaFechaFin: null,
              apartadoSeleccionado: {},
              dialogos: {
                productos: !1,
                abonos: !1,
                cambiarFechaVencimiento: !1,
              },
              apartados: [],
              totales: { anticipo: 0, abonado: 0 },
              encabezadosApartados: [
                { text: "#", value: "IdVenta" },
                { text: "Monto", value: "Monto" },
                { text: "Anticipo", value: "Anticipo" },
                { text: "Abonado", value: "Abonado" },
                { text: "Restante", value: "Restante", sortable: !1 },
                { text: "Fecha", value: "Fecha" },
                { text: "Vence el", value: "FechaVencimiento" },
                { text: "Cliente", value: "IdCliente" },
                { text: "Usuario", value: "IdUsuario" },
                { text: "Opciones", sortable: !1 },
              ],
            };
          },
        },
        y = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                a("cambiar-fecha-vencimiento", {
                  attrs: {
                    mostrar: e.dialogos.cambiarFechaVencimiento,
                    fechaVencimiento: e.apartadoEditado.fechaVencimiento,
                    idApartado: e.apartadoEditado.id,
                  },
                  on: {
                    cerrar: function (t) {
                      e.dialogos.cambiarFechaVencimiento = !1;
                    },
                    cambiada: e.onFechaVencimientoCambiada,
                  },
                }),
                e._v(" "),
                a("seleccionador-fechas", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "todos" === e.tipoReporte,
                      expression: "tipoReporte === 'todos'",
                    },
                  ],
                  on: { cambio: e.comprobarFechasYRefrescarSiEsNecesario },
                }),
                e._v(" "),
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a(
                      "v-layout",
                      { attrs: { row: "", wrap: "" } },
                      [
                        a(
                          "v-flex",
                          { attrs: { xs12: "", sm6: "" } },
                          [
                            a("v-text-field", {
                              ref: "nombreCliente",
                              attrs: {
                                loading: e.buscandoApartadoPorNumero,
                                "prepend-icon": "monetization_on",
                                label: "Abonar a un apartado",
                                type: "number",
                                hint: "Escriba el número y presione Enter",
                                required: "",
                              },
                              on: {
                                keyup: function (t) {
                                  if (
                                    !("button" in t) &&
                                    e._k(t.keyCode, "enter", 13, t.key, "Enter")
                                  )
                                    return null;
                                  e.mostrarAbonosDesdeInput();
                                },
                              },
                              model: {
                                value: e.numeroApartadoParaAbonar,
                                callback: function (t) {
                                  e.numeroApartadoParaAbonar = t;
                                },
                                expression: "numeroApartadoParaAbonar",
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-flex",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: "todos" === e.tipoReporte,
                        expression: "tipoReporte === 'todos'",
                      },
                    ],
                    attrs: { xs12: "", sm6: "" },
                  },
                  [
                    a("h1", [
                      a("span", { staticClass: "display-1" }, [
                        e._v(e._s(e._f("currency")(e.totales.anticipo))),
                      ]),
                      e._v(" "),
                      a("span", { staticClass: "title" }, [e._v("Anticipo")]),
                    ]),
                  ]
                ),
                e._v(" "),
                a(
                  "v-flex",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: "todos" === e.tipoReporte,
                        expression: "tipoReporte === 'todos'",
                      },
                    ],
                    attrs: { xs12: "", sm6: "" },
                  },
                  [
                    a("h1", [
                      a("span", { staticClass: "display-1" }, [
                        e._v(e._s(e._f("currency")(e.totales.abonado))),
                      ]),
                      e._v(" "),
                      a("span", { staticClass: "title" }, [e._v("Abonado")]),
                    ]),
                  ]
                ),
                e._v(" "),
                a(
                  "v-flex",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: "todos" === e.tipoReporte,
                        expression: "tipoReporte === 'todos'",
                      },
                    ],
                    attrs: { xs12: "" },
                  },
                  [a("v-divider")],
                  1
                ),
                e._v(" "),
                a("productos-apartados", {
                  attrs: {
                    mostrar: e.dialogos.productos,
                    apartado: e.apartadoParaMostrarDetalles,
                  },
                  on: {
                    cerrar: function (t) {
                      e.dialogos.productos = !1;
                    },
                  },
                }),
                e._v(" "),
                a("abonos", {
                  attrs: {
                    apartado: e.apartadoSeleccionado,
                    mostrar: e.dialogos.abonos,
                  },
                  on: {
                    abonado: e.onApartadoAbonado,
                    liquidar: function (t) {
                      e.snackbars.entregarProductos = !0;
                    },
                    cantidadSuperior: function (t) {
                      e.snackbars.cantidadSuperior = !0;
                    },
                    cantidadNegativa: function (t) {
                      e.snackbars.cantidadNegativa = !0;
                    },
                    cerrar: function (t) {
                      e.dialogos.abonos = !1;
                    },
                  },
                }),
                e._v(" "),
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a(
                      "v-radio-group",
                      {
                        attrs: { label: "Mostrar...", row: "" },
                        model: {
                          value: e.tipoReporte,
                          callback: function (t) {
                            e.tipoReporte = t;
                          },
                          expression: "tipoReporte",
                        },
                      },
                      [
                        a("v-radio", {
                          attrs: { label: "Todos", value: "todos" },
                        }),
                        e._v(" "),
                        a("v-radio", {
                          attrs: { label: "Pendientes", value: "pendientes" },
                        }),
                        e._v(" "),
                        a("v-radio", {
                          attrs: {
                            label: "Próximos a vencer (1 semana)",
                            value: "proximos",
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a("v-data-table", {
                      attrs: {
                        headers: e.encabezadosApartados,
                        items: e.apartados,
                        "hide-actions": "",
                        "item-key": "IdApartado",
                      },
                      scopedSlots: e._u([
                        {
                          key: "items",
                          fn: function (t) {
                            return [
                              a("tr", [
                                a("td", [e._v(e._s(t.item.IdApartado))]),
                                e._v(" "),
                                a("td", [
                                  e._v(e._s(e._f("currency")(t.item.Monto))),
                                ]),
                                e._v(" "),
                                a("td", [
                                  e._v(e._s(e._f("currency")(t.item.Anticipo))),
                                ]),
                                e._v(" "),
                                a("td", [
                                  e._v(e._s(e._f("currency")(t.item.Abonado))),
                                ]),
                                e._v(" "),
                                a("td", [
                                  e._v(
                                    "\n            " +
                                      e._s(
                                        e._f("currency")(
                                          t.item.Monto -
                                            t.item.Anticipo -
                                            t.item.Abonado
                                        )
                                      ) +
                                      "\n          "
                                  ),
                                ]),
                                e._v(" "),
                                a("td", [
                                  e._v(
                                    e._s(e._f("fechaSinHora")(t.item.Fecha))
                                  ),
                                ]),
                                e._v(" "),
                                a("td", [
                                  e._v(
                                    e._s(
                                      e._f("fechaSinHora")(
                                        t.item.FechaVencimiento
                                      )
                                    )
                                  ),
                                ]),
                                e._v(" "),
                                a("td", [e._v(e._s(t.item.Cliente.Nombre))]),
                                e._v(" "),
                                a("td", [e._v(e._s(t.item.Usuario.Nombre))]),
                                e._v(" "),
                                a(
                                  "td",
                                  { staticClass: "justify-center layout px-0" },
                                  [
                                    a(
                                      "v-btn",
                                      {
                                        staticClass: "mx-0",
                                        attrs: {
                                          title: "Cambiar fecha de vencimiento",
                                          icon: "",
                                        },
                                        on: {
                                          click: function (a) {
                                            e.cambiarFechaVencimiento(t.item);
                                          },
                                        },
                                      },
                                      [
                                        a(
                                          "v-icon",
                                          { attrs: { color: "error" } },
                                          [e._v("update")]
                                        ),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a(
                                      "v-btn",
                                      {
                                        staticClass: "mx-0",
                                        attrs: { title: "Detalles", icon: "" },
                                        on: {
                                          click: function (a) {
                                            e.mostrarDetalles(t.item);
                                          },
                                        },
                                      },
                                      [
                                        a(
                                          "v-icon",
                                          { attrs: { color: "blue" } },
                                          [e._v("info")]
                                        ),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a(
                                      "v-btn",
                                      {
                                        staticClass: "mx-0",
                                        attrs: { title: "Abonar", icon: "" },
                                        on: {
                                          click: function (a) {
                                            e.mostrarAbonos(t.item);
                                          },
                                        },
                                      },
                                      [
                                        a(
                                          "v-icon",
                                          { attrs: { color: "green" } },
                                          [e._v("monetization_on")]
                                        ),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a(
                                      "v-btn",
                                      {
                                        staticClass: "mx-0",
                                        attrs: {
                                          title: "Imprimir ticket",
                                          icon: "",
                                        },
                                        on: {
                                          click: function (a) {
                                            e.imprimir(t.item);
                                          },
                                        },
                                      },
                                      [
                                        a(
                                          "v-icon",
                                          { attrs: { color: "orange" } },
                                          [e._v("print")]
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ]),
                            ];
                          },
                        },
                      ]),
                    }),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 2e3, top: !0 },
                    model: {
                      value: e.snackbars.cantidadNegativa,
                      callback: function (t) {
                        e.$set(e.snackbars, "cantidadNegativa", t);
                      },
                      expression: "snackbars.cantidadNegativa",
                    },
                  },
                  [
                    e._v(
                      "\n    La cantidad abonada debe ser mayor que cero\n    "
                    ),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.cantidadNegativa = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 2e3, top: !0 },
                    model: {
                      value: e.snackbars.cantidadSuperior,
                      callback: function (t) {
                        e.$set(e.snackbars, "cantidadSuperior", t);
                      },
                      expression: "snackbars.cantidadSuperior",
                    },
                  },
                  [
                    e._v(
                      "\n    Introduce una cantidad menor o igual al restante\n    "
                    ),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.cantidadSuperior = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 0, top: !0 },
                    model: {
                      value: e.snackbars.entregarProductos,
                      callback: function (t) {
                        e.$set(e.snackbars, "entregarProductos", t);
                      },
                      expression: "snackbars.entregarProductos",
                    },
                  },
                  [
                    e._v(
                      "\n    Apartado liquidado. Ahora puede entregar los productos\n    "
                    ),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.entregarProductos = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 3e3, bottom: !0 },
                    model: {
                      value: e.snackbars.fechaVencimientoCambiada,
                      callback: function (t) {
                        e.$set(e.snackbars, "fechaVencimientoCambiada", t);
                      },
                      expression: "snackbars.fechaVencimientoCambiada",
                    },
                  },
                  [
                    e._v(
                      "\n    Fecha de vencimiento cambiada correctamente\n    "
                    ),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.fechaVencimientoCambiada = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 3e3, bottom: !0 },
                    model: {
                      value: e.snackbars.numeroApartadoInexistenteOErroneo,
                      callback: function (t) {
                        e.$set(
                          e.snackbars,
                          "numeroApartadoInexistenteOErroneo",
                          t
                        );
                      },
                      expression: "snackbars.numeroApartadoInexistenteOErroneo",
                    },
                  },
                  [
                    e._v("\n    No existe un apartado con ese número\n    "),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.numeroApartadoInexistenteOErroneo = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        P = a("VU/8")(E, y, !1, null, null, null);
      t.default = P.exports;
    },
    nBfo: function (e, t, a) {
      "use strict";
      var r = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a("v-alert", { attrs: { value: !0, type: "success" } }, [
              a("p", [
                a("strong", [e._v("Caman Jeans")]),
                e._v(" - Punto de venta e Inventario creado por\n    "),
                a("strong", [e._v("Parzibyte")]),
                e._v(" "),
                a("br"),
                e._v(
                  "\n    Si estás disfrut el programa, considera hacer una donación en:\n    "
                ),
                a(
                  "a",
                  {
                    staticClass: "white--text",
                    attrs: { href: "https://parzibyte.me/blog/donaciones/" },
                  },
                  [e._v("https://parzibyte.me/blog/donaciones/")]
                ),
                e._v(". También te invito a visitar\n    "),
                a(
                  "a",
                  {
                    staticClass: "white--text",
                    attrs: { href: "https://parzibyte.me/blog" },
                  },
                  [e._v("mi blog")]
                ),
                e._v(" "),
                a("br"),
                e._v(" "),
                a("small", [
                  e._v(
                    "Nota: puedes remover este mensaje y el pie de página al mismo tiempo\n      que apoyas el desarrollo del software. Más información\n      "
                  ),
                  a(
                    "a",
                    {
                      staticClass: "white--text",
                      attrs: {
                        href: "https://parzibyte.me/blog/2021/06/19/ayuda-soporte-sublime-pos-3/#Cambios_al_sistema",
                      },
                    },
                    [e._v("aquí")]
                  ),
                ]),
              ]),
            ]);
          },
          staticRenderFns: [],
        },
        o = a("VU/8")({ name: "Publicidad" }, r, !1, null, null, null);
      t.a = o.exports;
    },
    nfYx: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("NHnr"),
        o = a("MRIW"),
        n = {
          beforeMount: function () {
            r.EventBus.$emit("ponerTitulo", "Acerca de");
          },
          data: function () {
            return { pagina: o.c };
          },
        },
        i = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-layout",
              { attrs: { wrap: "", row: "" } },
              [
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a("h3", { staticClass: "display-2" }, [e._v("Acerca de")]),
                    e._v(" "),
                    a("span", { staticClass: "subheading" }, [
                      a("strong", [e._v(" Caman Jeans ")]),
                      e._v("\n      Sistema de ventas e Inventario."),
                    ]),
                    e._v(" "),
                    a("div", { staticClass: "title mb-3" }, [
                      e._v("\n      Creado y mantenido por\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://parzibyte.me/blog",
                            target: "_blank",
                          },
                        },
                        [e._v("Parzibyte")]
                      ),
                    ]),
                    e._v(" "),
                    a("v-divider", { staticClass: "my-3" }),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a("h3", { staticClass: "display-2" }, [
                      e._v("Ayuda y soporte"),
                    ]),
                    e._v(" "),
                    a("ul", [
                      a("li", [e._v("Manuales y tutoriales:")]),
                      e._v(" "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://www.youtube.com/playlist?list=PLat1rFhO_zZjl10DQiDgLW4iS58BFcqzy",
                          },
                        },
                        [
                          e._v(
                            "https://www.youtube.com/playlist?list=PLat1rFhO_zZjl10DQiDgLW4iS58BFcqzy"
                          ),
                        ]
                      ),
                      e._v(" "),
                      a("li", [
                        e._v(
                          "\n        Puedes solicitar ayuda, soporte y cambios al sistema\n        "
                        ),
                        a(
                          "a",
                          { attrs: { href: "https://parzibyte.me#contacto" } },
                          [e._v("enviándome un mensaje")]
                        ),
                      ]),
                      e._v(" "),
                      a("li", [
                        a("strong", [e._v("Puedes leer el")]),
                        e._v(" "),
                        a(
                          "a",
                          {
                            attrs: {
                              href: "https://parzibyte.me/apps/sublime-pos-3/",
                            },
                          },
                          [e._v("manual en línea")]
                        ),
                      ]),
                      e._v(" "),
                      a("li", [
                        a("strong", [e._v("Código fuente: ")]),
                        e._v(" "),
                        a(
                          "a",
                          {
                            attrs: {
                              href: "https://parzibyte.me/blog/2021/07/31/codigo-fuente-sublime-pos-3/",
                            },
                          },
                          [
                            e._v(
                              "https://parzibyte.me/blog/2021/07/31/codigo-fuente-sublime-pos-3/"
                            ),
                          ]
                        ),
                      ]),
                      e._v(" "),
                      a("li", [
                        a("strong", [e._v("Donaciones: ")]),
                        e._v(" "),
                        a(
                          "a",
                          {
                            attrs: {
                              href: "https://parzibyte.me/blog/donaciones/",
                            },
                          },
                          [e._v("https://parzibyte.me/blog/donaciones/")]
                        ),
                      ]),
                      e._v(" "),
                      a("li", [
                        e._v(
                          "Cambiar el logotipo, la moneda y/o remover los créditos:"
                        ),
                      ]),
                      e._v(" "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://parzibyte.me/blog/2021/06/19/ayuda-soporte-sublime-pos-3/",
                          },
                        },
                        [
                          e._v(
                            "https://parzibyte.me/blog/2021/06/19/ayuda-soporte-sublime-pos-3/"
                          ),
                        ]
                      ),
                    ]),
                    e._v(" "),
                    a("v-divider", { staticClass: "my-3" }),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a("h1", { staticClass: "display-2" }, [
                      e._v("Más software gratuito"),
                    ]),
                    e._v(" "),
                    a(
                      "a",
                      {
                        attrs: {
                          href: "https://parzibyte.me/blog/software-creado-por-parzibyte/",
                        },
                      },
                      [e._v("En el blog de Parzibyte")]
                    ),
                    e._v(" "),
                    a("v-divider", { staticClass: "my-3" }),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a("h1", { staticClass: "display-2" }, [
                      e._v("Agradecimientos"),
                    ]),
                    e._v(" "),
                    a("p", [
                      e._v(
                        "\n      Gracias a todas las personas que hicieron posible este proyecto\n      brindando ideas. También agradezco a los autores de las tecnologías\n      utilizadas.\n    "
                      ),
                    ]),
                    e._v(" "),
                    a("v-divider", { staticClass: "my-3" }),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a("h1", { staticClass: "display-2" }, [e._v("Créditos")]),
                    e._v(" "),
                    a("v-alert", { attrs: { type: "info", value: !0 } }, [
                      e._v(
                        "\n      Algunas imágenes utilizadas en este proyecto no son de mi autoría. Los\n      créditos pertenecen a sus respectivos autores.\n    "
                      ),
                    ]),
                    e._v("\n    Bolso de compra:\n    "),
                    a("div", [
                      e._v("\n      Iconos diseñados por\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://www.flaticon.es/autores/darius-dan",
                            title: "Darius Dan",
                          },
                        },
                        [e._v("Darius Dan")]
                      ),
                      e._v("\n      desde\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://www.flaticon.es/",
                            title: "Flaticon",
                          },
                        },
                        [e._v("www.flaticon.com")]
                      ),
                      e._v("\n      con licencia\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "http://creativecommons.org/licenses/by/3.0/",
                            title: "Creative Commons BY 3.0",
                            target: "_blank",
                          },
                        },
                        [e._v("CC 3.0 BY")]
                      ),
                    ]),
                    e._v("\n    Código de barras\n    "),
                    a("div", [
                      e._v("\n      Iconos diseñados por\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://www.flaticon.es/autores/smashicons",
                            title: "Smashicons",
                          },
                        },
                        [e._v("Smashicons")]
                      ),
                      e._v("\n      desde\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://www.flaticon.es/",
                            title: "Flaticon",
                          },
                        },
                        [e._v("www.flaticon.com")]
                      ),
                      e._v("\n      con licencia\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "http://creativecommons.org/licenses/by/3.0/",
                            title: "Creative Commons BY 3.0",
                            target: "_blank",
                          },
                        },
                        [e._v("CC 3.0 BY")]
                      ),
                    ]),
                    e._v("\n    Inventario:\n    "),
                    a("div", [
                      e._v("\n      Iconos diseñados por\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://www.flaticon.es/autores/prosymbols",
                            title: "Prosymbols",
                          },
                        },
                        [e._v("Prosymbols")]
                      ),
                      e._v("\n      desde\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://www.flaticon.es/",
                            title: "Flaticon",
                          },
                        },
                        [e._v("www.flaticon.com")]
                      ),
                      e._v("\n      con licencia\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "http://creativecommons.org/licenses/by/3.0/",
                            title: "Creative Commons BY 3.0",
                            target: "_blank",
                          },
                        },
                        [e._v("CC 3.0 BY")]
                      ),
                    ]),
                    e._v("\n    Clientes:\n    "),
                    a("div", [
                      e._v("\n      Iconos diseñados por\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "http://www.freepik.com",
                            title: "Freepik",
                          },
                        },
                        [e._v("Freepik")]
                      ),
                      e._v(" desde\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://www.flaticon.es/",
                            title: "Flaticon",
                          },
                        },
                        [e._v("www.flaticon.com")]
                      ),
                      e._v("\n      con licencia\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "http://creativecommons.org/licenses/by/3.0/",
                            title: "Creative Commons BY 3.0",
                            target: "_blank",
                          },
                        },
                        [e._v("CC 3.0 BY")]
                      ),
                    ]),
                    e._v("\n    Monedas:\n    "),
                    a("div", [
                      e._v("\n      Iconos diseñados por\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://www.flaticon.es/autores/smashicons",
                            title: "Smashicons",
                          },
                        },
                        [e._v("Smashicons")]
                      ),
                      e._v("\n      desde\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://www.flaticon.es/",
                            title: "Flaticon",
                          },
                        },
                        [e._v("www.flaticon.com")]
                      ),
                      e._v("\n      con licencia\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "http://creativecommons.org/licenses/by/3.0/",
                            title: "Creative Commons BY 3.0",
                            target: "_blank",
                          },
                        },
                        [e._v("CC 3.0 BY")]
                      ),
                    ]),
                    e._v("\n    Reporte:\n    "),
                    a("div", [
                      e._v("\n      Iconos diseñados por\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://www.flaticon.es/autores/vectors-market",
                            title: "Vectors Market",
                          },
                        },
                        [e._v("Vectors Market")]
                      ),
                      e._v("\n      desde\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://www.flaticon.es/",
                            title: "Flaticon",
                          },
                        },
                        [e._v("www.flaticon.com")]
                      ),
                      e._v("\n      con licencia\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "http://creativecommons.org/licenses/by/3.0/",
                            title: "Creative Commons BY 3.0",
                            target: "_blank",
                          },
                        },
                        [e._v("CC 3.0 BY")]
                      ),
                    ]),
                    e._v("\n    Escudo:\n    "),
                    a("div", [
                      e._v("\n      Iconos diseñados por\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://www.flaticon.es/autores/smashicons",
                            title: "Smashicons",
                          },
                        },
                        [e._v("Smashicons")]
                      ),
                      e._v("\n      desde\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://www.flaticon.es/",
                            title: "Flaticon",
                          },
                        },
                        [e._v("www.flaticon.com")]
                      ),
                      e._v("\n      con licencia\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "http://creativecommons.org/licenses/by/3.0/",
                            title: "Creative Commons BY 3.0",
                            target: "_blank",
                          },
                        },
                        [e._v("CC 3.0 BY")]
                      ),
                    ]),
                    e._v("\n    Dinero:\n    "),
                    a("div", [
                      e._v("\n      Iconos diseñados por\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://www.flaticon.es/autores/dimitry-miroliubov",
                            title: "Dimitry Miroliubov",
                          },
                        },
                        [e._v("Dimitry Miroliubov")]
                      ),
                      e._v("\n      desde\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://www.flaticon.es/",
                            title: "Flaticon",
                          },
                        },
                        [e._v("www.flaticon.com")]
                      ),
                      e._v("\n      con licencia\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "http://creativecommons.org/licenses/by/3.0/",
                            title: "Creative Commons BY 3.0",
                            target: "_blank",
                          },
                        },
                        [e._v("CC 3.0 BY")]
                      ),
                    ]),
                    e._v("\n    Ajustes:\n    "),
                    a("div", [
                      e._v("\n      Iconos diseñados por\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://www.flaticon.es/autores/egor-rumyantsev",
                            title: "Egor Rumyantsev",
                          },
                        },
                        [e._v("Egor Rumyantsev")]
                      ),
                      e._v("\n      desde\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://www.flaticon.es/",
                            title: "Flaticon",
                          },
                        },
                        [e._v("www.flaticon.com")]
                      ),
                      e._v("\n      con licencia\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "http://creativecommons.org/licenses/by/3.0/",
                            title: "Creative Commons BY 3.0",
                            target: "_blank",
                          },
                        },
                        [e._v("CC 3.0 BY")]
                      ),
                    ]),
                    e._v("\n    Dashboard:\n    "),
                    a("div", [
                      e._v("\n      Iconos diseñados por\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://www.flaticon.es/autores/prosymbols",
                            title: "Prosymbols",
                          },
                        },
                        [e._v("Prosymbols")]
                      ),
                      e._v("\n      desde\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://www.flaticon.es/",
                            title: "Flaticon",
                          },
                        },
                        [e._v("www.flaticon.com")]
                      ),
                      e._v("\n      con licencia\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "http://creativecommons.org/licenses/by/3.0/",
                            title: "Creative Commons BY 3.0",
                            target: "_blank",
                          },
                        },
                        [e._v("CC 3.0 BY")]
                      ),
                    ]),
                    e._v("\n    Estadística:\n    "),
                    a("div", [
                      e._v("\n      Iconos diseñados por\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://www.flaticon.es/autores/pause08",
                            title: "Pause08",
                          },
                        },
                        [e._v("Pause08")]
                      ),
                      e._v("\n      desde\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "https://www.flaticon.es/",
                            title: "Flaticon",
                          },
                        },
                        [e._v("www.flaticon.com")]
                      ),
                      e._v("\n      con licencia\n      "),
                      a(
                        "a",
                        {
                          attrs: {
                            href: "http://creativecommons.org/licenses/by/3.0/",
                            title: "Creative Commons BY 3.0",
                            target: "_blank",
                          },
                        },
                        [e._v("CC 3.0 BY")]
                      ),
                    ]),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        s = a("VU/8")(n, i, !1, null, null, null);
      t.default = s.exports;
    },
    pPNm: function (e, t) {},
    psw5: function (e, t, a) {
      "use strict";
      var r = a("woOf"),
        o = a.n(r),
        n = a("8o1w"),
        i = {
          props: ["mostrar"],
          mounted: function () {
            this.productos = [];
          },
          watch: {
            mostrar: function (e) {
              e && this.$nextTick(this.$refs.input.focus);
            },
            busquedaAutocompletado: function (e) {
              e && this.buscar(e);
            },
          },
          data: function () {
            return {
              cargando: !1,
              productos: [],
              busquedaAutocompletado: "",
              productoSeleccionado: {},
            };
          },
          methods: {
            onProductoSeleccionado: function (e) {
              var t = this;
              e.Numero &&
                setTimeout(function () {
                  var a = o()({}, e);
                  (t.productoSeleccionado = {}),
                    (t.busquedaAutocompletado = ""),
                    t.$emit("producto-seleccionado", a),
                    (t.productos = []);
                }, 100);
            },
            buscar: function (e) {
              var t = this;
              (this.cargando = !0),
                n.b
                  .get("buscar/productos/autocompletado/" + e)
                  .then(function (e) {
                    (t.productos = e), (t.cargando = !1);
                  });
            },
          },
        },
        s = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-container",
              [
                a("v-autocomplete", {
                  ref: "input",
                  attrs: {
                    loading: e.cargando,
                    items: e.productos,
                    "search-input": e.busquedaAutocompletado,
                    label: "Escriba parte de la descripción del producto",
                    "return-object": "",
                    "item-text": "Descripcion",
                    "item-value": "Numero",
                    "no-data-text":
                      "No existe ningún producto con esa descripción",
                    solo: "",
                  },
                  on: {
                    "update:searchInput": function (t) {
                      e.busquedaAutocompletado = t;
                    },
                    change: e.onProductoSeleccionado,
                  },
                  model: {
                    value: e.productoSeleccionado,
                    callback: function (t) {
                      e.productoSeleccionado = t;
                    },
                    expression: "productoSeleccionado",
                  },
                }),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        c = a("VU/8")(i, s, !1, null, null, null);
      t.a = c.exports;
    },
    qdUR: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("8o1w"),
        o = a("NHnr"),
        n = a("KZvR"),
        i = {
          name: "TicketVentaContado",
          components: { Pie: a("rbc0").a, Encabezado: n.a },
          beforeRouteUpdate: function (e) {
            this.obtenerDetallesDeVenta(e.params.idVenta);
          },
          beforeMount: function () {
            o.EventBus.$emit("ponerTitulo", "Impresión de ticket"),
              this.obtenerDetallesDeVenta(this.$route.params.idVenta);
          },
          data: function () {
            return {
              cargando: !1,
              venta: { Usuario: {}, Cliente: {} },
              ajustes: {},
            };
          },
          methods: {
            obtenerDetallesDeVenta: function (e) {
              var t = this;
              if (!e) return this.$router.go(-1);
              (this.cargando = !0),
                r.b
                  .get("ajustes/empresa")
                  .then(function (e) {
                    t.ajustes = e;
                  })
                  .then(function () {
                    r.b
                      .get("venta/contado/" + e)
                      .then(function (e) {
                        t.venta = e;
                      })
                      .finally(function () {
                        return (t.cargando = !1);
                      });
                  });
            },
            imprimir: function () {
              var e = this;
              this.cargando ||
                (o.EventBus.$emit("ocultarMenu"),
                setTimeout(function () {
                  var t = document.title;
                  (document.title = "Venta al contado #" + e.venta.Numero),
                    window.print(),
                    (document.title = t),
                    o.EventBus.$emit("mostrarMenu");
                }, 200));
            },
            volver: function () {
              this.$router.go(-1);
            },
          },
        },
        s = {
          render: function () {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t;
            return r(
              "v-layout",
              { staticClass: "ticket", attrs: { wrap: "", row: "" } },
              [
                r(
                  "v-flex",
                  { staticClass: "hidden-print-only", attrs: { xs12: "" } },
                  [
                    r("encabezado"),
                    e._v(" "),
                    r(
                      "v-btn",
                      {
                        attrs: { small: "", color: "success" },
                        on: {
                          click: function (t) {
                            e.volver();
                          },
                        },
                      },
                      [
                        r("v-icon", [e._v("arrow_back")]),
                        e._v("\n      Volver\n    "),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(" "),
                r(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    r("br"),
                    e._v(" "),
                    r("v-img", {
                      staticClass: "text-xs-center",
                      attrs: { src: a("jxSC") },
                    }),
                    e._v(" "),
                    r("div", { staticClass: "text-xs-center" }, [
                      r("p", [
                        r("strong", [
                          e._v("Ticket de venta #" + e._s(e.venta.Numero)),
                        ]),
                      ]),
                      e._v(" "),
                      e.ajustes.Nombre
                        ? r("p", [
                            e._v(
                              "\n        " + e._s(e.ajustes.Nombre) + "\n      "
                            ),
                          ])
                        : e._e(),
                      e._v(" "),
                      e.ajustes.Direccion
                        ? r("p", [
                            e._v(
                              "\n        " +
                                e._s(e.ajustes.Direccion) +
                                "\n      "
                            ),
                          ])
                        : e._e(),
                      e._v(" "),
                      e.ajustes.Telefono
                        ? r("p", [
                            e._v("Teléfono: " + e._s(e.ajustes.Telefono)),
                          ])
                        : e._e(),
                      e._v(" "),
                      r("br"),
                      e._v(" "),
                      r("p", [
                        e._v(
                          "\n        " +
                            e._s(e._f("fechaExpresiva")(e.venta.Fecha)) +
                            "\n      "
                        ),
                      ]),
                      e._v(" "),
                      r("p", [
                        e._v("\n        Lo atendió: "),
                        r("strong", [e._v(e._s(e.venta.Usuario.Nombre))]),
                      ]),
                      e._v(" "),
                      r("p", [
                        e._v("\n        Cliente: "),
                        r("strong", [e._v(e._s(e.venta.Cliente.Nombre))]),
                      ]),
                      e._v(" "),
                      r(
                        "div",
                        { staticClass: "text-xs-center" },
                        [
                          r(
                            "v-flex",
                            {
                              staticClass: "text-xs-right con-borde-separador",
                              attrs: { xs9: "", "offset-xs1": "" },
                            },
                            [r("br")]
                          ),
                        ],
                        1
                      ),
                    ]),
                    e._v(" "),
                    r(
                      "v-layout",
                      { attrs: { wrap: "", row: "" } },
                      [
                        e._l(e.venta.Productos, function (t) {
                          return [
                            r(
                              "v-flex",
                              {
                                staticClass: "text-xs-left",
                                attrs: { xs12: "" },
                              },
                              [e._v(e._s(t.Descripcion))]
                            ),
                            e._v(" "),
                            r(
                              "v-flex",
                              {
                                staticClass: "text-xs-right con-borde-inferior",
                                attrs: { xs12: "" },
                              },
                              [
                                e._v(
                                  e._s(t.Cantidad) +
                                    " x " +
                                    e._s(e._f("currency")(t.PrecioVenta)) +
                                    "\n          =\n          " +
                                    e._s(
                                      e._f("currency")(
                                        t.Cantidad * t.PrecioVenta
                                      )
                                    ) +
                                    "\n        "
                                ),
                              ]
                            ),
                          ];
                        }),
                      ],
                      2
                    ),
                    e._v(" "),
                    r(
                      "div",
                      { staticClass: "text-xs-center" },
                      [
                        r(
                          "v-flex",
                          {
                            staticClass: "text-xs-right con-borde-separador",
                            attrs: { xs9: "", "offset-xs1": "" },
                          },
                          [r("br")]
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    r("div", { staticClass: "text-xs-right" }, [
                      r("p", [
                        r("strong", [e._v("Total")]),
                        e._v(" " + e._s(e._f("currency")(e.venta.Total))),
                      ]),
                      e._v(" "),
                      r("p", [
                        r("strong", [e._v("Su pago")]),
                        e._v(" " + e._s(e._f("currency")(e.venta.Pago))),
                      ]),
                      e._v(" "),
                      r("p", [
                        r("strong", [e._v("Cambio")]),
                        e._v(
                          " " +
                            e._s(
                              e._f("currency")(e.venta.Pago - e.venta.Total)
                            ) +
                            "\n      "
                        ),
                      ]),
                    ]),
                    e._v(" "),
                    r(
                      "div",
                      { staticClass: "text-xs-center" },
                      [
                        e.ajustes.MensajePersonal
                          ? r("p", [
                              r("strong", [
                                e._v(e._s(e.ajustes.MensajePersonal)),
                              ]),
                            ])
                          : e._e(),
                        e._v(" "),
                        r("Pie"),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(" "),
                r(
                  "v-btn",
                  {
                    staticClass: "hidden-print-only",
                    attrs: {
                      slot: "activator",
                      loading: e.cargando,
                      fixed: "",
                      dark: "",
                      fab: "",
                      bottom: "",
                      "fill-height": "",
                      right: "",
                      color: "green",
                    },
                    on: {
                      click: function (t) {
                        e.imprimir();
                      },
                    },
                    slot: "activator",
                  },
                  [r("v-icon", [e._v("print")])],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      a.d(t, "TimeoutOcultarMenuTickets", function () {
        return 200;
      });
      var c = a("VU/8")(i, s, !1, null, null, null);
      t.default = c.exports;
    },
    rbc0: function (e, t, a) {
      "use strict";
      var r = a("MRIW"),
        o = {
          name: "Pie",
          data: function () {
            return { enlace: r.d };
          },
        },
        n = {
          render: function () {
            var e = this.$createElement,
              t = this._self._c || e;
            return t("p", [
              this._m(0),
              this._v(" "),
              t("br"),
              this._v(" "),
              t("strong", [this._v(this._s(this.enlace))]),
            ]);
          },
          staticRenderFns: [
            function () {
              var e = this.$createElement,
                t = this._self._c || e;
              return t("small", [
                this._v("Caman Jeans. Punto de venta e Inventario"),
                t("br"),
                this._v("\n    Puedes descargarlo en:\n  "),
              ]);
            },
          ],
        };
      var i = a("VU/8")(
        o,
        n,
        !1,
        function (e) {
          a("pPNm");
        },
        "data-v-8de46246",
        null
      );
      t.a = i.exports;
    },
    "rr//": function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("jB/q"),
        o = a.n(r),
        n = a("8o1w"),
        i = a("NHnr"),
        s = {
          computed: {
            numeroDePaginas: function () {
              return null == this.paginacion.conteoProductos
                ? 0
                : Math.ceil(
                    this.paginacion.conteoProductos / this.paginacion.limite
                  );
            },
          },
          watch: {
            paginacion: {
              handler: function () {
                this.obtener();
              },
              deep: !0,
            },
          },
          beforeMount: function () {
            this.obtenerModoImpresion(),
              i.EventBus.$emit("ponerTitulo", "Códigos de barras");
          },
          methods: {
            obtenerModoImpresion: function () {
              var e = this;
              n.b.get("ajustes/otros").then(function (t) {
                "numero" === t.ModoImpresionCodigoDeBarras &&
                  (e.clave = "Numero"),
                  e.obtener();
              });
            },
            obtener: function () {
              var e = this,
                t =
                  this.paginacion.pagina > 1
                    ? (this.paginacion.pagina - 1) * this.paginacion.limite
                    : 0;
              n.b
                .get("productos/" + t + "/" + this.paginacion.limite)
                .then(function (t) {
                  (e.productos = t.Productos),
                    (e.paginacion.conteoProductos = t.Conteo),
                    (e.cargando = !1);
                });
            },
            imprimir: function () {
              var e = document.querySelector("#contenedorCodigos"),
                t = window.open("", "PRINT", "height=400,width=600");
              return (
                t.document.write(
                  "<html><head><title>" + document.title + "</title>"
                ),
                t.document.write(
                  "<style>\n      .contenedor-codigo-barras {\n  display: inline-block;\n  max-width: min-content;\n  min-height: max-content;\n  margin: 0.3em;\n  border: black 2px dashed;\n}\n\n.descripcion-codigo-barras {\n  font-size: 1em;\n  margin: 2px 2px;\n}</style>"
                ),
                t.document.write("</head><body >"),
                t.document.write(e.innerHTML),
                t.document.write("</body></html>"),
                t.document.close(),
                t.focus(),
                (t.onload = function () {
                  t.print(), t.close();
                }),
                !0
              );
            },
          },
          data: function () {
            return {
              clave: "CodigoBarras",
              productos: [],
              paginacion: {
                offset: 0,
                limite: 100,
                conteoProductos: 0,
                pagina: 1,
              },
            };
          },
          components: { barcode: o.a },
        },
        c = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                a("v-flex", { attrs: { xs12: "" } }, [
                  a(
                    "div",
                    { staticClass: "text-xs-center pt-2" },
                    [
                      a("v-pagination", {
                        attrs: { length: e.numeroDePaginas },
                        model: {
                          value: e.paginacion.pagina,
                          callback: function (t) {
                            e.$set(e.paginacion, "pagina", t);
                          },
                          expression: "paginacion.pagina",
                        },
                      }),
                    ],
                    1
                  ),
                ]),
                e._v(" "),
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", icon: "", color: "blue" },
                        on: { click: e.imprimir },
                      },
                      [a("v-icon", [e._v("print")])],
                      1
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-flex",
                  { attrs: { xs12: "", id: "contenedorCodigos" } },
                  e._l(e.productos, function (t, r) {
                    return t[e.clave]
                      ? a(
                          "div",
                          { key: r, staticClass: "contenedor-codigo-barras" },
                          [
                            a(
                              "barcode",
                              {
                                attrs: {
                                  width: "2",
                                  textMargin: "0",
                                  fontSize: "15",
                                  text: t[e.clave],
                                  height: 30,
                                  value: t[e.clave],
                                },
                              },
                              [
                                e._v(
                                  "\n        Error generando código para '" +
                                    e._s(t[e.clave]) +
                                    "'\n      "
                                ),
                              ]
                            ),
                            e._v(" "),
                            a(
                              "span",
                              { staticClass: "descripcion-codigo-barras" },
                              [
                                e._v(
                                  "\n        " +
                                    e._s(t.Descripcion) +
                                    "\n      "
                                ),
                              ]
                            ),
                          ],
                          1
                        )
                      : e._e();
                  }),
                  0
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var l = a("VU/8")(
        s,
        c,
        !1,
        function (e) {
          a("ke26");
        },
        null,
        null
      );
      t.default = l.exports;
    },
    sBh6: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("woOf"),
        o = a.n(r),
        n = a("fZjL"),
        i = a.n(n),
        s = a("8o1w"),
        c = {
          watch: {
            mostrar: function (e) {
              var t = this;
              e &&
                (this.enfocarCodigoDeBarras(),
                this.obtenerSiguienteNumero(),
                this.productoParaDuplicar.Numero &&
                  (delete this.productoParaDuplicar.Numero,
                  (this.productoParaDuplicar.CodigoBarras = ""),
                  i()(this.productoParaDuplicar).forEach(function (e) {
                    var a = e[0].toLowerCase() + e.substr(1, e.length - 1);
                    t.producto[a] = t.productoParaDuplicar[e];
                  })));
            },
          },
          computed: {
            utilidad: function () {
              return this.producto.precioCompra && this.producto.precioVenta
                ? this.producto.precioVenta - this.producto.precioCompra
                : -1;
            },
          },
          methods: {
            enfocarCodigoDeBarras: function () {
              this.$nextTick(this.$refs.inputCodigoBarras.focus);
            },
            enfocarDescripcion: function () {
              this.$nextTick(this.$refs.inputDescripcion.focus);
            },
            obtenerSiguienteNumero: function () {
              var e = this;
              s.b.get("siguiente/numero/producto").then(function (t) {
                e.producto.numero = t;
              });
            },
            resetearFormulario: function () {
              this.$refs.formulario.reset();
            },
            cerrarDialogo: function () {
              this.resetearFormulario(), this.$emit("cerrar-dialogo");
            },
            guardar: function () {
              var e = this;
              if (this.$refs.formulario.validate()) {
                var t = o()({}, this.producto);
                (this.cargando = !0),
                  s.b.post("producto", t).then(function (t) {
                    (e.cargando = !1),
                      !0 === t &&
                        (e.resetearFormulario(),
                        e.enfocarCodigoDeBarras(),
                        e.obtenerSiguienteNumero(),
                        e.$emit("producto-guardado"));
                  });
              }
            },
          },
          props: ["mostrar", "productoParaDuplicar"],
          data: function () {
            return {
              cargando: !1,
              producto: { existencia: 0, numero: 1 },
              reglas: {
                codigoBarras: [
                  function (e) {
                    return (
                      !!e ||
                      "Introduzca el código de barras o invente uno que no exista"
                    );
                  },
                ],
                numero: [
                  function (e) {
                    return e
                      ? !(e < 0) || "El número debe ser positivo"
                      : "Introduzca un código o número";
                  },
                ],
                descripcion: [
                  function (e) {
                    return !!e || "Introduzca la descripción del producto";
                  },
                ],
                precios: [
                  function (e) {
                    return e
                      ? !(e <= 0) || "El precio no puede ser negativo ni cero"
                      : "Introduzca un precio válido";
                  },
                ],
                existencia: [
                  function (e) {
                    return void 0 === e ||
                      null === e ||
                      ("string" == typeof e && e.length <= 0)
                      ? "Introduzca la existencia o 0"
                      : !(e < 0) || "La existencia no puede ser negativa";
                  },
                ],
              },
            };
          },
        },
        l = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-dialog",
              {
                attrs: { persistent: "", "max-width": "500" },
                model: {
                  value: e.mostrar,
                  callback: function (t) {
                    e.mostrar = t;
                  },
                  expression: "mostrar",
                },
              },
              [
                a(
                  "v-card",
                  [
                    a("v-card-title", { staticClass: "headline" }, [
                      e._v("Registrar producto"),
                    ]),
                    e._v(" "),
                    a(
                      "v-card-text",
                      [
                        a(
                          "v-form",
                          { ref: "formulario" },
                          [
                            a(
                              "v-container",
                              { attrs: { fluid: "", "grid-list-md": "" } },
                              [
                                a(
                                  "v-layout",
                                  { attrs: { row: "", wrap: "" } },
                                  [
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "" } },
                                      [
                                        a("v-text-field", {
                                          ref: "inputCodigoBarras",
                                          attrs: {
                                            label:
                                              "Código de barras (no debería repetirse)",
                                            type: "text",
                                            rules: e.reglas.codigoBarras,
                                            hint: "Código de barras. Si no existe, invente uno",
                                          },
                                          on: {
                                            keyup: function (t) {
                                              return "button" in t ||
                                                !e._k(
                                                  t.keyCode,
                                                  "enter",
                                                  13,
                                                  t.key,
                                                  "Enter"
                                                )
                                                ? e.enfocarDescripcion(t)
                                                : null;
                                            },
                                          },
                                          model: {
                                            value: e.producto.codigoBarras,
                                            callback: function (t) {
                                              e.$set(
                                                e.producto,
                                                "codigoBarras",
                                                t
                                              );
                                            },
                                            expression: "producto.codigoBarras",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "" } },
                                      [
                                        a("v-textarea", {
                                          ref: "inputDescripcion",
                                          attrs: {
                                            label: "Descripción",
                                            type: "text",
                                            rows: "3",
                                            rules: e.reglas.descripcion,
                                            hint: "Color, tamaño, talla, lo que describe al producto",
                                            required: "",
                                          },
                                          model: {
                                            value: e.producto.descripcion,
                                            callback: function (t) {
                                              e.$set(
                                                e.producto,
                                                "descripcion",
                                                "string" == typeof t
                                                  ? t.trim()
                                                  : t
                                              );
                                            },
                                            expression: "producto.descripcion",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a("v-flex", { attrs: { xs12: "" } }, [
                                      a("span", { staticClass: "subheading" }, [
                                        e._v("Precios"),
                                      ]),
                                    ]),
                                    e._v(" "),
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "", md6: "" } },
                                      [
                                        a("v-text-field", {
                                          attrs: {
                                            label: "Compra",
                                            type: "number",
                                            rules: e.reglas.precios,
                                            hint: "Lo que el producto cuesta",
                                            required: "",
                                          },
                                          model: {
                                            value: e.producto.precioCompra,
                                            callback: function (t) {
                                              e.$set(
                                                e.producto,
                                                "precioCompra",
                                                e._n(t)
                                              );
                                            },
                                            expression: "producto.precioCompra",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "", md6: "" } },
                                      [
                                        a("v-text-field", {
                                          attrs: {
                                            label: "Venta",
                                            type: "number",
                                            rules: e.reglas.precios,
                                            hint: "Precio en el que el producto se vende",
                                            required: "",
                                          },
                                          model: {
                                            value: e.producto.precioVenta,
                                            callback: function (t) {
                                              e.$set(
                                                e.producto,
                                                "precioVenta",
                                                e._n(t)
                                              );
                                            },
                                            expression: "producto.precioVenta",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a("v-flex", { attrs: { xs12: "" } }, [
                                      a(
                                        "span",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: e.utilidad >= 0,
                                              expression: "utilidad >= 0",
                                            },
                                          ],
                                          staticClass: "subheading",
                                        },
                                        [
                                          e._v("\n                Utilidad: "),
                                          a("strong", [
                                            e._v(
                                              e._s(e._f("currency")(e.utilidad))
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]),
                                    e._v(" "),
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "", md6: "" } },
                                      [
                                        a("v-text-field", {
                                          attrs: {
                                            label: "Stock",
                                            type: "number",
                                            hint: "Si la existencia del producto es menor al stock, le avisaremos",
                                          },
                                          model: {
                                            value: e.producto.stock,
                                            callback: function (t) {
                                              e.$set(
                                                e.producto,
                                                "stock",
                                                e._n(t)
                                              );
                                            },
                                            expression: "producto.stock",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "", md6: "" } },
                                      [
                                        a("v-text-field", {
                                          attrs: {
                                            label: "Existencia actual",
                                            type: "number",
                                            rules: e.reglas.existencia,
                                            hint: "Existencia actual",
                                            required: "",
                                          },
                                          model: {
                                            value: e.producto.existencia,
                                            callback: function (t) {
                                              e.$set(
                                                e.producto,
                                                "existencia",
                                                e._n(t)
                                              );
                                            },
                                            expression: "producto.existencia",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-card-actions",
                      [
                        a("v-spacer"),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: {
                              loading: e.cargando,
                              color: "green darken-1",
                              flat: "flat",
                            },
                            nativeOn: {
                              click: function (t) {
                                e.guardar();
                              },
                            },
                          },
                          [e._v("Guardar")]
                        ),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: { color: "black", flat: "flat" },
                            nativeOn: {
                              click: function (t) {
                                e.cerrarDialogo();
                              },
                            },
                          },
                          [e._v("Cerrar")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        d = a("VU/8")(c, l, !1, null, null, null).exports,
        u = {
          computed: {
            utilidad: function () {
              return this.producto.PrecioCompra && this.producto.PrecioVenta
                ? this.producto.PrecioVenta - this.producto.PrecioCompra
                : -1;
            },
          },
          methods: {
            enfocarDescripcion: function () {
              this.$nextTick(this.$refs.inputDescripcion.focus);
            },
            resetearFormulario: function () {
              this.$refs.formulario.reset();
            },
            cerrarDialogo: function () {
              this.resetearFormulario(), this.$emit("cerrar-dialogo");
            },
            guardar: function () {
              var e = this;
              if (this.$refs.formulario.validate()) {
                var t = o()({}, this.producto);
                (this.cargando = !0),
                  s.b.put("producto", t).then(function (t) {
                    (e.cargando = !1),
                      !0 === t &&
                        (e.resetearFormulario(), e.$emit("producto-guardado"));
                  });
              }
            },
          },
          props: ["mostrar", "producto"],
          data: function () {
            return {
              cargando: !1,
              reglas: {
                numero: [
                  function (e) {
                    return e
                      ? !(e < 0) || "El número debe ser positivo"
                      : "Introduzca un código o número";
                  },
                ],
                descripcion: [
                  function (e) {
                    return !!e || "Introduzca la descripción del producto";
                  },
                ],
                precios: [
                  function (e) {
                    return e
                      ? !(e <= 0) || "El precio no puede ser negativo ni cero"
                      : "Introduzca un precio válido";
                  },
                ],
                existencia: [
                  function (e) {
                    return void 0 === e ||
                      null === e ||
                      ("string" == typeof e && e.length <= 0)
                      ? "Introduzca la existencia o 0"
                      : !(e < 0) || "La existencia no puede ser negativa";
                  },
                ],
              },
            };
          },
        },
        v = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-dialog",
              {
                attrs: { persistent: "", "max-width": "500" },
                model: {
                  value: e.mostrar,
                  callback: function (t) {
                    e.mostrar = t;
                  },
                  expression: "mostrar",
                },
              },
              [
                a(
                  "v-card",
                  [
                    a("v-card-title", { staticClass: "headline" }, [
                      e._v("Modificar producto"),
                    ]),
                    e._v(" "),
                    a(
                      "v-card-text",
                      [
                        a(
                          "v-form",
                          { ref: "formulario" },
                          [
                            a(
                              "v-container",
                              { attrs: { fluid: "", "grid-list-md": "" } },
                              [
                                a(
                                  "v-layout",
                                  { attrs: { row: "", wrap: "" } },
                                  [
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "" } },
                                      [
                                        a("v-text-field", {
                                          attrs: {
                                            readonly: "",
                                            label: "Número",
                                            type: "number",
                                            rules: e.reglas.numero,
                                            hint: "Recuerde que no puede cambiar el número de producto",
                                            required: "",
                                          },
                                          model: {
                                            value: e.producto.Numero,
                                            callback: function (t) {
                                              e.$set(
                                                e.producto,
                                                "Numero",
                                                e._n(t)
                                              );
                                            },
                                            expression: "producto.Numero",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "" } },
                                      [
                                        a("v-text-field", {
                                          attrs: {
                                            label: "Código de barras",
                                            type: "text",
                                            hint: "Código de barras, si es que existe",
                                          },
                                          on: {
                                            keyup: function (t) {
                                              return "button" in t ||
                                                !e._k(
                                                  t.keyCode,
                                                  "enter",
                                                  13,
                                                  t.key,
                                                  "Enter"
                                                )
                                                ? e.enfocarDescripcion(t)
                                                : null;
                                            },
                                          },
                                          model: {
                                            value: e.producto.CodigoBarras,
                                            callback: function (t) {
                                              e.$set(
                                                e.producto,
                                                "CodigoBarras",
                                                t
                                              );
                                            },
                                            expression: "producto.CodigoBarras",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "" } },
                                      [
                                        a("v-textarea", {
                                          ref: "inputDescripcion",
                                          attrs: {
                                            label: "Descripción",
                                            type: "text",
                                            rows: "3",
                                            rules: e.reglas.descripcion,
                                            hint: "Color, tamaño, talla, lo que describe al producto",
                                            required: "",
                                          },
                                          model: {
                                            value: e.producto.Descripcion,
                                            callback: function (t) {
                                              e.$set(
                                                e.producto,
                                                "Descripcion",
                                                "string" == typeof t
                                                  ? t.trim()
                                                  : t
                                              );
                                            },
                                            expression: "producto.Descripcion",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a("v-flex", { attrs: { xs12: "" } }, [
                                      a("span", { staticClass: "subheading" }, [
                                        e._v("Precios"),
                                      ]),
                                    ]),
                                    e._v(" "),
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "", md6: "" } },
                                      [
                                        a("v-text-field", {
                                          attrs: {
                                            label: "Compra",
                                            type: "number",
                                            rules: e.reglas.precios,
                                            hint: "Lo que el producto cuesta",
                                            required: "",
                                          },
                                          model: {
                                            value: e.producto.PrecioCompra,
                                            callback: function (t) {
                                              e.$set(
                                                e.producto,
                                                "PrecioCompra",
                                                e._n(t)
                                              );
                                            },
                                            expression: "producto.PrecioCompra",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "", md6: "" } },
                                      [
                                        a("v-text-field", {
                                          attrs: {
                                            label: "Venta",
                                            type: "number",
                                            rules: e.reglas.precios,
                                            hint: "Precio en el que el producto se vende",
                                            required: "",
                                          },
                                          model: {
                                            value: e.producto.PrecioVenta,
                                            callback: function (t) {
                                              e.$set(
                                                e.producto,
                                                "PrecioVenta",
                                                e._n(t)
                                              );
                                            },
                                            expression: "producto.PrecioVenta",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a("v-flex", { attrs: { xs12: "" } }, [
                                      a(
                                        "span",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: e.utilidad >= 0,
                                              expression: "utilidad >= 0",
                                            },
                                          ],
                                          staticClass: "subheading",
                                        },
                                        [
                                          e._v("\n                Utilidad: "),
                                          a("strong", [
                                            e._v(
                                              e._s(e._f("currency")(e.utilidad))
                                            ),
                                          ]),
                                        ]
                                      ),
                                    ]),
                                    e._v(" "),
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "", md6: "" } },
                                      [
                                        a("v-text-field", {
                                          attrs: {
                                            label: "Stock",
                                            type: "number",
                                            hint: "Si la existencia del producto es menor al stock, le avisaremos",
                                          },
                                          model: {
                                            value: e.producto.Stock,
                                            callback: function (t) {
                                              e.$set(
                                                e.producto,
                                                "Stock",
                                                e._n(t)
                                              );
                                            },
                                            expression: "producto.Stock",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "", md6: "" } },
                                      [
                                        a("v-text-field", {
                                          attrs: {
                                            label: "Existencia actual",
                                            type: "number",
                                            rules: e.reglas.existencia,
                                            hint: "Existencia actual",
                                            required: "",
                                          },
                                          model: {
                                            value: e.producto.Existencia,
                                            callback: function (t) {
                                              e.$set(
                                                e.producto,
                                                "Existencia",
                                                e._n(t)
                                              );
                                            },
                                            expression: "producto.Existencia",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-card-actions",
                      [
                        a("v-spacer"),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: {
                              loading: e.cargando,
                              color: "green darken-1",
                              flat: "flat",
                            },
                            nativeOn: {
                              click: function (t) {
                                e.guardar();
                              },
                            },
                          },
                          [e._v("Guardar")]
                        ),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: { color: "gray", flat: "flat" },
                            nativeOn: {
                              click: function (t) {
                                e.cerrarDialogo();
                              },
                            },
                          },
                          [e._v("Cancelar")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        p = a("VU/8")(u, v, !1, null, null, null).exports,
        m = {
          name: "ExportarImportar",
          methods: {
            exportar: function () {
              var e = this;
              (this.cargando = !0),
                s.b
                  .put("exportar", this.configuracionParaExportar)
                  .then(function (t) {
                    (e.cargando = !1), t && (e.snackbars.exportacion = !0);
                  });
            },
            importar: function () {
              var e = this,
                t = this.$refs.archivoImportar.files;
              if (t.length > 0) {
                this.cargando = !0;
                var a = t[0],
                  r = new FormData();
                r.append("archivo", a),
                  r.append(
                    "TieneEncabezados",
                    this.configuracionParaImportar.TieneEncabezados.toString()
                  ),
                  r.append(
                    "IgnorarCodigosDeBarrasRepetidos",
                    (
                      "Ignorar" === this.configuracionParaImportar.EnRepetidos
                    ).toString()
                  ),
                  r.append(
                    "IndiceCodigoBarras",
                    this.configuracionParaImportar.IndiceCodigoBarras.toString()
                  ),
                  r.append(
                    "IndiceDescripcion",
                    this.configuracionParaImportar.IndiceDescripcion.toString()
                  ),
                  r.append(
                    "IndicePrecioCompra",
                    this.configuracionParaImportar.IndicePrecioCompra.toString()
                  ),
                  r.append(
                    "IndicePrecioVenta",
                    this.configuracionParaImportar.IndicePrecioVenta.toString()
                  ),
                  r.append(
                    "IndiceExistencia",
                    this.configuracionParaImportar.IndiceExistencia.toString()
                  ),
                  r.append(
                    "IndiceStock",
                    this.configuracionParaImportar.IndiceStock.toString()
                  ),
                  s.b.postArchivo("importar/excel", r).then(function (t) {
                    (e.cargando = !1),
                      t &&
                        ((e.snackbars.importacion = !0), e.$emit("importado"));
                  });
              } else this.snackbars.noHayArchivos = !0;
            },
          },
          data: function () {
            return {
              snackbars: {
                exportacion: !1,
                noHayArchivos: !1,
                importacion: !1,
              },
              opcionesParaImportarRepetidos: ["Ignorar", "Remplazar"],
              indicesColumnas: [
                {
                  indice: 0,
                  descripcion: "El archivo no contiene esta columna",
                },
                { indice: 1, descripcion: 1 },
                { indice: 2, descripcion: 2 },
                { indice: 3, descripcion: 3 },
                { indice: 4, descripcion: 4 },
                { indice: 5, descripcion: 5 },
                { indice: 6, descripcion: 6 },
                { indice: 7, descripcion: 7 },
                { indice: 8, descripcion: 8 },
                { indice: 9, descripcion: 9 },
                { indice: 10, descripcion: 10 },
              ],
              configuracionParaExportar: {
                Extension: "csv",
                Copias: 1,
                IncluirEncabezado: !0,
              },
              configuracionParaImportar: {
                TieneEncabezados: !0,
                IndiceCodigoBarras: 1,
                IndiceDescripcion: 2,
                IndicePrecioCompra: 3,
                IndicePrecioVenta: 4,
                IndiceExistencia: 5,
                IndiceStock: 6,
                EnRepetidos: "Ignorar",
              },
              mostrarDialogo: !1,
              cargando: !1,
            };
          },
        },
        f = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-flex",
              { attrs: { xs12: "" } },
              [
                a(
                  "a",
                  {
                    on: {
                      click: function (t) {
                        e.mostrarDialogo = !0;
                      },
                    },
                  },
                  [e._v("Exportar o importar productos")]
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 5e3, bottom: !0 },
                    model: {
                      value: e.snackbars.exportacion,
                      callback: function (t) {
                        e.$set(e.snackbars, "exportacion", t);
                      },
                      expression: "snackbars.exportacion",
                    },
                  },
                  [
                    e._v("\n    Exportado con éxito\n    "),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.exportacion = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 5e3, bottom: !0 },
                    model: {
                      value: e.snackbars.noHayArchivos,
                      callback: function (t) {
                        e.$set(e.snackbars, "noHayArchivos", t);
                      },
                      expression: "snackbars.noHayArchivos",
                    },
                  },
                  [
                    e._v("\n    No ha seleccionado ningún archivo\n    "),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.noHayArchivos = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 5e3, bottom: !0 },
                    model: {
                      value: e.snackbars.importacion,
                      callback: function (t) {
                        e.$set(e.snackbars, "importacion", t);
                      },
                      expression: "snackbars.importacion",
                    },
                  },
                  [
                    e._v("\n    Importado con éxito\n    "),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.importacion = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-dialog",
                  {
                    attrs: { persistent: "", fullscreen: "" },
                    model: {
                      value: e.mostrarDialogo,
                      callback: function (t) {
                        e.mostrarDialogo = t;
                      },
                      expression: "mostrarDialogo",
                    },
                  },
                  [
                    a(
                      "v-card",
                      [
                        a(
                          "v-toolbar",
                          { attrs: { dark: "", color: "cyan" } },
                          [
                            a(
                              "v-btn",
                              {
                                attrs: { icon: "", dark: "" },
                                nativeOn: {
                                  click: function (t) {
                                    e.mostrarDialogo = !1;
                                  },
                                },
                              },
                              [a("v-icon", [e._v("close")])],
                              1
                            ),
                            e._v(" "),
                            a("v-toolbar-title", [
                              e._v("Exportar o importar productos"),
                            ]),
                          ],
                          1
                        ),
                        e._v(" "),
                        a(
                          "v-card-text",
                          [
                            a(
                              "v-tabs",
                              {
                                attrs: {
                                  centered: "",
                                  color: "cyan",
                                  dark: "",
                                  "icons-and-text": "",
                                },
                              },
                              [
                                a("v-tabs-slider", {
                                  attrs: { color: "yellow" },
                                }),
                                e._v(" "),
                                a(
                                  "v-tab",
                                  { attrs: { href: "#tab-1" } },
                                  [
                                    e._v("Exportar\n            "),
                                    a("v-icon", [e._v("cloud_download")]),
                                  ],
                                  1
                                ),
                                e._v(" "),
                                a(
                                  "v-tab",
                                  { attrs: { href: "#tab-2" } },
                                  [
                                    e._v("Importar\n            "),
                                    a("v-icon", [e._v("cloud_upload")]),
                                  ],
                                  1
                                ),
                                e._v(" "),
                                a(
                                  "v-tab-item",
                                  { attrs: { value: "tab-1" } },
                                  [
                                    a(
                                      "v-card",
                                      { attrs: { flat: "" } },
                                      [
                                        a(
                                          "v-card-text",
                                          [
                                            a(
                                              "v-radio-group",
                                              {
                                                model: {
                                                  value:
                                                    e.configuracionParaExportar
                                                      .Extension,
                                                  callback: function (t) {
                                                    e.$set(
                                                      e.configuracionParaExportar,
                                                      "Extension",
                                                      t
                                                    );
                                                  },
                                                  expression:
                                                    "configuracionParaExportar.Extension",
                                                },
                                              },
                                              [
                                                a("p", [
                                                  e._v(
                                                    "Formato de exportación"
                                                  ),
                                                ]),
                                                e._v(" "),
                                                a("v-radio", {
                                                  attrs: {
                                                    label:
                                                      "CSV o valores separados por coma",
                                                    value: "csv",
                                                  },
                                                }),
                                                e._v(" "),
                                                a("v-radio", {
                                                  attrs: {
                                                    label:
                                                      "Formato de Microsoft Excel",
                                                    value: "xlsx",
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                            e._v(" "),
                                            a("v-checkbox", {
                                              attrs: {
                                                label: "Incluir encabezado",
                                              },
                                              model: {
                                                value:
                                                  e.configuracionParaExportar
                                                    .IncluirEncabezado,
                                                callback: function (t) {
                                                  e.$set(
                                                    e.configuracionParaExportar,
                                                    "IncluirEncabezado",
                                                    t
                                                  );
                                                },
                                                expression:
                                                  "configuracionParaExportar.IncluirEncabezado",
                                              },
                                            }),
                                            e._v(" "),
                                            a("v-text-field", {
                                              attrs: {
                                                label: "Copias",
                                                type: "number",
                                                hint: "¿Cuántos copias de cada producto desea exportar? por defecto es 1",
                                              },
                                              model: {
                                                value:
                                                  e.configuracionParaExportar
                                                    .Copias,
                                                callback: function (t) {
                                                  e.$set(
                                                    e.configuracionParaExportar,
                                                    "Copias",
                                                    e._n(t)
                                                  );
                                                },
                                                expression:
                                                  "configuracionParaExportar.Copias",
                                              },
                                            }),
                                            e._v(" "),
                                            a(
                                              "v-alert",
                                              {
                                                attrs: {
                                                  outline: "",
                                                  type: "info",
                                                },
                                                model: {
                                                  value: e.mostrarDialogo,
                                                  callback: function (t) {
                                                    e.mostrarDialogo = t;
                                                  },
                                                  expression: "mostrarDialogo",
                                                },
                                              },
                                              [
                                                a("p", [
                                                  e._v(
                                                    "\n                    El archivo será exportado en el directorio en donde se\n                    está ejecutando esta aplicación\n                    "
                                                  ),
                                                  a("br"),
                                                  e._v(
                                                    "\n                    Tenga en cuenta que el tiempo para generar el archivo\n                    dependerá de la velocidad de su equipo y de la cantidad de\n                    productos\n                    "
                                                  ),
                                                  a("br"),
                                                  e._v(" "),
                                                  a("strong", [
                                                    e._v("Advertencia: "),
                                                  ]),
                                                  e._v(
                                                    " cualquier archivo exportado\n                    anteriormente será eliminado\n                  "
                                                  ),
                                                ]),
                                              ]
                                            ),
                                            e._v(" "),
                                            a(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  loading: e.cargando,
                                                  small: "",
                                                  color: "success",
                                                },
                                                on: { click: e.exportar },
                                              },
                                              [e._v("Comenzar a exportar")]
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                                e._v(" "),
                                a(
                                  "v-tab-item",
                                  { attrs: { value: "tab-2" } },
                                  [
                                    a(
                                      "v-card",
                                      { attrs: { flat: "" } },
                                      [
                                        a(
                                          "v-card-text",
                                          [
                                            a("p", [
                                              e._v(
                                                "Seleccione el archivo de Excel"
                                              ),
                                            ]),
                                            e._v(" "),
                                            a(
                                              "v-container",
                                              {
                                                attrs: {
                                                  fluid: "",
                                                  "grid-list-md": "",
                                                },
                                              },
                                              [
                                                a(
                                                  "v-layout",
                                                  {
                                                    attrs: {
                                                      row: "",
                                                      wrap: "",
                                                    },
                                                  },
                                                  [
                                                    a(
                                                      "v-flex",
                                                      { attrs: { xs12: "" } },
                                                      [
                                                        a("input", {
                                                          ref: "archivoImportar",
                                                          attrs: {
                                                            accept: ".xlsx",
                                                            name: "archivoImportar",
                                                            id: "archivoImportar",
                                                            type: "file",
                                                          },
                                                        }),
                                                      ]
                                                    ),
                                                  ],
                                                  1
                                                ),
                                              ],
                                              1
                                            ),
                                            e._v(" "),
                                            a("v-checkbox", {
                                              attrs: {
                                                label:
                                                  "¿El archivo tiene encabezado?",
                                                hint: "Si selecciona esta opción, la primera fila será omitida",
                                              },
                                              model: {
                                                value:
                                                  e.configuracionParaImportar
                                                    .TieneEncabezados,
                                                callback: function (t) {
                                                  e.$set(
                                                    e.configuracionParaImportar,
                                                    "TieneEncabezados",
                                                    t
                                                  );
                                                },
                                                expression:
                                                  "configuracionParaImportar.TieneEncabezados",
                                              },
                                            }),
                                            e._v(" "),
                                            a("v-select", {
                                              attrs: {
                                                items:
                                                  e.opcionesParaImportarRepetidos,
                                                label:
                                                  "En caso de que se encuentren códigos de barras repetidos...",
                                                hint: "Si se encuentran códigos de barras repetidos, ¿qué desea hacer?",
                                                outline: "",
                                              },
                                              model: {
                                                value:
                                                  e.configuracionParaImportar
                                                    .EnRepetidos,
                                                callback: function (t) {
                                                  e.$set(
                                                    e.configuracionParaImportar,
                                                    "EnRepetidos",
                                                    t
                                                  );
                                                },
                                                expression:
                                                  "configuracionParaImportar.EnRepetidos",
                                              },
                                            }),
                                            e._v(" "),
                                            a("h2", [
                                              e._v("Configuración de columnas"),
                                            ]),
                                            e._v(" "),
                                            a("v-select", {
                                              attrs: {
                                                items: e.indicesColumnas,
                                                "item-text": "descripcion",
                                                "item-value": "indice",
                                                label:
                                                  "La columna que tiene el código de barras es la número...",
                                                outline: "",
                                              },
                                              model: {
                                                value:
                                                  e.configuracionParaImportar
                                                    .IndiceCodigoBarras,
                                                callback: function (t) {
                                                  e.$set(
                                                    e.configuracionParaImportar,
                                                    "IndiceCodigoBarras",
                                                    t
                                                  );
                                                },
                                                expression:
                                                  "configuracionParaImportar.IndiceCodigoBarras",
                                              },
                                            }),
                                            e._v(" "),
                                            a("v-select", {
                                              attrs: {
                                                items: e.indicesColumnas,
                                                "item-text": "descripcion",
                                                "item-value": "indice",
                                                label:
                                                  "La columna que tiene la descripción del producto es la número...",
                                                outline: "",
                                              },
                                              model: {
                                                value:
                                                  e.configuracionParaImportar
                                                    .IndiceDescripcion,
                                                callback: function (t) {
                                                  e.$set(
                                                    e.configuracionParaImportar,
                                                    "IndiceDescripcion",
                                                    t
                                                  );
                                                },
                                                expression:
                                                  "configuracionParaImportar.IndiceDescripcion",
                                              },
                                            }),
                                            e._v(" "),
                                            a("v-select", {
                                              attrs: {
                                                items: e.indicesColumnas,
                                                "item-text": "descripcion",
                                                "item-value": "indice",
                                                label:
                                                  "La columna que tiene el precio de compra es la número...",
                                                outline: "",
                                              },
                                              model: {
                                                value:
                                                  e.configuracionParaImportar
                                                    .IndicePrecioCompra,
                                                callback: function (t) {
                                                  e.$set(
                                                    e.configuracionParaImportar,
                                                    "IndicePrecioCompra",
                                                    t
                                                  );
                                                },
                                                expression:
                                                  "configuracionParaImportar.IndicePrecioCompra",
                                              },
                                            }),
                                            e._v(" "),
                                            a("v-select", {
                                              attrs: {
                                                items: e.indicesColumnas,
                                                "item-text": "descripcion",
                                                "item-value": "indice",
                                                label:
                                                  "La columna que tiene el precio de venta es la número...",
                                                outline: "",
                                              },
                                              model: {
                                                value:
                                                  e.configuracionParaImportar
                                                    .IndicePrecioVenta,
                                                callback: function (t) {
                                                  e.$set(
                                                    e.configuracionParaImportar,
                                                    "IndicePrecioVenta",
                                                    t
                                                  );
                                                },
                                                expression:
                                                  "configuracionParaImportar.IndicePrecioVenta",
                                              },
                                            }),
                                            e._v(" "),
                                            a("v-select", {
                                              attrs: {
                                                items: e.indicesColumnas,
                                                "item-text": "descripcion",
                                                "item-value": "indice",
                                                label:
                                                  "La columna que tiene la existencia es la número...",
                                                outline: "",
                                              },
                                              model: {
                                                value:
                                                  e.configuracionParaImportar
                                                    .IndiceExistencia,
                                                callback: function (t) {
                                                  e.$set(
                                                    e.configuracionParaImportar,
                                                    "IndiceExistencia",
                                                    t
                                                  );
                                                },
                                                expression:
                                                  "configuracionParaImportar.IndiceExistencia",
                                              },
                                            }),
                                            e._v(" "),
                                            a("v-select", {
                                              attrs: {
                                                items: e.indicesColumnas,
                                                "item-text": "descripcion",
                                                "item-value": "indice",
                                                label:
                                                  "La columna que tiene la cantidad mínima del producto es la número...",
                                                outline: "",
                                              },
                                              model: {
                                                value:
                                                  e.configuracionParaImportar
                                                    .IndiceStock,
                                                callback: function (t) {
                                                  e.$set(
                                                    e.configuracionParaImportar,
                                                    "IndiceStock",
                                                    t
                                                  );
                                                },
                                                expression:
                                                  "configuracionParaImportar.IndiceStock",
                                              },
                                            }),
                                            e._v(" "),
                                            a(
                                              "v-alert",
                                              {
                                                attrs: {
                                                  outline: "",
                                                  type: "info",
                                                },
                                                model: {
                                                  value: e.mostrarDialogo,
                                                  callback: function (t) {
                                                    e.mostrarDialogo = t;
                                                  },
                                                  expression: "mostrarDialogo",
                                                },
                                              },
                                              [
                                                a("p", [
                                                  e._v(
                                                    "\n                    Tenga en cuenta que el tiempo para importar los productos\n                    dependerá de la velocidad de su equipo y de la cantidad de\n                    los mismos\n                    "
                                                  ),
                                                  a("br"),
                                                  e._v(" "),
                                                  a("strong", [
                                                    e._v("Advertencia: "),
                                                  ]),
                                                  e._v(
                                                    " revise bien las opciones\n                    que seleccionó antes de importar, para evitar resultados\n                    inesperados\n                  "
                                                  ),
                                                ]),
                                              ]
                                            ),
                                            e._v(" "),
                                            a(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  loading: e.cargando,
                                                  small: "",
                                                  color: "success",
                                                },
                                                on: { click: e.importar },
                                              },
                                              [e._v("Comenzar a importar")]
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        e._v(" "),
                        a(
                          "v-card-actions",
                          [
                            a("v-spacer"),
                            e._v(" "),
                            a(
                              "v-btn",
                              {
                                attrs: { color: "gray", flat: "flat" },
                                nativeOn: {
                                  click: function (t) {
                                    e.mostrarDialogo = !1;
                                  },
                                },
                              },
                              [e._v("Cerrar")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        h = a("VU/8")(m, f, !1, null, null, null).exports,
        g = {
          components: { Publicidad: a("nBfo").a, ExportarImportar: h },
          computed: {
            numeroDePaginas: function () {
              return null == this.paginacion.conteoProductos
                ? 0
                : Math.ceil(
                    this.paginacion.conteoProductos / this.paginacion.limite
                  );
            },
          },
          data: function () {
            return {
              deberiaReiniciarPaginacionAlBuscar: !1,
              cargando: !1,
              paginacion: {
                offset: 0,
                limite: 7,
                conteoProductos: 0,
                pagina: 1,
              },
              busqueda: "",
              productos: [],
              encabezados: [
                { text: "#", align: "left", value: "Numero" },
                {
                  text: "Código de barras",
                  align: "left",
                  value: "CodigoBarras",
                },
                { text: "Descripción", value: "Descripcion" },
                { text: "P. compra", value: "PrecioCompra" },
                { text: "P. venta", value: "PrecioVenta" },
                { text: "Utilidad", value: "Utilidad" },
                { text: "Existencia", value: "Existencia" },
                { text: "Stock", value: "Stock" },
                { text: "Opciones", sortable: !1 },
              ],
            };
          },
          watch: {
            busqueda: function () {
              this.obtener();
            },
            paginacion: {
              handler: function () {
                this.obtener();
              },
              deep: !0,
            },
          },
          beforeMount: function () {
            this.obtener();
          },
          methods: {
            obtener: function () {
              var e = this;
              this.cargando = !0;
              var t =
                this.paginacion.pagina > 1
                  ? (this.paginacion.pagina - 1) * this.paginacion.limite
                  : 0;
              this.busqueda
                ? (this.deberiaReiniciarPaginacionAlBuscar &&
                    ((this.paginacion.pagina = 1),
                    (t = 0),
                    (this.deberiaReiniciarPaginacionAlBuscar = !1)),
                  s.b
                    .get(
                      "buscar/productos/" +
                        t +
                        "/" +
                        this.paginacion.limite +
                        "/" +
                        encodeURIComponent(this.busqueda)
                    )
                    .then(function (t) {
                      (e.productos = t.Productos),
                        (e.paginacion.conteoProductos = t.Conteo),
                        (e.cargando = !1);
                    }))
                : ((this.deberiaReiniciarPaginacionAlBuscar = !0),
                  s.b
                    .get("productos/" + t + "/" + this.paginacion.limite)
                    .then(function (t) {
                      (e.productos = t.Productos),
                        (e.paginacion.conteoProductos = t.Conteo),
                        (e.cargando = !1);
                    }));
            },
            editar: function (e) {
              this.$emit("editar-producto", e);
            },
            eliminar: function (e) {
              this.$emit("eliminar-producto", e);
            },
            aumentarExistencia: function (e) {
              this.$emit("aumentar-existencia", e);
            },
            restarExistencia: function (e) {
              this.$emit("restar-existencia", e);
            },
            duplicar: function (e) {
              this.$emit("duplicar-producto", e);
            },
          },
        },
        b = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-flex",
              { attrs: { xs12: "" } },
              [
                a("Publicidad"),
                e._v(" "),
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a("v-text-field", {
                      attrs: {
                        label: "Buscar un producto por su descripción",
                        "prepend-icon": "search",
                        solo: "",
                        clearable: "",
                      },
                      model: {
                        value: e.busqueda,
                        callback: function (t) {
                          e.busqueda = t;
                        },
                        expression: "busqueda",
                      },
                    }),
                  ],
                  1
                ),
                e._v(" "),
                a("br"),
                e._v(" "),
                a(
                  "div",
                  { staticClass: "text-xs-center pt-2" },
                  [
                    a("v-pagination", {
                      attrs: { length: e.numeroDePaginas },
                      model: {
                        value: e.paginacion.pagina,
                        callback: function (t) {
                          e.$set(e.paginacion, "pagina", t);
                        },
                        expression: "paginacion.pagina",
                      },
                    }),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-data-table",
                  {
                    staticClass: "elevation-1",
                    attrs: {
                      loading: e.cargando,
                      headers: e.encabezados,
                      items: e.productos,
                      "hide-actions": "",
                    },
                    scopedSlots: e._u([
                      {
                        key: "items",
                        fn: function (t) {
                          return [
                            a("td", [e._v(e._s(t.item.Numero))]),
                            e._v(" "),
                            a("td", [e._v(e._s(t.item.CodigoBarras))]),
                            e._v(" "),
                            a("td", [e._v(e._s(t.item.Descripcion))]),
                            e._v(" "),
                            a("td", [
                              e._v(e._s(e._f("currency")(t.item.PrecioCompra))),
                            ]),
                            e._v(" "),
                            a("td", [
                              e._v(e._s(e._f("currency")(t.item.PrecioVenta))),
                            ]),
                            e._v(" "),
                            a("td", [
                              e._v(
                                "\n        " +
                                  e._s(
                                    e._f("currency")(
                                      t.item.PrecioVenta - t.item.PrecioCompra
                                    )
                                  ) +
                                  "\n      "
                              ),
                            ]),
                            e._v(" "),
                            a("td", [e._v(e._s(t.item.Existencia))]),
                            e._v(" "),
                            a("td", [e._v(e._s(t.item.Stock))]),
                            e._v(" "),
                            a(
                              "td",
                              { staticClass: "justify-center layout px-0" },
                              [
                                a(
                                  "v-btn",
                                  {
                                    staticClass: "mx-0",
                                    attrs: {
                                      title: "Crear una copia",
                                      icon: "",
                                    },
                                    on: {
                                      click: function (a) {
                                        e.duplicar(t.item);
                                      },
                                    },
                                  },
                                  [
                                    a(
                                      "v-icon",
                                      { attrs: { color: "green darken-3" } },
                                      [e._v("file_copy")]
                                    ),
                                  ],
                                  1
                                ),
                                e._v(" "),
                                a(
                                  "v-btn",
                                  {
                                    staticClass: "mx-0",
                                    attrs: {
                                      title: "Restar existencia",
                                      icon: "",
                                    },
                                    on: {
                                      click: function (a) {
                                        e.restarExistencia(t.item);
                                      },
                                    },
                                  },
                                  [
                                    a(
                                      "v-icon",
                                      { attrs: { color: "orange darken-3" } },
                                      [e._v("remove_circle")]
                                    ),
                                  ],
                                  1
                                ),
                                e._v(" "),
                                a(
                                  "v-btn",
                                  {
                                    staticClass: "mx-0",
                                    attrs: {
                                      title: "Aumentar existencia",
                                      icon: "",
                                    },
                                    on: {
                                      click: function (a) {
                                        e.aumentarExistencia(t.item);
                                      },
                                    },
                                  },
                                  [
                                    a(
                                      "v-icon",
                                      { attrs: { color: "blue darken-3" } },
                                      [e._v("add_circle")]
                                    ),
                                  ],
                                  1
                                ),
                                e._v(" "),
                                a(
                                  "v-btn",
                                  {
                                    staticClass: "mx-0",
                                    attrs: {
                                      title: "Editar/modificar",
                                      icon: "",
                                    },
                                    on: {
                                      click: function (a) {
                                        e.editar(t.item);
                                      },
                                    },
                                  },
                                  [
                                    a(
                                      "v-icon",
                                      { attrs: { color: "amber darken-4" } },
                                      [e._v("edit")]
                                    ),
                                  ],
                                  1
                                ),
                                e._v(" "),
                                a(
                                  "v-btn",
                                  {
                                    staticClass: "mx-0",
                                    attrs: { title: "Eliminar", icon: "" },
                                    on: {
                                      click: function (a) {
                                        e.eliminar(t.item);
                                      },
                                    },
                                  },
                                  [
                                    a("v-icon", { attrs: { color: "red" } }, [
                                      e._v("delete"),
                                    ]),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ];
                        },
                      },
                    ]),
                  },
                  [
                    a(
                      "template",
                      { slot: "no-data" },
                      [
                        a(
                          "v-alert",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !e.busqueda,
                                expression: "!busqueda",
                              },
                            ],
                            attrs: { value: !0, color: "info" },
                          },
                          [
                            a(
                              "div",
                              { staticClass: "text-xs-center" },
                              [
                                a("h1", [e._v("No hay productos")]),
                                e._v(" "),
                                a("v-icon", { staticClass: "icono-grande" }, [
                                  e._v("announcement"),
                                ]),
                                e._v(" "),
                                a(
                                  "p",
                                  [
                                    e._v(
                                      "\n            No has registrado ningún producto. Agrega uno con el botón\n            "
                                    ),
                                    a("v-icon", [e._v("add")]),
                                    e._v(
                                      "\n            de la esquina\n          "
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ]
                        ),
                        e._v(" "),
                        a(
                          "v-alert",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: e.busqueda,
                                expression: "busqueda",
                              },
                            ],
                            attrs: { value: !0, color: "info", dark: "" },
                          },
                          [
                            a(
                              "div",
                              { staticClass: "text-xs-center" },
                              [
                                a("h1", [e._v("Sin resultados")]),
                                e._v(" "),
                                a("v-icon", { staticClass: "icono-grande" }, [
                                  e._v("highlight_off"),
                                ]),
                                e._v(" "),
                                a("p", [
                                  e._v(
                                    '\n            No hay productos que coincidan con "\n            '
                                  ),
                                  a("strong", [e._v(e._s(e.busqueda))]),
                                  e._v('"\n          '),
                                ]),
                              ],
                              1
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ],
                  2
                ),
                e._v(" "),
                a("exportar-importar", { on: { importado: e.obtener } }),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        A = a("VU/8")(g, b, !1, null, null, null).exports,
        _ = {
          props: ["mostrar", "producto"],
          data: function () {
            return { cargando: !1 };
          },
          methods: {
            confirmarEliminacion: function () {
              var e = this;
              (this.cargando = !0),
                s.b
                  .delete("producto/" + this.producto.Numero)
                  .then(function (t) {
                    (e.cargando = !1),
                      e.$emit("producto-eliminado"),
                      e.ocultarDialogo();
                  });
            },
            ocultarDialogo: function () {
              this.$emit("cerrar-dialogo");
            },
          },
        },
        x = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-dialog",
              {
                attrs: { "max-width": "400" },
                model: {
                  value: e.mostrar,
                  callback: function (t) {
                    e.mostrar = t;
                  },
                  expression: "mostrar",
                },
              },
              [
                a(
                  "v-card",
                  [
                    a("v-card-title", { staticClass: "headline" }, [
                      e._v("Confirmar eliminación"),
                    ]),
                    e._v(" "),
                    a("v-card-text", [
                      e._v(
                        "\n      ¿Realmente desea eliminar el producto con la descripción\n      "
                      ),
                      a("strong", [e._v(e._s(e.producto.Descripcion))]),
                      e._v(" y el número\n      "),
                      a("strong", [e._v(e._s(e.producto.Numero))]),
                      e._v("?\n      "),
                      a("br"),
                      e._v("\n      Esta acción no se puede revertir.\n    "),
                    ]),
                    e._v(" "),
                    a(
                      "v-card-actions",
                      [
                        a("v-spacer"),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: {
                              loading: e.cargando,
                              color: "green darken-1",
                              flat: "flat",
                            },
                            on: {
                              click: function (t) {
                                e.confirmarEliminacion();
                              },
                            },
                          },
                          [e._v("Sí, eliminar\n      ")]
                        ),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: { color: "black", flat: "flat" },
                            nativeOn: {
                              click: function (t) {
                                e.ocultarDialogo();
                              },
                            },
                          },
                          [e._v("Cancelar")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        k = a("VU/8")(_, x, !1, null, null, null).exports,
        C = a("NHnr"),
        E = {
          name: "DialogoAumentarExistencia",
          props: ["mostrar", "producto"],
          data: function () {
            return {
              cantidadQueSeAgrega: null,
              cargando: !1,
              reglas: {
                cantidad: [
                  function (e) {
                    return e
                      ? !((e = parseFloat(e)) <= 0) || "Cantidad inválida"
                      : "Ingrese la cantidad";
                  },
                ],
              },
            };
          },
          methods: {
            guardar: function () {
              var e = this;
              if (!this.cargando && this.$refs.formulario.validate()) {
                var t = o()({}, this.producto);
                (t.Existencia += this.cantidadQueSeAgrega),
                  (this.cargando = !0),
                  s.b.put("producto", t).then(function (t) {
                    t &&
                      (e.$emit("aumentado"),
                      (e.cantidadQueSeAgrega = null),
                      (e.cargando = !1));
                  });
              }
            },
            cerrarDialogo: function () {
              this.$refs.formulario.reset(), this.$emit("cerrar");
            },
          },
          watch: {
            mostrar: function (e) {
              e &&
                (this.$nextTick(this.$refs.cantidad.focus),
                this.$refs.formulario.reset(),
                (this.cantidadQueSeAgrega = null));
            },
          },
        },
        y = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-dialog",
              {
                attrs: { persistent: "", "max-width": "500" },
                model: {
                  value: e.mostrar,
                  callback: function (t) {
                    e.mostrar = t;
                  },
                  expression: "mostrar",
                },
              },
              [
                a(
                  "v-card",
                  [
                    a("v-card-title", { staticClass: "headline" }, [
                      e._v("Agregar inventario"),
                    ]),
                    e._v(" "),
                    a(
                      "v-card-text",
                      [
                        a("p", [
                          a("strong", [e._v("Producto: ")]),
                          e._v(" " + e._s(e.producto.Descripcion) + " "),
                          a("br"),
                          e._v(" "),
                          a("strong", [e._v("ID: ")]),
                          e._v(" " + e._s(e.producto.Numero)),
                          a("br"),
                          e._v(" "),
                          a("strong", [e._v("Código de barras: ")]),
                          e._v(" " + e._s(e.producto.CodigoBarras)),
                          a("br"),
                          e._v(" "),
                          a("strong", [e._v("Existencia actual: ")]),
                          e._v(" " + e._s(e.producto.Existencia) + " "),
                          a("br"),
                        ]),
                        e._v(" "),
                        a(
                          "v-form",
                          { ref: "formulario" },
                          [
                            a(
                              "v-container",
                              { attrs: { fluid: "", "grid-list-md": "" } },
                              [
                                a(
                                  "v-layout",
                                  { attrs: { row: "", wrap: "" } },
                                  [
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "" } },
                                      [
                                        a("v-text-field", {
                                          ref: "cantidad",
                                          attrs: {
                                            label: "Cantidad a agregar",
                                            type: "number",
                                            rules: e.reglas.cantidad,
                                            hint: "¿Cuántos productos de este tipo agrega?",
                                            required: "",
                                          },
                                          nativeOn: {
                                            keydown: function (t) {
                                              if (
                                                !("button" in t) &&
                                                e._k(
                                                  t.keyCode,
                                                  "enter",
                                                  13,
                                                  t.key,
                                                  "Enter"
                                                )
                                              )
                                                return null;
                                              t.preventDefault(), e.guardar();
                                            },
                                          },
                                          model: {
                                            value: e.cantidadQueSeAgrega,
                                            callback: function (t) {
                                              e.cantidadQueSeAgrega = e._n(t);
                                            },
                                            expression: "cantidadQueSeAgrega",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        e._v(" "),
                        a(
                          "p",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: e.cantidadQueSeAgrega,
                                expression: "cantidadQueSeAgrega",
                              },
                            ],
                          },
                          [
                            e._v(
                              "\n        Una vez guardada, la existencia del producto será de:"
                            ),
                            a("br"),
                            e._v(" "),
                            a("span", { staticClass: "title" }, [
                              e._v(
                                e._s(
                                  e.producto.Existencia + e.cantidadQueSeAgrega
                                )
                              ),
                            ]),
                            e._v(" "),
                            a("br"),
                          ]
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-card-actions",
                      [
                        a("v-spacer"),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: {
                              loading: e.cargando,
                              color: "green darken-1",
                              flat: "flat",
                            },
                            nativeOn: {
                              click: function (t) {
                                e.guardar();
                              },
                            },
                          },
                          [e._v("Guardar")]
                        ),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: { color: "gray", flat: "flat" },
                            nativeOn: {
                              click: function (t) {
                                e.cerrarDialogo();
                              },
                            },
                          },
                          [e._v("Cerrar")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        P = {
          name: "DialogoRestarExistencia",
          props: ["producto", "mostrar"],
          watch: {
            mostrar: function (e) {
              e &&
                (this.$nextTick(this.$refs.cantidad.focus),
                this.$refs.formulario.reset(),
                (this.cantidadQueSeResta = null));
            },
          },
          methods: {
            guardar: function () {
              var e = this;
              if (!this.cargando && this.$refs.formulario.validate()) {
                var t = o()({}, this.producto);
                (t.Existencia -= this.cantidadQueSeResta),
                  (this.cargando = !0),
                  s.b.put("producto", t).then(function (t) {
                    t &&
                      (e.$emit("restado"),
                      (e.cantidadQueSeResta = null),
                      (e.cargando = !1));
                  });
              }
            },
            cerrarDialogo: function () {
              this.$refs.formulario.reset(), this.$emit("cerrar");
            },
          },
          data: function () {
            var e = this;
            return {
              cargando: !1,
              cantidadQueSeResta: null,
              reglas: {
                cantidad: [
                  function (t) {
                    return t
                      ? (t = parseFloat(t)) <= 0
                        ? "Cantidad inválida"
                        : !(t > e.producto.Existencia) ||
                          "No puede quitar más de lo existente"
                      : "Ingrese la cantidad";
                  },
                ],
              },
            };
          },
          computed: {
            nuevaExistencia: function () {
              return this.cantidadQueSeResta && this.producto.Existencia
                ? this.producto.Existencia - this.cantidadQueSeResta
                : -1;
            },
          },
        },
        w = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-dialog",
              {
                attrs: { persistent: "", "max-width": "500" },
                model: {
                  value: e.mostrar,
                  callback: function (t) {
                    e.mostrar = t;
                  },
                  expression: "mostrar",
                },
              },
              [
                a(
                  "v-card",
                  [
                    a("v-card-title", { staticClass: "headline" }, [
                      e._v("Restar inventario"),
                    ]),
                    e._v(" "),
                    a(
                      "v-card-text",
                      [
                        a("p", [
                          a("strong", [e._v("Producto: ")]),
                          e._v(" " + e._s(e.producto.Descripcion) + " "),
                          a("br"),
                          e._v(" "),
                          a("strong", [e._v("ID: ")]),
                          e._v(" " + e._s(e.producto.Numero)),
                          a("br"),
                          e._v(" "),
                          a("strong", [e._v("Código de barras: ")]),
                          e._v(" " + e._s(e.producto.CodigoBarras)),
                          a("br"),
                          e._v(" "),
                          a("strong", [e._v("Existencia actual: ")]),
                          e._v(" " + e._s(e.producto.Existencia) + " "),
                          a("br"),
                        ]),
                        e._v(" "),
                        a(
                          "v-form",
                          { ref: "formulario" },
                          [
                            a(
                              "v-container",
                              { attrs: { fluid: "", "grid-list-md": "" } },
                              [
                                a(
                                  "v-layout",
                                  { attrs: { row: "", wrap: "" } },
                                  [
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "" } },
                                      [
                                        a("v-text-field", {
                                          ref: "cantidad",
                                          attrs: {
                                            label: "Cantidad a restar",
                                            type: "number",
                                            rules: e.reglas.cantidad,
                                            hint: "¿Cuántos productos de este tipo resta?",
                                            required: "",
                                          },
                                          nativeOn: {
                                            keydown: function (t) {
                                              if (
                                                !("button" in t) &&
                                                e._k(
                                                  t.keyCode,
                                                  "enter",
                                                  13,
                                                  t.key,
                                                  "Enter"
                                                )
                                              )
                                                return null;
                                              t.preventDefault(), e.guardar();
                                            },
                                          },
                                          model: {
                                            value: e.cantidadQueSeResta,
                                            callback: function (t) {
                                              e.cantidadQueSeResta = e._n(t);
                                            },
                                            expression: "cantidadQueSeResta",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        e._v(" "),
                        a(
                          "p",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: e.nuevaExistencia > -1,
                                expression: "nuevaExistencia > -1",
                              },
                            ],
                          },
                          [
                            e._v(
                              "\n        Una vez guardada, la existencia del producto será de:"
                            ),
                            a("br"),
                            e._v(" "),
                            a("span", { staticClass: "title" }, [
                              e._v(e._s(e.nuevaExistencia)),
                            ]),
                            e._v(" "),
                            a("br"),
                          ]
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-card-actions",
                      [
                        a("v-spacer"),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: {
                              loading: e.cargando,
                              color: "green darken-1",
                              flat: "flat",
                            },
                            nativeOn: {
                              click: function (t) {
                                e.guardar();
                              },
                            },
                          },
                          [e._v("Guardar")]
                        ),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: { color: "gray", flat: "flat" },
                            nativeOn: {
                              click: function (t) {
                                e.cerrarDialogo();
                              },
                            },
                          },
                          [e._v("Cerrar")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        I = {
          beforeMount: function () {
            C.EventBus.$emit("ponerTitulo", "Inventario");
          },
          components: {
            FormularioNuevoProducto: d,
            ListaDeProductos: A,
            FormularioEditarProducto: p,
            DialogoConfirmarEliminacion: k,
            DialogoAumentarExistencia: a("VU/8")(E, y, !1, null, null, null)
              .exports,
            DialogoRestarExistencia: a("VU/8")(P, w, !1, null, null, null)
              .exports,
          },
          data: function () {
            return {
              dialogos: {
                nuevo: !1,
                editar: !1,
                aumentarExistencia: !1,
                restarExistencia: !1,
                confirmarEliminacion: !1,
              },
              snackbars: {
                productoGuardado: !1,
                cambiosProductoGuardados: !1,
                existenciaAumentada: !1,
                existenciaRestada: !1,
              },
              productoEditado: {},
              productoParaEliminar: {},
            };
          },
          methods: {
            onCantidadAumentada: function () {
              (this.dialogos.aumentarExistencia = !1),
                (this.snackbars.existenciaAumentada = !0),
                this.$refs.productos.obtener();
            },
            onCantidadRestada: function () {
              (this.dialogos.restarExistencia = !1),
                (this.snackbars.existenciaRestada = !0),
                this.$refs.productos.obtener();
            },
            onProductoGuardado: function () {
              (this.snackbars.productoGuardado = !0),
                this.$refs.productos.obtener();
            },
            onCambiosDeProductoGuardados: function () {
              (this.snackbars.cambiosProductoGuardados = !0),
                (this.dialogos.editar = !1),
                this.$refs.productos.obtener();
            },
            onProductoEliminado: function () {
              (this.dialogos.confirmarEliminacion = !1),
                this.$refs.productos.obtener();
            },
            mostrarDialogoParaAgregar: function () {
              this.dialogos.nuevo = !0;
            },
            editarProducto: function (e) {
              (this.dialogos.editar = !0), (this.productoEditado = o()({}, e));
            },
            eliminarProducto: function (e) {
              (this.productoParaEliminar = o()({}, e)),
                (this.dialogos.confirmarEliminacion = !0);
            },
            aumentarExistencia: function (e) {
              (this.productoEditado = o()({}, e)),
                (this.dialogos.aumentarExistencia = !0);
            },
            restarExistencia: function (e) {
              (this.productoEditado = o()({}, e)),
                (this.dialogos.restarExistencia = !0);
            },
            duplicarProducto: function (e) {
              (this.productoEditado = o()({}, e)),
                this.mostrarDialogoParaAgregar();
            },
          },
        },
        N = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-layout",
              [
                a("dialogo-aumentar-existencia", {
                  attrs: {
                    mostrar: e.dialogos.aumentarExistencia,
                    producto: e.productoEditado,
                  },
                  on: {
                    cerrar: function (t) {
                      e.dialogos.aumentarExistencia = !1;
                    },
                    aumentado: e.onCantidadAumentada,
                  },
                }),
                e._v(" "),
                a("dialogo-restar-existencia", {
                  attrs: {
                    mostrar: e.dialogos.restarExistencia,
                    producto: e.productoEditado,
                  },
                  on: {
                    cerrar: function (t) {
                      e.dialogos.restarExistencia = !1;
                    },
                    restado: e.onCantidadRestada,
                  },
                }),
                e._v(" "),
                a("formulario-nuevo-producto", {
                  attrs: {
                    productoParaDuplicar: e.productoEditado,
                    mostrar: e.dialogos.nuevo,
                  },
                  on: {
                    "producto-guardado": function (t) {
                      e.onProductoGuardado();
                    },
                    "cerrar-dialogo": function (t) {
                      e.dialogos.nuevo = !1;
                    },
                  },
                }),
                e._v(" "),
                a("formulario-editar-producto", {
                  attrs: {
                    mostrar: e.dialogos.editar,
                    producto: e.productoEditado,
                  },
                  on: {
                    "producto-guardado": function (t) {
                      e.onCambiosDeProductoGuardados();
                    },
                    "cerrar-dialogo": function (t) {
                      e.dialogos.editar = !1;
                    },
                  },
                }),
                e._v(" "),
                a("lista-de-productos", {
                  ref: "productos",
                  on: {
                    "editar-producto": e.editarProducto,
                    "eliminar-producto": e.eliminarProducto,
                    "aumentar-existencia": e.aumentarExistencia,
                    "restar-existencia": e.restarExistencia,
                    "duplicar-producto": e.duplicarProducto,
                  },
                }),
                e._v(" "),
                a("dialogo-confirmar-eliminacion", {
                  attrs: {
                    mostrar: e.dialogos.confirmarEliminacion,
                    producto: e.productoParaEliminar,
                  },
                  on: {
                    "cerrar-dialogo": function (t) {
                      e.dialogos.confirmarEliminacion = !1;
                    },
                    "producto-eliminado": function (t) {
                      e.onProductoEliminado();
                    },
                  },
                }),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 2e3, bottom: !0 },
                    model: {
                      value: e.snackbars.existenciaAumentada,
                      callback: function (t) {
                        e.$set(e.snackbars, "existenciaAumentada", t);
                      },
                      expression: "snackbars.existenciaAumentada",
                    },
                  },
                  [
                    e._v("\n    Existencia aumentada\n    "),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.existenciaAumentada = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 2e3, bottom: !0 },
                    model: {
                      value: e.snackbars.existenciaRestada,
                      callback: function (t) {
                        e.$set(e.snackbars, "existenciaRestada", t);
                      },
                      expression: "snackbars.existenciaRestada",
                    },
                  },
                  [
                    e._v("\n    Existencia restada\n    "),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.existenciaRestada = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 2e3, bottom: !0 },
                    model: {
                      value: e.snackbars.productoGuardado,
                      callback: function (t) {
                        e.$set(e.snackbars, "productoGuardado", t);
                      },
                      expression: "snackbars.productoGuardado",
                    },
                  },
                  [
                    e._v("\n    Producto guardado correctamente\n    "),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.productoGuardado = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 2e3, bottom: !0 },
                    model: {
                      value: e.snackbars.cambiosProductoGuardados,
                      callback: function (t) {
                        e.$set(e.snackbars, "cambiosProductoGuardados", t);
                      },
                      expression: "snackbars.cambiosProductoGuardados",
                    },
                  },
                  [
                    e._v("\n    Producto guardado correctamente\n    "),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.productoGuardado = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-tooltip",
                  { attrs: { top: "" } },
                  [
                    a(
                      "v-btn",
                      {
                        attrs: {
                          slot: "activator",
                          fixed: "",
                          dark: "",
                          fab: "",
                          bottom: "",
                          "fill-height": "",
                          "open-delay": "0",
                          right: "",
                          color: "indigo",
                        },
                        on: {
                          click: function (t) {
                            e.mostrarDialogoParaAgregar();
                          },
                        },
                        slot: "activator",
                      },
                      [a("v-icon", [e._v("add")])],
                      1
                    ),
                    e._v(" "),
                    a("span", [e._v("Agregar producto")]),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        D = a("VU/8")(I, N, !1, null, null, null);
      t.default = D.exports;
    },
    sQx5: function (e, t, a) {
      e.exports = a.p + "img/red.524a30a.png";
    },
    sXai: function (e, t, a) {
      "use strict";
      var r = a("UlOv"),
        o = a("8o1w"),
        n = a("65o/"),
        i = a("MRIW"),
        s = {
          extends: r.b,
          data: function () {
            return { anio: null, mes: null };
          },
          methods: {
            setAnioYMes: function (e, t) {
              (this.anio = e), (this.mes = t), this.refrescarConMesYAnio(e, t);
            },
            refrescarConMesYAnio: function (e, t) {
              var a = this;
              o.b
                .get("total/vendido/por/dia/" + e + "/" + t)
                .then(function (e) {
                  var t = [],
                    r = [];
                  e.forEach(function (e) {
                    t.push(e.Etiqueta), r.push(e.Valor);
                  });
                  var o = [
                    {
                      label: "Cantidad vendida",
                      backgroundColor: n.a.colorHexadecimalAleatorio(),
                      data: r,
                    },
                  ];
                  a.$nextTick(function () {
                    a.$data._chart &&
                      (a.$data._chart.clear(), a.$data._chart.destroy()),
                      a.renderChart(
                        { labels: t, datasets: o },
                        {
                          tooltips: {
                            callbacks: {
                              label: function (e, t) {
                                var r = t.datasets[e.datasetIndex].label,
                                  o = e.yLabel;
                                return (
                                  r + ": " + a.$options.filters.currency(o)
                                );
                              },
                              title: function (e) {
                                return (
                                  e[0].xLabel +
                                  " de " +
                                  i.e[parseInt(a.mes) - 1]
                                );
                              },
                            },
                          },
                          title: {
                            text: "Ventas de " + i.e[parseInt(a.mes) - 1],
                            display: !0,
                          },
                          responsive: !0,
                          maintainAspectRatio: !1,
                          scales: {
                            yAxes: [
                              { display: !0, ticks: { beginAtZero: !0 } },
                            ],
                          },
                        }
                      );
                  });
                });
            },
          },
        },
        c = a("VU/8")(s, null, !1, null, null, null);
      t.a = c.exports;
    },
    tmUQ: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("woOf"),
        o = a.n(r),
        n = a("Xxa5"),
        i = a.n(n),
        s = a("exGp"),
        c = a.n(s),
        l = a("8o1w"),
        d = a("z4sG"),
        u = a("NHnr"),
        v = a("nBfo"),
        p = a("65o/"),
        m = {
          components: { Publicidad: v.a, SeleccionadorFechas: d.a },
          beforeMount: function () {
            u.EventBus.$emit("ponerTitulo", "Ventas al contado");
          },
          data: function () {
            return {
              totales: { utilidad: 0, venta: 0 },
              ventas: [],
              encabezadosVentas: [
                { text: "#", value: "IdVenta" },
                { text: "Monto", value: "Monto" },
                { text: "Utilidad", value: "Utilidad" },
                { text: "Fecha", value: "Fecha" },
                { text: "Cliente", value: "IdCliente" },
                { text: "Usuario", value: "IdUsuario" },
                { text: "Reimprimir ticket", value: "", sortable: !1 },
                { text: "Anular venta", value: "", sortable: !1 },
              ],
              encabezadosProductos: [
                { text: "#", value: "Numero" },
                { text: "Código de Barras", value: "CodigoBarras" },
                { text: "Descripción", value: "Descripcion" },
                {
                  text: "Precio de venta original",
                  value: "PrecioVentaOriginal",
                },
                { text: "Precio de venta", value: "PrecioVenta" },
                { text: "Precio de compra", value: "PrecioCompra" },
                { text: "Utilidad", value: "Utilidad", sortable: !1 },
                { text: "Cantidad", value: "Cantidad" },
                { text: "Total", value: "Total" },
              ],
            };
          },
          methods: {
            anularVenta: function (e) {
              var t = this;
              return c()(
                i.a.mark(function a() {
                  return i.a.wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            if (
                              confirm(
                                "¿Realmente quiere anular la venta? los productos volverán al inventario y la venta se va a eliminar"
                              )
                            ) {
                              a.next = 2;
                              break;
                            }
                            return a.abrupt("return");
                          case 2:
                            return (
                              (a.next = 4), l.b.delete("venta/contado/" + e)
                            );
                          case 4:
                            t.$refs.seleccionadorFechas.onFechasCambiadas();
                          case 5:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    t
                  );
                })
              )();
            },
            imprimirTicket: function (e) {
              var t = this;
              return c()(
                i.a.mark(function a() {
                  return i.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), p.a.imprimirTicketVentaContado(e)
                            );
                          case 2:
                          case "end":
                            return t.stop();
                        }
                    },
                    a,
                    t
                  );
                })
              )();
            },
            comprobarFechasYRefrescarSiEsNecesario: function (e) {
              var t = e.inicio,
                a = e.fin;
              t && a && this.consultarVentas(t, a);
            },
            consultarVentas: function (e, t) {
              var a = this;
              l.b.get("ventas/contado/" + e + "/" + t).then(function (e) {
                a.procesarVentas(e);
              });
            },
            procesarVentas: function (e) {
              var t = this,
                a = [];
              (this.totales.utilidad = 0),
                (this.totales.venta = 0),
                e.forEach(function (e) {
                  var r = a.find(function (t) {
                    return t.IdVenta === e.IdVenta;
                  });
                  if (r) {
                    r.productos.push(e.Producto);
                    var n =
                      (e.Producto.PrecioVenta - e.Producto.PrecioCompra) *
                      e.Producto.Cantidad;
                    (r.Utilidad += n),
                      (t.totales.utilidad += n),
                      (t.totales.venta +=
                        e.Producto.PrecioVenta * e.Producto.Cantidad);
                  } else {
                    var i = o()({}, e),
                      s = i.Producto;
                    (i.Utilidad =
                      (s.PrecioVenta - s.PrecioCompra) * s.Cantidad),
                      (t.totales.utilidad += i.Utilidad),
                      (t.totales.venta += s.PrecioVenta * s.Cantidad),
                      delete i.Producto,
                      (i.productos = [s]),
                      a.push(i);
                  }
                }),
                (this.ventas = a);
            },
          },
        },
        f = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                a("seleccionador-fechas", {
                  ref: "seleccionadorFechas",
                  on: { cambio: e.comprobarFechasYRefrescarSiEsNecesario },
                }),
                e._v(" "),
                a("v-flex", { attrs: { xs12: "" } }, [a("Publicidad")], 1),
                e._v(" "),
                a("v-flex", { attrs: { xs12: "", sm6: "" } }, [
                  a("h1", [
                    a("span", { staticClass: "display-1" }, [
                      e._v(e._s(e._f("currency")(e.totales.utilidad))),
                    ]),
                    e._v(" "),
                    a("span", { staticClass: "title" }, [e._v("Utilidad")]),
                  ]),
                ]),
                e._v(" "),
                a("v-flex", { attrs: { xs12: "", sm6: "" } }, [
                  a("h1", [
                    a("span", { staticClass: "display-1" }, [
                      e._v(e._s(e._f("currency")(e.totales.venta))),
                    ]),
                    e._v(" "),
                    a("span", { staticClass: "title" }, [e._v("Vendido")]),
                  ]),
                ]),
                e._v(" "),
                a(
                  "v-flex",
                  { attrs: { xs12: "" } },
                  [
                    a("v-data-table", {
                      attrs: {
                        headers: e.encabezadosVentas,
                        items: e.ventas,
                        "hide-actions": "",
                        "item-key": "IdVenta",
                      },
                      scopedSlots: e._u([
                        {
                          key: "items",
                          fn: function (t) {
                            return [
                              a(
                                "tr",
                                {
                                  staticClass: "cursor-manita",
                                  class: { expandido: t.expanded },
                                  on: {
                                    click: function (e) {
                                      t.expanded = !t.expanded;
                                    },
                                  },
                                },
                                [
                                  a("td", [e._v(e._s(t.item.IdVenta))]),
                                  e._v(" "),
                                  a("td", [
                                    e._v(e._s(e._f("currency")(t.item.Monto))),
                                  ]),
                                  e._v(" "),
                                  a("td", [
                                    a("strong", [
                                      e._v(
                                        e._s(e._f("currency")(t.item.Utilidad))
                                      ),
                                    ]),
                                  ]),
                                  e._v(" "),
                                  a("td", [
                                    e._v(
                                      e._s(e._f("fechaExpresiva")(t.item.Fecha))
                                    ),
                                  ]),
                                  e._v(" "),
                                  a("td", [e._v(e._s(t.item.Cliente.Nombre))]),
                                  e._v(" "),
                                  a("td", [e._v(e._s(t.item.Usuario.Nombre))]),
                                  e._v(" "),
                                  a(
                                    "td",
                                    {
                                      staticClass: "justify-center layout px-0",
                                    },
                                    [
                                      a(
                                        "v-btn",
                                        {
                                          staticClass: "mx-0",
                                          attrs: {
                                            title: "Reimprimir ticket",
                                            icon: "",
                                          },
                                          on: {
                                            click: function (a) {
                                              e.imprimirTicket(t.item.IdVenta);
                                            },
                                          },
                                        },
                                        [
                                          a(
                                            "v-icon",
                                            {
                                              attrs: {
                                                color: t.expanded
                                                  ? "white"
                                                  : "blue",
                                              },
                                            },
                                            [e._v("print")]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  e._v(" "),
                                  a(
                                    "td",
                                    { staticClass: "justify-center" },
                                    [
                                      a(
                                        "v-btn",
                                        {
                                          staticClass: "mx-0",
                                          attrs: {
                                            title: "Anular venta",
                                            icon: "",
                                          },
                                          on: {
                                            click: function (a) {
                                              e.anularVenta(t.item.IdVenta);
                                            },
                                          },
                                        },
                                        [
                                          a(
                                            "v-icon",
                                            {
                                              attrs: {
                                                color: t.expanded
                                                  ? "white"
                                                  : "red",
                                              },
                                            },
                                            [e._v("delete")]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                            ];
                          },
                        },
                        {
                          key: "expand",
                          fn: function (t) {
                            return [
                              a(
                                "v-card",
                                {
                                  staticClass: "productos-vendidos",
                                  attrs: { flat: "" },
                                },
                                [
                                  a("v-data-table", {
                                    attrs: {
                                      headers: e.encabezadosProductos,
                                      items: t.item.productos,
                                      "hide-actions": "",
                                      "item-key": "Numero",
                                    },
                                    scopedSlots: e._u([
                                      {
                                        key: "items",
                                        fn: function (t) {
                                          return [
                                            a("tr", [
                                              a("td", [
                                                e._v(e._s(t.item.Numero)),
                                              ]),
                                              e._v(" "),
                                              a("td", [
                                                e._v(e._s(t.item.CodigoBarras)),
                                              ]),
                                              e._v(" "),
                                              a("td", [
                                                e._v(e._s(t.item.Descripcion)),
                                              ]),
                                              e._v(" "),
                                              a("td", [
                                                e._v(
                                                  e._s(
                                                    e._f("currency")(
                                                      t.item.PrecioVentaOriginal
                                                    )
                                                  )
                                                ),
                                              ]),
                                              e._v(" "),
                                              a("td", [
                                                e._v(
                                                  e._s(
                                                    e._f("currency")(
                                                      t.item.PrecioVenta
                                                    )
                                                  )
                                                ),
                                              ]),
                                              e._v(" "),
                                              a("td", [
                                                e._v(
                                                  e._s(
                                                    e._f("currency")(
                                                      t.item.PrecioCompra
                                                    )
                                                  )
                                                ),
                                              ]),
                                              e._v(" "),
                                              a("td", [
                                                a("strong", [
                                                  e._v(
                                                    e._s(
                                                      e._f("currency")(
                                                        t.item.PrecioVenta -
                                                          t.item.PrecioCompra
                                                      )
                                                    )
                                                  ),
                                                ]),
                                              ]),
                                              e._v(" "),
                                              a("td", [
                                                e._v(e._s(t.item.Cantidad)),
                                              ]),
                                              e._v(" "),
                                              a("td", [
                                                e._v(
                                                  "\n                  " +
                                                    e._s(
                                                      e._f("currency")(
                                                        t.item.PrecioVenta *
                                                          t.item.Cantidad
                                                      )
                                                    ) +
                                                    "\n                "
                                                ),
                                              ]),
                                            ]),
                                          ];
                                        },
                                      },
                                    ]),
                                  }),
                                ],
                                1
                              ),
                            ];
                          },
                        },
                      ]),
                    }),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var h = a("VU/8")(
        m,
        f,
        !1,
        function (e) {
          a("kQNQ");
        },
        null,
        null
      );
      t.default = h.exports;
    },
    uVUN: function (e, t) {},
    uslO: function (e, t, a) {
      var r = {
        "./af": "3CJN",
        "./af.js": "3CJN",
        "./ar": "3MVc",
        "./ar-dz": "tkWw",
        "./ar-dz.js": "tkWw",
        "./ar-kw": "j8cJ",
        "./ar-kw.js": "j8cJ",
        "./ar-ly": "wPpW",
        "./ar-ly.js": "wPpW",
        "./ar-ma": "dURR",
        "./ar-ma.js": "dURR",
        "./ar-sa": "7OnE",
        "./ar-sa.js": "7OnE",
        "./ar-tn": "BEem",
        "./ar-tn.js": "BEem",
        "./ar.js": "3MVc",
        "./az": "eHwN",
        "./az.js": "eHwN",
        "./be": "3hfc",
        "./be.js": "3hfc",
        "./bg": "lOED",
        "./bg.js": "lOED",
        "./bm": "hng5",
        "./bm.js": "hng5",
        "./bn": "aM0x",
        "./bn.js": "aM0x",
        "./bo": "w2Hs",
        "./bo.js": "w2Hs",
        "./br": "OSsP",
        "./br.js": "OSsP",
        "./bs": "aqvp",
        "./bs.js": "aqvp",
        "./ca": "wIgY",
        "./ca.js": "wIgY",
        "./cs": "ssxj",
        "./cs.js": "ssxj",
        "./cv": "N3vo",
        "./cv.js": "N3vo",
        "./cy": "ZFGz",
        "./cy.js": "ZFGz",
        "./da": "YBA/",
        "./da.js": "YBA/",
        "./de": "DOkx",
        "./de-at": "8v14",
        "./de-at.js": "8v14",
        "./de-ch": "Frex",
        "./de-ch.js": "Frex",
        "./de.js": "DOkx",
        "./dv": "rIuo",
        "./dv.js": "rIuo",
        "./el": "CFqe",
        "./el.js": "CFqe",
        "./en-au": "Sjoy",
        "./en-au.js": "Sjoy",
        "./en-ca": "Tqun",
        "./en-ca.js": "Tqun",
        "./en-gb": "hPuz",
        "./en-gb.js": "hPuz",
        "./en-ie": "ALEw",
        "./en-ie.js": "ALEw",
        "./en-il": "QZk1",
        "./en-il.js": "QZk1",
        "./en-nz": "dyB6",
        "./en-nz.js": "dyB6",
        "./eo": "Nd3h",
        "./eo.js": "Nd3h",
        "./es": "LT9G",
        "./es-do": "7MHZ",
        "./es-do.js": "7MHZ",
        "./es-us": "INcR",
        "./es-us.js": "INcR",
        "./es.js": "LT9G",
        "./et": "XlWM",
        "./et.js": "XlWM",
        "./eu": "sqLM",
        "./eu.js": "sqLM",
        "./fa": "2pmY",
        "./fa.js": "2pmY",
        "./fi": "nS2h",
        "./fi.js": "nS2h",
        "./fo": "OVPi",
        "./fo.js": "OVPi",
        "./fr": "tzHd",
        "./fr-ca": "bXQP",
        "./fr-ca.js": "bXQP",
        "./fr-ch": "VK9h",
        "./fr-ch.js": "VK9h",
        "./fr.js": "tzHd",
        "./fy": "g7KF",
        "./fy.js": "g7KF",
        "./gd": "nLOz",
        "./gd.js": "nLOz",
        "./gl": "FuaP",
        "./gl.js": "FuaP",
        "./gom-latn": "+27R",
        "./gom-latn.js": "+27R",
        "./gu": "rtsW",
        "./gu.js": "rtsW",
        "./he": "Nzt2",
        "./he.js": "Nzt2",
        "./hi": "ETHv",
        "./hi.js": "ETHv",
        "./hr": "V4qH",
        "./hr.js": "V4qH",
        "./hu": "xne+",
        "./hu.js": "xne+",
        "./hy-am": "GrS7",
        "./hy-am.js": "GrS7",
        "./id": "yRTJ",
        "./id.js": "yRTJ",
        "./is": "upln",
        "./is.js": "upln",
        "./it": "FKXc",
        "./it.js": "FKXc",
        "./ja": "ORgI",
        "./ja.js": "ORgI",
        "./jv": "JwiF",
        "./jv.js": "JwiF",
        "./ka": "RnJI",
        "./ka.js": "RnJI",
        "./kk": "j+vx",
        "./kk.js": "j+vx",
        "./km": "5j66",
        "./km.js": "5j66",
        "./kn": "gEQe",
        "./kn.js": "gEQe",
        "./ko": "eBB/",
        "./ko.js": "eBB/",
        "./ku": "kI9l",
        "./ku.js": "kI9l",
        "./ky": "6cf8",
        "./ky.js": "6cf8",
        "./lb": "z3hR",
        "./lb.js": "z3hR",
        "./lo": "nE8X",
        "./lo.js": "nE8X",
        "./lt": "/6P1",
        "./lt.js": "/6P1",
        "./lv": "jxEH",
        "./lv.js": "jxEH",
        "./me": "svD2",
        "./me.js": "svD2",
        "./mi": "gEU3",
        "./mi.js": "gEU3",
        "./mk": "Ab7C",
        "./mk.js": "Ab7C",
        "./ml": "oo1B",
        "./ml.js": "oo1B",
        "./mn": "CqHt",
        "./mn.js": "CqHt",
        "./mr": "5vPg",
        "./mr.js": "5vPg",
        "./ms": "ooba",
        "./ms-my": "G++c",
        "./ms-my.js": "G++c",
        "./ms.js": "ooba",
        "./mt": "oCzW",
        "./mt.js": "oCzW",
        "./my": "F+2e",
        "./my.js": "F+2e",
        "./nb": "FlzV",
        "./nb.js": "FlzV",
        "./ne": "/mhn",
        "./ne.js": "/mhn",
        "./nl": "3K28",
        "./nl-be": "Bp2f",
        "./nl-be.js": "Bp2f",
        "./nl.js": "3K28",
        "./nn": "C7av",
        "./nn.js": "C7av",
        "./pa-in": "pfs9",
        "./pa-in.js": "pfs9",
        "./pl": "7LV+",
        "./pl.js": "7LV+",
        "./pt": "ZoSI",
        "./pt-br": "AoDM",
        "./pt-br.js": "AoDM",
        "./pt.js": "ZoSI",
        "./ro": "wT5f",
        "./ro.js": "wT5f",
        "./ru": "ulq9",
        "./ru.js": "ulq9",
        "./sd": "fW1y",
        "./sd.js": "fW1y",
        "./se": "5Omq",
        "./se.js": "5Omq",
        "./si": "Lgqo",
        "./si.js": "Lgqo",
        "./sk": "OUMt",
        "./sk.js": "OUMt",
        "./sl": "2s1U",
        "./sl.js": "2s1U",
        "./sq": "V0td",
        "./sq.js": "V0td",
        "./sr": "f4W3",
        "./sr-cyrl": "c1x4",
        "./sr-cyrl.js": "c1x4",
        "./sr.js": "f4W3",
        "./ss": "7Q8x",
        "./ss.js": "7Q8x",
        "./sv": "Fpqq",
        "./sv.js": "Fpqq",
        "./sw": "DSXN",
        "./sw.js": "DSXN",
        "./ta": "+7/x",
        "./ta.js": "+7/x",
        "./te": "Nlnz",
        "./te.js": "Nlnz",
        "./tet": "gUgh",
        "./tet.js": "gUgh",
        "./tg": "5SNd",
        "./tg.js": "5SNd",
        "./th": "XzD+",
        "./th.js": "XzD+",
        "./tl-ph": "3LKG",
        "./tl-ph.js": "3LKG",
        "./tlh": "m7yE",
        "./tlh.js": "m7yE",
        "./tr": "k+5o",
        "./tr.js": "k+5o",
        "./tzl": "iNtv",
        "./tzl.js": "iNtv",
        "./tzm": "FRPF",
        "./tzm-latn": "krPU",
        "./tzm-latn.js": "krPU",
        "./tzm.js": "FRPF",
        "./ug-cn": "To0v",
        "./ug-cn.js": "To0v",
        "./uk": "ntHu",
        "./uk.js": "ntHu",
        "./ur": "uSe8",
        "./ur.js": "uSe8",
        "./uz": "XU1s",
        "./uz-latn": "/bsm",
        "./uz-latn.js": "/bsm",
        "./uz.js": "XU1s",
        "./vi": "0X8Q",
        "./vi.js": "0X8Q",
        "./x-pseudo": "e/KL",
        "./x-pseudo.js": "e/KL",
        "./yo": "YXlc",
        "./yo.js": "YXlc",
        "./zh-cn": "Vz2w",
        "./zh-cn.js": "Vz2w",
        "./zh-hk": "ZUyn",
        "./zh-hk.js": "ZUyn",
        "./zh-tw": "BbgG",
        "./zh-tw.js": "BbgG",
      };
      function o(e) {
        return a(n(e));
      }
      function n(e) {
        var t = r[e];
        if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
        return t;
      }
      (o.keys = function () {
        return Object.keys(r);
      }),
        (o.resolve = n),
        (e.exports = o),
        (o.id = "uslO");
    },
    vLku: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("woOf"),
        o = a.n(r),
        n = a("8o1w"),
        i = {
          components: { Publicidad: a("nBfo").a },
          beforeMount: function () {
            this.obtener();
          },
          watch: {
            busqueda: function () {
              this.obtener();
            },
          },
          methods: {
            mostrarHistorial: function (e) {
              this.$emit("mostrar-historial", e);
            },
            editar: function (e) {
              this.$emit("editar", e);
            },
            eliminar: function (e) {
              this.$emit("eliminar", e);
            },
            prepararParaBuscar: function () {
              (this.estaBuscando = !0),
                this.$nextTick(this.$refs.inputBusqueda.focus);
            },
            cancelarBusqueda: function () {
              (this.busqueda = ""), (this.estaBuscando = !1);
            },
            obtener: function () {
              var e = this;
              this.busqueda
                ? n.b
                    .get("buscar/clientes/" + encodeURIComponent(this.busqueda))
                    .then(function (t) {
                      e.clientes = t;
                    })
                : n.b.get("clientes").then(function (t) {
                    e.clientes = t;
                  });
            },
          },
          data: function () {
            return { busqueda: "", estaBuscando: !1, clientes: [] };
          },
        },
        s = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-flex",
              { attrs: { xs12: "" } },
              [
                a(
                  "v-card",
                  [
                    a(
                      "v-toolbar",
                      { attrs: { color: "light-blue", dark: "" } },
                      [
                        a(
                          "v-toolbar-title",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !e.estaBuscando,
                                expression: "!estaBuscando",
                              },
                            ],
                          },
                          [e._v("Clientes")]
                        ),
                        e._v(" "),
                        a("v-toolbar-title", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: e.estaBuscando,
                              expression: "estaBuscando",
                            },
                          ],
                        }),
                        e._v(" "),
                        a("v-spacer"),
                        e._v(" "),
                        a(
                          "v-flex",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: e.estaBuscando,
                                expression: "estaBuscando",
                              },
                            ],
                            attrs: { xs12: "" },
                          },
                          [
                            a("v-text-field", {
                              ref: "inputBusqueda",
                              attrs: {
                                "hide-details": "",
                                label: "Escriba parte del nombre",
                                "solo-inverted": "",
                                "single-line": "",
                              },
                              model: {
                                value: e.busqueda,
                                callback: function (t) {
                                  e.busqueda = t;
                                },
                                expression: "busqueda",
                              },
                            }),
                          ],
                          1
                        ),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !e.estaBuscando,
                                expression: "!estaBuscando",
                              },
                            ],
                            attrs: { icon: "" },
                            on: {
                              click: function (t) {
                                e.prepararParaBuscar();
                              },
                            },
                          },
                          [a("v-icon", [e._v("search")])],
                          1
                        ),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: e.estaBuscando,
                                expression: "estaBuscando",
                              },
                            ],
                            attrs: { icon: "" },
                            on: {
                              click: function (t) {
                                e.cancelarBusqueda();
                              },
                            },
                          },
                          [a("v-icon", [e._v("close")])],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a("v-flex", { attrs: { xs12: "" } }, [a("Publicidad")], 1),
                    e._v(" "),
                    a(
                      "v-list",
                      { attrs: { "two-line": "", subheader: "" } },
                      e._l(e.clientes, function (t, r) {
                        return a(
                          "v-list-tile",
                          { key: r, attrs: { avatar: "" } },
                          [
                            a(
                              "v-list-tile-content",
                              [
                                a("v-list-tile-title", [e._v(e._s(t.Nombre))]),
                                e._v(" "),
                                a("v-list-tile-sub-title", [
                                  e._v(e._s(t.NumeroTelefono)),
                                ]),
                              ],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-list-tile-action",
                              [
                                a(
                                  "v-btn",
                                  {
                                    attrs: {
                                      target: "_blank",
                                      href: "tel:" + t.NumeroTelefono,
                                      icon: "",
                                      ripple: "",
                                    },
                                  },
                                  [
                                    a("v-icon", { attrs: { color: "blue" } }, [
                                      e._v("phone"),
                                    ]),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-list-tile-action",
                              [
                                a(
                                  "v-btn",
                                  {
                                    attrs: { icon: "", ripple: "" },
                                    on: {
                                      click: function (a) {
                                        e.mostrarHistorial(t.Numero);
                                      },
                                    },
                                  },
                                  [
                                    a("v-icon", { attrs: { color: "blue" } }, [
                                      e._v("info"),
                                    ]),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-list-tile-action",
                              [
                                a(
                                  "v-btn",
                                  {
                                    attrs: { icon: "", ripple: "" },
                                    on: {
                                      click: function (a) {
                                        e.editar(t);
                                      },
                                    },
                                  },
                                  [
                                    a(
                                      "v-icon",
                                      { attrs: { color: "orange" } },
                                      [e._v("edit")]
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-list-tile-action",
                              [
                                a(
                                  "v-btn",
                                  {
                                    attrs: { icon: "", ripple: "" },
                                    on: {
                                      click: function (a) {
                                        e.eliminar(t);
                                      },
                                    },
                                  },
                                  [
                                    a("v-icon", { attrs: { color: "red" } }, [
                                      e._v("delete"),
                                    ]),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        );
                      }),
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        c = a("VU/8")(i, s, !1, null, null, null).exports,
        l = a("EgEd"),
        d = {
          watch: {
            mostrar: function (e) {
              e && this.enfocarInputPrincipal();
            },
          },
          methods: {
            enfocarInputPrincipal: function () {
              this.$nextTick(this.$refs.nombreCliente.focus);
            },
            resetearFormulario: function () {
              this.$refs.formulario.reset();
            },
            cerrarDialogo: function () {
              this.resetearFormulario(), this.$emit("cerrar-dialogo");
            },
            guardar: function () {
              var e = this;
              if (this.$refs.formulario.validate()) {
                var t = o()({}, this.cliente);
                (this.cargando = !0),
                  n.b.put("cliente", t).then(function (t) {
                    (e.cargando = !1),
                      !0 === t &&
                        (e.cerrarDialogo(), e.$emit("cliente-guardado"));
                  });
              }
            },
          },
          props: ["mostrar", "cliente"],
          data: function () {
            return {
              cargando: !1,
              mascara: "###-###-##-##",
              reglas: {
                nombre: [
                  function (e) {
                    return !!e || "Introduzca el nombre completo del cliente";
                  },
                ],
                numeroTelefono: [
                  function (e) {
                    return e
                      ? 10 === e.length || "El número debe tener 10 dígitos"
                      : "Introduzca el número de teléfono";
                  },
                ],
              },
            };
          },
        },
        u = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-dialog",
              {
                attrs: { persistent: "", "max-width": "500" },
                model: {
                  value: e.mostrar,
                  callback: function (t) {
                    e.mostrar = t;
                  },
                  expression: "mostrar",
                },
              },
              [
                a(
                  "v-card",
                  [
                    a("v-card-title", { staticClass: "headline" }, [
                      e._v("Modificar cliente"),
                    ]),
                    e._v(" "),
                    a(
                      "v-card-text",
                      [
                        a(
                          "v-form",
                          { ref: "formulario" },
                          [
                            a(
                              "v-container",
                              { attrs: { fluid: "", "grid-list-md": "" } },
                              [
                                a(
                                  "v-layout",
                                  { attrs: { row: "", wrap: "" } },
                                  [
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "" } },
                                      [
                                        a("v-text-field", {
                                          ref: "nombreCliente",
                                          attrs: {
                                            "prepend-icon": "face",
                                            label: "Nombre completo",
                                            type: "text",
                                            rules: e.reglas.nombre,
                                            hint: "Nombre y apellidos",
                                            required: "",
                                          },
                                          model: {
                                            value: e.cliente.Nombre,
                                            callback: function (t) {
                                              e.$set(e.cliente, "Nombre", t);
                                            },
                                            expression: "cliente.Nombre",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a(
                                      "v-flex",
                                      { attrs: { xs12: "" } },
                                      [
                                        a("v-text-field", {
                                          attrs: {
                                            mask: e.mascara,
                                            "prepend-icon": "phone",
                                            label: "Número de teléfono",
                                            type: "text",
                                            rules: e.reglas.numeroTelefono,
                                            hint: "Número telefónico de 10 dígitos",
                                            required: "",
                                          },
                                          model: {
                                            value: e.cliente.NumeroTelefono,
                                            callback: function (t) {
                                              e.$set(
                                                e.cliente,
                                                "NumeroTelefono",
                                                t
                                              );
                                            },
                                            expression:
                                              "cliente.NumeroTelefono",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-card-actions",
                      [
                        a("v-spacer"),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: {
                              loading: e.cargando,
                              color: "green darken-1",
                              flat: "flat",
                            },
                            nativeOn: {
                              click: function (t) {
                                e.guardar();
                              },
                            },
                          },
                          [e._v("Guardar")]
                        ),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: { color: "gray", flat: "flat" },
                            nativeOn: {
                              click: function (t) {
                                e.cerrarDialogo();
                              },
                            },
                          },
                          [e._v("Cerrar")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        v = a("VU/8")(d, u, !1, null, null, null).exports,
        p = {
          props: ["mostrar", "cliente"],
          data: function () {
            return { cargando: !1 };
          },
          methods: {
            confirmarEliminacion: function () {
              var e = this;
              (this.cargando = !0),
                n.b.delete("cliente/" + this.cliente.Numero).then(function (t) {
                  (e.cargando = !1),
                    e.$emit("cliente-eliminado"),
                    e.ocultarDialogo();
                });
            },
            ocultarDialogo: function () {
              this.$emit("cerrar-dialogo");
            },
          },
        },
        m = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-dialog",
              {
                attrs: { "max-width": "400" },
                model: {
                  value: e.mostrar,
                  callback: function (t) {
                    e.mostrar = t;
                  },
                  expression: "mostrar",
                },
              },
              [
                a(
                  "v-card",
                  [
                    a("v-card-title", { staticClass: "headline" }, [
                      e._v("Confirmar eliminación"),
                    ]),
                    e._v(" "),
                    a("v-card-text", [
                      e._v(
                        "\n      ¿Realmente desea eliminar el cliente con el nombre\n      "
                      ),
                      a("strong", [e._v(e._s(e.cliente.Nombre))]),
                      e._v(" y el número\n      "),
                      a("strong", [e._v(e._s(e.cliente.NumeroTelefono))]),
                      e._v("? "),
                      a("br"),
                      e._v("\n      Esta acción no se puede revertir.\n    "),
                    ]),
                    e._v(" "),
                    a(
                      "v-card-actions",
                      [
                        a("v-spacer"),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: {
                              loading: e.cargando,
                              color: "green darken-1",
                              flat: "flat",
                            },
                            on: {
                              click: function (t) {
                                e.confirmarEliminacion();
                              },
                            },
                          },
                          [e._v("Sí, eliminar\n      ")]
                        ),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: { color: "black", flat: "flat" },
                            nativeOn: {
                              click: function (t) {
                                e.ocultarDialogo();
                              },
                            },
                          },
                          [e._v("Cancelar")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        f = a("VU/8")(p, m, !1, null, null, null).exports,
        h = {
          name: "Historial",
          props: ["mostrar", "idCliente"],
          data: function () {
            return {
              tabActiva: 0,
              cargando: !1,
              tabla: {
                encabezados: {
                  ventasAlContado: [
                    { text: "#", value: "Numero" },
                    { text: "Monto", value: "Total" },
                    { text: "Fecha", value: "Fecha" },
                  ],
                  apartados: [
                    { text: "#", value: "Numero" },
                    { text: "Monto", value: "Total" },
                    { text: "Abonado", sortable: !1 },
                    { text: "Restante", sortable: !1 },
                    { text: "Fecha", value: "Fecha" },
                    { text: "Fecha de vencimiento", value: "FechaVencimiento" },
                  ],
                },
              },
              historial: { VentasAlContado: [], Apartados: [] },
              resumen: {},
            };
          },
          methods: {
            procesarResumen: function (e) {
              var t = {
                contado: 0,
                apartadoYAbonado: 0,
                cuentasPendientes: 0,
                cantidadApartados: 0,
                cantidadContado: 0,
              };
              e.VentasAlContado.forEach(function (e) {
                (t.contado += e.Total), t.cantidadContado++;
              }),
                e.Apartados.forEach(function (e) {
                  var a = e.Abonado + e.Anticipo;
                  (t.cuentasPendientes += e.Total - a),
                    t.cantidadApartados++,
                    (t.apartadoYAbonado += e.Total);
                }),
                (this.resumen = t);
            },
            cerrarDialogo: function () {
              this.$emit("cerrar");
            },
          },
          watch: {
            mostrar: function (e) {
              var t = this;
              e &&
                this.idCliente &&
                !isNaN(this.idCliente) &&
                ((this.cargando = !0),
                n.b
                  .get("historial/cliente/" + this.idCliente)
                  .then(function (e) {
                    (t.cargando = !1), t.procesarResumen(e), (t.historial = e);
                  }));
            },
          },
        },
        g = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-dialog",
              {
                attrs: { persistent: "", "max-width": "800" },
                model: {
                  value: e.mostrar,
                  callback: function (t) {
                    e.mostrar = t;
                  },
                  expression: "mostrar",
                },
              },
              [
                a(
                  "v-card",
                  [
                    a("v-card-title", { staticClass: "headline" }, [
                      e._v("Historial de cliente"),
                    ]),
                    e._v(" "),
                    a(
                      "v-card-text",
                      [
                        a(
                          "v-tabs",
                          {
                            attrs: {
                              color: "cyan",
                              dark: "",
                              "slider-color": "yellow",
                            },
                            model: {
                              value: e.tabActiva,
                              callback: function (t) {
                                e.tabActiva = t;
                              },
                              expression: "tabActiva",
                            },
                          },
                          [
                            a("v-tab", { key: "0", attrs: { ripple: "" } }, [
                              e._v(" Resumen "),
                            ]),
                            e._v(" "),
                            a(
                              "v-tab-item",
                              { key: "0" },
                              [
                                a(
                                  "v-card",
                                  { attrs: { flat: "" } },
                                  [
                                    a(
                                      "v-card-text",
                                      [
                                        a(
                                          "v-layout",
                                          { attrs: { row: "", wrap: "" } },
                                          [
                                            a(
                                              "v-flex",
                                              { attrs: { xs12: "" } },
                                              [
                                                a(
                                                  "h3",
                                                  { staticClass: "headline" },
                                                  [
                                                    a("strong", [
                                                      e._v(
                                                        e._s(
                                                          e.resumen
                                                            .cantidadContado
                                                        )
                                                      ),
                                                    ]),
                                                    e._v(
                                                      "\n                    " +
                                                        e._s(
                                                          e.resumen
                                                            .cantidadContado <=
                                                            0
                                                            ? "ventas"
                                                            : 1 ===
                                                              e.resumen
                                                                .cantidadContado
                                                            ? "venta"
                                                            : "ventas"
                                                        ) +
                                                        "\n                    al contado, con valor de\n                    "
                                                    ),
                                                    a("strong", [
                                                      e._v(
                                                        e._s(
                                                          e._f("currency")(
                                                            e.resumen.contado
                                                          )
                                                        )
                                                      ),
                                                    ]),
                                                  ]
                                                ),
                                                e._v(" "),
                                                a(
                                                  "h3",
                                                  { staticClass: "headline" },
                                                  [
                                                    a("strong", [
                                                      e._v(
                                                        e._s(
                                                          e.resumen
                                                            .cantidadApartados
                                                        )
                                                      ),
                                                    ]),
                                                    e._v(
                                                      "\n                    " +
                                                        e._s(
                                                          e.resumen
                                                            .cantidadApartados <=
                                                            0 ||
                                                            e.resumen
                                                              .cantidadApartados >
                                                              1
                                                            ? "apartados"
                                                            : "apartado"
                                                        ) +
                                                        ", con valor de\n                    "
                                                    ),
                                                    a("strong", [
                                                      e._v(
                                                        e._s(
                                                          e._f("currency")(
                                                            e.resumen
                                                              .apartadoYAbonado
                                                          )
                                                        )
                                                      ),
                                                    ]),
                                                    e._v(
                                                      ". Adeuda\n                    "
                                                    ),
                                                    a("strong", [
                                                      e._v(
                                                        e._s(
                                                          e._f("currency")(
                                                            e.resumen
                                                              .cuentasPendientes
                                                          )
                                                        )
                                                      ),
                                                    ]),
                                                  ]
                                                ),
                                                e._v(" "),
                                                a(
                                                  "h3",
                                                  { staticClass: "headline" },
                                                  [
                                                    e._v(
                                                      "\n                    Total comprado:\n                    "
                                                    ),
                                                    a("strong", [
                                                      e._v(
                                                        e._s(
                                                          e._f("currency")(
                                                            e.resumen.contado +
                                                              e.resumen
                                                                .apartadoYAbonado
                                                          )
                                                        )
                                                      ),
                                                    ]),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            e._v(" "),
                            a("v-tab", { key: "1", attrs: { ripple: "" } }, [
                              e._v(" Ventas al contado "),
                            ]),
                            e._v(" "),
                            a(
                              "v-tab-item",
                              { key: "1" },
                              [
                                a(
                                  "v-card",
                                  { attrs: { flat: "" } },
                                  [
                                    a(
                                      "v-card-text",
                                      [
                                        a(
                                          "v-data-table",
                                          {
                                            staticClass: "elevation-1",
                                            attrs: {
                                              loading: e.cargando,
                                              headers:
                                                e.tabla.encabezados
                                                  .ventasAlContado,
                                              items:
                                                e.historial.VentasAlContado,
                                              "hide-actions": "",
                                            },
                                            scopedSlots: e._u([
                                              {
                                                key: "items",
                                                fn: function (t) {
                                                  return [
                                                    a("td", [
                                                      e._v(e._s(t.item.Numero)),
                                                    ]),
                                                    e._v(" "),
                                                    a("td", [
                                                      e._v(
                                                        e._s(
                                                          e._f("currency")(
                                                            t.item.Total
                                                          )
                                                        )
                                                      ),
                                                    ]),
                                                    e._v(" "),
                                                    a("td", [
                                                      e._v(
                                                        e._s(
                                                          e._f(
                                                            "fechaExpresiva"
                                                          )(t.item.Fecha)
                                                        )
                                                      ),
                                                    ]),
                                                  ];
                                                },
                                              },
                                            ]),
                                          },
                                          [
                                            a(
                                              "template",
                                              { slot: "no-data" },
                                              [
                                                a(
                                                  "v-alert",
                                                  {
                                                    attrs: {
                                                      value: !0,
                                                      color: "info",
                                                    },
                                                  },
                                                  [
                                                    a(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "text-xs-center",
                                                      },
                                                      [
                                                        a("h1", [
                                                          e._v("Sin registros"),
                                                        ]),
                                                        e._v(" "),
                                                        a(
                                                          "v-icon",
                                                          {
                                                            staticClass:
                                                              "icono-grande",
                                                          },
                                                          [e._v("announcement")]
                                                        ),
                                                        e._v(" "),
                                                        a("p", [
                                                          e._v(
                                                            "Este cliente no ha realizado ventas al contado"
                                                          ),
                                                        ]),
                                                      ],
                                                      1
                                                    ),
                                                  ]
                                                ),
                                              ],
                                              1
                                            ),
                                          ],
                                          2
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            e._v(" "),
                            a("v-tab", { key: "2", attrs: { ripple: "" } }, [
                              e._v(" Apartados "),
                            ]),
                            e._v(" "),
                            a(
                              "v-tab-item",
                              { key: "2" },
                              [
                                a(
                                  "v-card",
                                  { attrs: { flat: "" } },
                                  [
                                    a(
                                      "v-card-text",
                                      [
                                        a(
                                          "v-data-table",
                                          {
                                            staticClass: "elevation-1",
                                            attrs: {
                                              loading: e.cargando,
                                              headers:
                                                e.tabla.encabezados.apartados,
                                              items: e.historial.Apartados,
                                              "hide-actions": "",
                                            },
                                            scopedSlots: e._u([
                                              {
                                                key: "items",
                                                fn: function (t) {
                                                  return [
                                                    a("td", [
                                                      e._v(e._s(t.item.Numero)),
                                                    ]),
                                                    e._v(" "),
                                                    a("td", [
                                                      e._v(
                                                        e._s(
                                                          e._f("currency")(
                                                            t.item.Total
                                                          )
                                                        )
                                                      ),
                                                    ]),
                                                    e._v(" "),
                                                    a("td", [
                                                      e._v(
                                                        "\n                    " +
                                                          e._s(
                                                            e._f("currency")(
                                                              t.item.Abonado +
                                                                t.item.Anticipo
                                                            )
                                                          ) +
                                                          "\n                  "
                                                      ),
                                                    ]),
                                                    e._v(" "),
                                                    a("td", [
                                                      e._v(
                                                        "\n                    " +
                                                          e._s(
                                                            e._f("currency")(
                                                              t.item.Total -
                                                                (t.item
                                                                  .Abonado +
                                                                  t.item
                                                                    .Anticipo)
                                                            )
                                                          ) +
                                                          "\n                  "
                                                      ),
                                                    ]),
                                                    e._v(" "),
                                                    a("td", [
                                                      e._v(
                                                        e._s(
                                                          e._f(
                                                            "fechaExpresiva"
                                                          )(t.item.Fecha)
                                                        )
                                                      ),
                                                    ]),
                                                    e._v(" "),
                                                    a("td", [
                                                      e._v(
                                                        e._s(
                                                          e._f("fechaSinHora")(
                                                            t.item
                                                              .FechaVencimiento
                                                          )
                                                        )
                                                      ),
                                                    ]),
                                                  ];
                                                },
                                              },
                                            ]),
                                          },
                                          [
                                            a(
                                              "template",
                                              { slot: "no-data" },
                                              [
                                                a(
                                                  "v-alert",
                                                  {
                                                    attrs: {
                                                      value: !0,
                                                      color: "info",
                                                    },
                                                  },
                                                  [
                                                    a(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "text-xs-center",
                                                      },
                                                      [
                                                        a("h1", [
                                                          e._v("Sin registros"),
                                                        ]),
                                                        e._v(" "),
                                                        a(
                                                          "v-icon",
                                                          {
                                                            staticClass:
                                                              "icono-grande",
                                                          },
                                                          [e._v("announcement")]
                                                        ),
                                                        e._v(" "),
                                                        a("p", [
                                                          e._v(
                                                            "Este cliente no ha realizado apartados"
                                                          ),
                                                        ]),
                                                      ],
                                                      1
                                                    ),
                                                  ]
                                                ),
                                              ],
                                              1
                                            ),
                                          ],
                                          2
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-card-actions",
                      [
                        a("v-spacer"),
                        e._v(" "),
                        a(
                          "v-btn",
                          {
                            attrs: {
                              loading: e.cargando,
                              color: "gray",
                              flat: "flat",
                            },
                            nativeOn: {
                              click: function (t) {
                                e.cerrarDialogo();
                              },
                            },
                          },
                          [e._v("Cerrar")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        b = a("VU/8")(h, g, !1, null, null, null).exports,
        A = a("NHnr"),
        _ = {
          beforeMount: function () {
            A.EventBus.$emit("ponerTitulo", "Clientes");
          },
          methods: {
            onMostrarHistorial: function (e) {
              (this.idClienteHistorial = e), (this.dialogos.historial = !0);
            },
            onEditarCliente: function (e) {
              (this.clienteEditado = o()({}, e)), (this.dialogos.editar = !0);
            },
            onEliminarCliente: function (e) {
              (this.clienteParaEliminar = o()({}, e)),
                (this.dialogos.eliminar = !0);
            },
            onClienteEliminado: function () {
              (this.snackbars.clienteEliminado = !0),
                this.$refs.listaDeClientes.obtener();
            },
            onClienteGuardado: function () {
              (this.snackbars.clienteGuardado = !0),
                this.$refs.listaDeClientes.obtener();
            },
            onCambiosClienteGuardados: function () {
              (this.snackbars.clienteEditado = !0),
                this.$refs.listaDeClientes.obtener();
            },
          },
          data: function () {
            return {
              idClienteHistorial: null,
              clienteEditado: {},
              clienteParaEliminar: {},
              dialogos: { nuevo: !1, editar: !1, eliminar: !1, historial: !1 },
              snackbars: {
                clienteGuardado: !1,
                clienteEditado: !1,
                clienteEliminado: !1,
              },
            };
          },
          components: {
            ListaDeClientes: c,
            FormularioNuevoCliente: l.a,
            FormularioEditarCliente: v,
            DialogoConfirmarEliminacion: f,
            Historial: b,
          },
        },
        x = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-layout",
              [
                a("lista-de-clientes", {
                  ref: "listaDeClientes",
                  on: {
                    eliminar: e.onEliminarCliente,
                    editar: e.onEditarCliente,
                    "mostrar-historial": e.onMostrarHistorial,
                  },
                }),
                e._v(" "),
                a("formulario-nuevo-cliente", {
                  attrs: { mostrar: e.dialogos.nuevo },
                  on: {
                    "cliente-guardado": function (t) {
                      e.onClienteGuardado();
                    },
                    "cerrar-dialogo": function (t) {
                      e.dialogos.nuevo = !1;
                    },
                  },
                }),
                e._v(" "),
                a("formulario-editar-cliente", {
                  attrs: {
                    mostrar: e.dialogos.editar,
                    cliente: e.clienteEditado,
                  },
                  on: {
                    "cliente-guardado": function (t) {
                      e.onCambiosClienteGuardados();
                    },
                    "cerrar-dialogo": function (t) {
                      e.dialogos.editar = !1;
                    },
                  },
                }),
                e._v(" "),
                a("dialogo-confirmar-eliminacion", {
                  attrs: {
                    cliente: e.clienteParaEliminar,
                    mostrar: e.dialogos.eliminar,
                  },
                  on: {
                    "cliente-eliminado": e.onClienteEliminado,
                    "cerrar-dialogo": function (t) {
                      e.dialogos.eliminar = !1;
                    },
                  },
                }),
                e._v(" "),
                a("historial", {
                  attrs: {
                    mostrar: e.dialogos.historial,
                    idCliente: e.idClienteHistorial,
                  },
                  on: {
                    cerrar: function (t) {
                      e.dialogos.historial = !1;
                    },
                  },
                }),
                e._v(" "),
                a(
                  "v-tooltip",
                  { attrs: { top: "", "open-delay": "0" } },
                  [
                    a(
                      "v-btn",
                      {
                        attrs: {
                          slot: "activator",
                          fixed: "",
                          dark: "",
                          fab: "",
                          bottom: "",
                          "fill-height": "",
                          right: "",
                          color: "pink",
                        },
                        on: {
                          click: function (t) {
                            e.dialogos.nuevo = !0;
                          },
                        },
                        slot: "activator",
                      },
                      [a("v-icon", [e._v("add")])],
                      1
                    ),
                    e._v(" "),
                    a("span", [e._v("Registrar cliente")]),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 2e3, bottom: !0 },
                    model: {
                      value: e.snackbars.clienteGuardado,
                      callback: function (t) {
                        e.$set(e.snackbars, "clienteGuardado", t);
                      },
                      expression: "snackbars.clienteGuardado",
                    },
                  },
                  [
                    e._v("\n    Cliente guardado correctamente\n    "),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.clienteGuardado = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 2e3, bottom: !0 },
                    model: {
                      value: e.snackbars.clienteEditado,
                      callback: function (t) {
                        e.$set(e.snackbars, "clienteEditado", t);
                      },
                      expression: "snackbars.clienteEditado",
                    },
                  },
                  [
                    e._v("\n    Cambios guardados\n    "),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.clienteEditado = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 2e3, bottom: !0 },
                    model: {
                      value: e.snackbars.clienteEliminado,
                      callback: function (t) {
                        e.$set(e.snackbars, "clienteEliminado", t);
                      },
                      expression: "snackbars.clienteEliminado",
                    },
                  },
                  [
                    e._v("\n    Cliente eliminado\n    "),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.clienteEliminado = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        k = a("VU/8")(_, x, !1, null, null, null);
      t.default = k.exports;
    },
    wOnE: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("NHnr"),
        o = a("8o1w"),
        n = a("JgzN"),
        i = a("976E"),
        s = a("98sZ"),
        c = a("z4sG"),
        l = {
          name: "Inventario",
          components: {
            ProductosMasVendidos: n.a,
            ProductosMenosVendidos: i.a,
            ProductosNuncaVendidos: s.a,
            SeleccionadorFechas: c.a,
          },
          data: function () {
            return {
              reporte: {},
              productosMasVendidos: [],
              productosMenosVendidos: [],
              productosNuncaVendidos: [],
            };
          },
          beforeMount: function () {
            r.EventBus.$emit("ponerTitulo", "Reporte de inventario"),
              this.obtenerReporte();
          },
          methods: {
            obtenerProductosNuncaVendidos: function () {
              var e = this;
              o.b.get("productos/nunca/vendidos/al/contado").then(function (t) {
                e.productosNuncaVendidos = t;
              });
            },
            consultarProductosMasVendidos: function (e) {
              var t = this,
                a = e.inicio,
                r = e.fin;
              o.b
                .get("productos/mas/vendidos/" + a + "/" + r)
                .then(function (e) {
                  t.productosMasVendidos = e;
                });
            },
            consultarProductosMenosVendidos: function (e) {
              var t = this,
                a = e.inicio,
                r = e.fin;
              o.b
                .get("productos/menos/vendidos/" + a + "/" + r)
                .then(function (e) {
                  t.productosMenosVendidos = e;
                });
            },
            obtenerReporte: function () {
              var e = this;
              o.b.get("reporte/inventario").then(function (t) {
                e.reporte = t;
              });
            },
          },
        },
        d = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-container",
              { attrs: { fluid: "", "grid-list-lg": "" } },
              [
                a(
                  "v-layout",
                  { attrs: { row: "", wrap: "" } },
                  [
                    a(
                      "v-flex",
                      { attrs: { xs12: "", sm6: "", md3: "" } },
                      [
                        a(
                          "v-card",
                          {
                            attrs: {
                              height: "100%",
                              color: "blue lighten-2",
                              dark: "",
                            },
                          },
                          [
                            a(
                              "v-card-title",
                              { staticClass: "sin-padding-inferior" },
                              [
                                a("h1", { staticClass: "headline" }, [
                                  e._v(e._s(e.reporte.CantidadProductos)),
                                ]),
                              ]
                            ),
                            e._v(" "),
                            a(
                              "v-card-text",
                              { staticClass: "sin-padding-superior" },
                              [
                                a(
                                  "p",
                                  {
                                    staticClass: "subheading",
                                    attrs: {
                                      title:
                                        "Cantidad de productos distintos que hay en el inventario",
                                    },
                                  },
                                  [
                                    e._v(
                                      "\n            Productos en inventario\n          "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-flex",
                      { attrs: { xs12: "", sm6: "", md3: "" } },
                      [
                        a(
                          "v-card",
                          {
                            attrs: {
                              height: "100%",
                              color: "indigo lighten-2",
                              dark: "",
                            },
                          },
                          [
                            a(
                              "v-card-title",
                              { staticClass: "sin-padding-inferior" },
                              [
                                a("h1", { staticClass: "headline" }, [
                                  e._v(
                                    e._s(
                                      e._f("currency")(e.reporte.PrecioVenta)
                                    )
                                  ),
                                ]),
                              ]
                            ),
                            e._v(" "),
                            a(
                              "v-card-text",
                              { staticClass: "sin-padding-superior" },
                              [
                                a(
                                  "p",
                                  {
                                    staticClass: "subheading",
                                    attrs: {
                                      title:
                                        "Sumatoria del precio de venta multiplicado por la existencia de cada producto",
                                    },
                                  },
                                  [
                                    e._v(
                                      "\n            Precio del inventario\n          "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-flex",
                      { attrs: { xs12: "", sm6: "", md3: "" } },
                      [
                        a(
                          "v-card",
                          {
                            attrs: {
                              height: "100%",
                              color: "amber lighten-1",
                              dark: "",
                            },
                          },
                          [
                            a(
                              "v-card-title",
                              { staticClass: "sin-padding-inferior" },
                              [
                                a("h1", { staticClass: "headline" }, [
                                  e._v(
                                    e._s(
                                      e._f("currency")(e.reporte.PrecioCompra)
                                    )
                                  ),
                                ]),
                              ]
                            ),
                            e._v(" "),
                            a(
                              "v-card-text",
                              { staticClass: "sin-padding-superior" },
                              [
                                a(
                                  "p",
                                  {
                                    staticClass: "subheading",
                                    attrs: {
                                      title:
                                        "Sumatoria del precio de compra multiplicado por la existencia de cada producto",
                                    },
                                  },
                                  [
                                    e._v(
                                      "\n            Costo del inventario\n          "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-flex",
                      { attrs: { xs12: "", sm6: "", md3: "" } },
                      [
                        a(
                          "v-card",
                          {
                            attrs: {
                              height: "100%",
                              color: "green darken-1",
                              dark: "",
                            },
                          },
                          [
                            a(
                              "v-card-title",
                              { staticClass: "sin-padding-inferior" },
                              [
                                a("h1", { staticClass: "headline" }, [
                                  e._v(
                                    "\n            " +
                                      e._s(
                                        e._f("currency")(
                                          e.reporte.PrecioVenta -
                                            e.reporte.PrecioCompra
                                        )
                                      ) +
                                      "\n          "
                                  ),
                                ]),
                              ]
                            ),
                            e._v(" "),
                            a(
                              "v-card-text",
                              { staticClass: "sin-padding-superior" },
                              [
                                a(
                                  "p",
                                  {
                                    staticClass: "subheading",
                                    attrs: {
                                      title:
                                        "Precio del inventario - Costo del inventario",
                                    },
                                  },
                                  [
                                    e._v(
                                      "\n            Utilidad total\n          "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-flex",
                      { attrs: { xs12: "" } },
                      [
                        a(
                          "v-card",
                          [
                            a("v-card-title", [
                              a("h1", { staticClass: "title" }, [
                                e._v("Productos más vendidos"),
                              ]),
                            ]),
                            e._v(" "),
                            a(
                              "v-card-text",
                              [
                                a("seleccionador-fechas", {
                                  on: {
                                    cambio: e.consultarProductosMasVendidos,
                                  },
                                }),
                                e._v(" "),
                                a("productos-mas-vendidos", {
                                  attrs: { productos: e.productosMasVendidos },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e._v(" "),
                    a(
                      "v-flex",
                      { attrs: { xs12: "" } },
                      [
                        a(
                          "v-card",
                          [
                            a("v-card-title", [
                              a("h1", { staticClass: "title" }, [
                                e._v("Productos menos vendidos"),
                              ]),
                            ]),
                            e._v(" "),
                            a(
                              "v-card-text",
                              [
                                a("seleccionador-fechas", {
                                  on: {
                                    cambio: e.consultarProductosMenosVendidos,
                                  },
                                }),
                                e._v(" "),
                                a("productos-menos-vendidos", {
                                  attrs: {
                                    productos: e.productosMenosVendidos,
                                  },
                                }),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        };
      var u = a("VU/8")(
        l,
        d,
        !1,
        function (e) {
          a("E++z");
        },
        null,
        null
      );
      t.default = u.exports;
    },
    xJsL: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a("NHnr"),
        o = a("8o1w"),
        n = a("MRIW"),
        i = {
          beforeMount: function () {
            r.EventBus.$emit("ocultarMenu"),
              r.EventBus.$emit("ponerTitulo", "Iniciar sesión");
          },
          methods: {
            irAlRegistro: function () {
              this.$router.push({ name: "Registro" });
            },
            irAlInicio: function () {
              this.$router.push({ name: "Inicio" });
            },
            intentarIniciarSesion: function () {
              var e = this;
              if (this.$refs.formulario.validate()) {
                var t = {
                  nombre: this.usuario.nombre,
                  contraseña: this.usuario.pass,
                  password: this.usuario.pass,
                  negocio: { correo: this.usuario.correoNegocio },
                };
                (this.cargando = !0),
                  o.a.put("usuario/login", t).then(function (t) {
                    switch (((e.cargando = !1), t)) {
                      case n.j:
                        r.EventBus.$emit("mostrarMenu"),
                          r.EventBus.$emit("mostrarToolbar"),
                          r.EventBus.$emit(
                            "ponerNombreDeUsuario",
                            e.usuario.nombre
                          ),
                          e.irAlInicio();
                        break;
                      case n.k:
                        e.snackbars.loginError = !0;
                        break;
                      case n.l:
                        e.snackbars.loginIncorrecto = !0;
                        break;
                      case n.m:
                        e.snackbars.negocioNoVerificado = !0;
                    }
                  });
              }
            },
          },
          data: function () {
            return {
              usuarioPorDefecto: n.p,
              snackbars: {
                loginIncorrecto: !1,
                loginError: !1,
                negocioNoVerificado: !1,
              },
              reglas: {
                correo: [
                  function (e) {
                    return e
                      ? !!/\S+@\S+/.test(e) ||
                          "Parece que ese no es un correo electrónico válido"
                      : "Escribe tu correo electrónico";
                  },
                ],
                negocio: [
                  function (e) {
                    return !!e || "Escribe el nombre de tu negocio";
                  },
                ],
                nombre: [
                  function (e) {
                    return !!e || "Ingrese su nombre de usuario";
                  },
                ],
                pass: [
                  function (e) {
                    return !!e || "Escriba su contraseña";
                  },
                ],
              },
              usuario: {},
              cargando: !1,
            };
          },
        },
        s = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-layout",
              { attrs: { row: "", wrap: "" } },
              [
                a(
                  "v-flex",
                  {
                    attrs: {
                      xs12: "",
                      sm6: "",
                      "offset-sm3": "",
                      md4: "",
                      "offset-md4": "",
                    },
                  },
                  [
                    a(
                      "v-card",
                      [
                        a("v-card-title", [
                          a("h1", { staticClass: "headline" }, [
                            e._v("Bienvenido de nuevo"),
                          ]),
                        ]),
                        e._v(" "),
                        a(
                          "v-card-text",
                          [
                            a(
                              "v-form",
                              { ref: "formulario" },
                              [
                                a(
                                  "v-container",
                                  { attrs: { fluid: "", "grid-list-md": "" } },
                                  [
                                    a(
                                      "v-layout",
                                      { attrs: { row: "", wrap: "" } },
                                      [
                                        a(
                                          "v-flex",
                                          { attrs: { xs12: "" } },
                                          [
                                            a("v-text-field", {
                                              attrs: {
                                                rules: e.reglas.correo,
                                                "prepend-icon": "email",
                                                label:
                                                  "Correo del negocio elegido al registrarse",
                                                type: "text",
                                                hint: "Correo con el que registraste tu negocio",
                                                required: "",
                                              },
                                              on: {
                                                keyup: function (t) {
                                                  if (
                                                    !("button" in t) &&
                                                    e._k(
                                                      t.keyCode,
                                                      "enter",
                                                      13,
                                                      t.key,
                                                      "Enter"
                                                    )
                                                  )
                                                    return null;
                                                  e.intentarIniciarSesion();
                                                },
                                              },
                                              model: {
                                                value: e.usuario.correoNegocio,
                                                callback: function (t) {
                                                  e.$set(
                                                    e.usuario,
                                                    "correoNegocio",
                                                    t
                                                  );
                                                },
                                                expression:
                                                  "usuario.correoNegocio",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        e._v(" "),
                                        a(
                                          "v-flex",
                                          { attrs: { xs12: "" } },
                                          [
                                            a("v-text-field", {
                                              attrs: {
                                                rules: e.reglas.nombre,
                                                "prepend-icon":
                                                  "account_circle",
                                                label:
                                                  "Usuario (La primera vez es " +
                                                  e.usuarioPorDefecto +
                                                  ")",
                                                type: "text",
                                                required: "",
                                              },
                                              on: {
                                                keyup: function (t) {
                                                  if (
                                                    !("button" in t) &&
                                                    e._k(
                                                      t.keyCode,
                                                      "enter",
                                                      13,
                                                      t.key,
                                                      "Enter"
                                                    )
                                                  )
                                                    return null;
                                                  e.intentarIniciarSesion();
                                                },
                                              },
                                              model: {
                                                value: e.usuario.nombre,
                                                callback: function (t) {
                                                  e.$set(
                                                    e.usuario,
                                                    "nombre",
                                                    t
                                                  );
                                                },
                                                expression: "usuario.nombre",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        e._v(" "),
                                        a(
                                          "v-flex",
                                          { attrs: { xs12: "" } },
                                          [
                                            a("v-text-field", {
                                              attrs: {
                                                rules: e.reglas.pass,
                                                "prepend-icon": "lock",
                                                label:
                                                  "Contraseña (la que eligió al registrarse)",
                                                type: "password",
                                                required: "",
                                              },
                                              on: {
                                                keyup: function (t) {
                                                  if (
                                                    !("button" in t) &&
                                                    e._k(
                                                      t.keyCode,
                                                      "enter",
                                                      13,
                                                      t.key,
                                                      "Enter"
                                                    )
                                                  )
                                                    return null;
                                                  e.intentarIniciarSesion();
                                                },
                                              },
                                              model: {
                                                value: e.usuario.pass,
                                                callback: function (t) {
                                                  e.$set(e.usuario, "pass", t);
                                                },
                                                expression: "usuario.pass",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    a(
                                      "v-btn",
                                      {
                                        attrs: {
                                          loading: e.cargando,
                                          color: "success",
                                        },
                                        on: {
                                          click: function (t) {
                                            e.intentarIniciarSesion();
                                          },
                                        },
                                      },
                                      [e._v("Entrar")]
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-btn",
                              {
                                attrs: {
                                  small: "",
                                  flat: "",
                                  loading: e.cargando,
                                  color: "info",
                                },
                                on: {
                                  click: function (t) {
                                    e.irAlRegistro();
                                  },
                                },
                              },
                              [e._v("Registrarme")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 2e3, bottom: !0 },
                    model: {
                      value: e.snackbars.loginIncorrecto,
                      callback: function (t) {
                        e.$set(e.snackbars, "loginIncorrecto", t);
                      },
                      expression: "snackbars.loginIncorrecto",
                    },
                  },
                  [
                    e._v(
                      "\n    El usuario, correo o contraseña es incorrecto. Intenta de nuevo.\n    "
                    ),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.loginIncorrecto = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 2e3, bottom: !0 },
                    model: {
                      value: e.snackbars.loginError,
                      callback: function (t) {
                        e.$set(e.snackbars, "loginError", t);
                      },
                      expression: "snackbars.loginError",
                    },
                  },
                  [
                    e._v(
                      "\n    Error iniciando sesión. Intenta más tarde.\n    "
                    ),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.loginError = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-snackbar",
                  {
                    attrs: { timeout: 2e3, bottom: !0 },
                    model: {
                      value: e.snackbars.negocioNoVerificado,
                      callback: function (t) {
                        e.$set(e.snackbars, "negocioNoVerificado", t);
                      },
                      expression: "snackbars.negocioNoVerificado",
                    },
                  },
                  [
                    e._v(
                      "\n    El correo electrónico no ha sido verificado\n    "
                    ),
                    a(
                      "v-btn",
                      {
                        attrs: { flat: "", color: "pink" },
                        nativeOn: {
                          click: function (t) {
                            e.snackbars.negocioNoVerificado = !1;
                          },
                        },
                      },
                      [e._v("OK")]
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        c = a("VU/8")(i, s, !1, null, null, null);
      t.default = c.exports;
    },
    z4sG: function (e, t, a) {
      "use strict";
      var r = a("65o/"),
        o = {
          beforeMount: function () {
            var e = new Date();
            (this.fechaInicio = r.a.formatearFecha(e)),
              (this.fechaFin = r.a.formatearFecha(e)),
              this.hoy();
          },
          methods: {
            hoy: function () {
              var e = new Date();
              (this.fechaInicio = r.a.formatearFecha(e)),
                (this.fechaFin = r.a.formatearFecha(e)),
                this.onFechasCambiadas(),
                (this.seleccionado = "hoy");
            },
            semana: function () {
              var e = new Date();
              e.setDate(e.getDate() - e.getDay() + (0 === e.getDay() ? 0 : 1));
              var t = new Date();
              t.setTime(e.getTime() + 5184e5),
                (this.fechaInicio = r.a.formatearFecha(e)),
                (this.fechaFin = r.a.formatearFecha(t)),
                this.onFechasCambiadas(),
                (this.seleccionado = "semana");
            },
            mes: function () {
              var e = new Date();
              e.setDate(1);
              var t = new Date(e.getFullYear(), e.getMonth() + 1, 0);
              (this.fechaInicio = r.a.formatearFecha(e)),
                (this.fechaFin = r.a.formatearFecha(t)),
                this.onFechasCambiadas(),
                (this.seleccionado = "mes");
            },
            guardarFechaInicio: function () {
              (this.seleccionado = ""),
                this.$refs.menuFechaInicio.save(this.fechaInicio),
                this.onFechasCambiadas();
            },
            guardarFechaFin: function () {
              (this.seleccionado = ""),
                this.$refs.menuFechaFin.save(this.fechaFin),
                this.onFechasCambiadas();
            },
            onFechasCambiadas: function () {
              this.$emit("cambio", {
                inicio: r.a.componerFechaParaInicio(this.fechaInicio),
                fin: r.a.componerFechaParaFin(this.fechaFin),
              });
            },
          },
          data: function () {
            return {
              mostrar: !1,
              seleccionado: "",
              fechaInicio: null,
              fechaFin: null,
              menuFechaInicio: !1,
              menuFechaFin: !1,
            };
          },
        },
        n = {
          render: function () {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "v-container",
              { attrs: { fluid: "", "fluid-xs": "" } },
              [
                a(
                  "v-layout",
                  { attrs: { row: "", wrap: "" } },
                  [
                    a(
                      "v-flex",
                      { attrs: { xs12: "" } },
                      [
                        a(
                          "v-btn",
                          {
                            attrs: {
                              color: "info",
                              flat: !e.mostrar,
                              small: "",
                            },
                            on: {
                              click: function (t) {
                                e.mostrar = !e.mostrar;
                              },
                            },
                          },
                          [
                            e._v("\n        Filtrar\n        "),
                            a("v-icon", [e._v("filter_list")]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                e._v(" "),
                a(
                  "v-slide-y-transition",
                  [
                    a(
                      "v-layout",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: e.mostrar,
                            expression: "mostrar",
                          },
                        ],
                        attrs: { row: "", wrap: "" },
                      },
                      [
                        a(
                          "v-flex",
                          { attrs: { xs12: "", sm3: "" } },
                          [
                            a(
                              "v-menu",
                              {
                                ref: "menuFechaInicio",
                                attrs: {
                                  "close-on-content-click": !1,
                                  "nudge-right": 40,
                                  "return-value": e.fechaInicio,
                                  lazy: "",
                                  transition: "scale-transition",
                                  "offset-y": "",
                                  "full-width": "",
                                  "max-width": "290px",
                                  "min-width": "290px",
                                },
                                on: {
                                  "update:returnValue": function (t) {
                                    e.fechaInicio = t;
                                  },
                                },
                                model: {
                                  value: e.menuFechaInicio,
                                  callback: function (t) {
                                    e.menuFechaInicio = t;
                                  },
                                  expression: "menuFechaInicio",
                                },
                              },
                              [
                                a("v-text-field", {
                                  attrs: {
                                    slot: "activator",
                                    label: "Ver desde",
                                    "prepend-icon": "event",
                                    readonly: "",
                                  },
                                  slot: "activator",
                                  model: {
                                    value: e.fechaInicio,
                                    callback: function (t) {
                                      e.fechaInicio = t;
                                    },
                                    expression: "fechaInicio",
                                  },
                                }),
                                e._v(" "),
                                a(
                                  "v-date-picker",
                                  {
                                    attrs: { locale: "es-419", scrollable: "" },
                                    model: {
                                      value: e.fechaInicio,
                                      callback: function (t) {
                                        e.fechaInicio = t;
                                      },
                                      expression: "fechaInicio",
                                    },
                                  },
                                  [
                                    a("v-spacer"),
                                    e._v(" "),
                                    a(
                                      "v-btn",
                                      {
                                        attrs: { flat: "", color: "primary" },
                                        on: {
                                          click: function (t) {
                                            e.menuFechaInicio = !1;
                                          },
                                        },
                                      },
                                      [e._v("Cancelar")]
                                    ),
                                    e._v(" "),
                                    a(
                                      "v-btn",
                                      {
                                        attrs: { flat: "", color: "primary" },
                                        on: {
                                          click: function (t) {
                                            e.guardarFechaInicio();
                                          },
                                        },
                                      },
                                      [e._v("OK")]
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        e._v(" "),
                        a(
                          "v-flex",
                          { attrs: { xs12: "", sm3: "" } },
                          [
                            a(
                              "v-menu",
                              {
                                ref: "menuFechaFin",
                                attrs: {
                                  "close-on-content-click": !1,
                                  "nudge-right": 40,
                                  "return-value": e.fechaFin,
                                  lazy: "",
                                  transition: "scale-transition",
                                  "offset-y": "",
                                  "full-width": "",
                                  "max-width": "290px",
                                  "min-width": "290px",
                                },
                                on: {
                                  "update:returnValue": function (t) {
                                    e.fechaFin = t;
                                  },
                                },
                                model: {
                                  value: e.menuFechaFin,
                                  callback: function (t) {
                                    e.menuFechaFin = t;
                                  },
                                  expression: "menuFechaFin",
                                },
                              },
                              [
                                a("v-text-field", {
                                  attrs: {
                                    slot: "activator",
                                    label: "Hasta",
                                    "prepend-icon": "event",
                                    readonly: "",
                                  },
                                  slot: "activator",
                                  model: {
                                    value: e.fechaFin,
                                    callback: function (t) {
                                      e.fechaFin = t;
                                    },
                                    expression: "fechaFin",
                                  },
                                }),
                                e._v(" "),
                                a(
                                  "v-date-picker",
                                  {
                                    attrs: { locale: "es-419", scrollable: "" },
                                    model: {
                                      value: e.fechaFin,
                                      callback: function (t) {
                                        e.fechaFin = t;
                                      },
                                      expression: "fechaFin",
                                    },
                                  },
                                  [
                                    a("v-spacer"),
                                    e._v(" "),
                                    a(
                                      "v-btn",
                                      {
                                        attrs: { flat: "", color: "primary" },
                                        on: {
                                          click: function (t) {
                                            e.menuFechaFin = !1;
                                          },
                                        },
                                      },
                                      [e._v("Cancelar")]
                                    ),
                                    e._v(" "),
                                    a(
                                      "v-btn",
                                      {
                                        attrs: { flat: "", color: "primary" },
                                        on: {
                                          click: function (t) {
                                            e.guardarFechaFin();
                                          },
                                        },
                                      },
                                      [e._v("OK")]
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                        e._v(" "),
                        a(
                          "v-flex",
                          { attrs: { xs12: "", sm6: "" } },
                          [
                            a(
                              "v-btn",
                              {
                                attrs: {
                                  flat: "hoy" === e.seleccionado,
                                  small: "",
                                  color:
                                    "hoy" === e.seleccionado
                                      ? "success"
                                      : "primary",
                                },
                                on: {
                                  click: function (t) {
                                    e.hoy();
                                  },
                                },
                              },
                              [
                                e._v("Hoy\n          "),
                                a(
                                  "v-icon",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: "hoy" === e.seleccionado,
                                        expression: "seleccionado === 'hoy'",
                                      },
                                    ],
                                  },
                                  [e._v("check")]
                                ),
                              ],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-btn",
                              {
                                attrs: {
                                  flat: "semana" === e.seleccionado,
                                  small: "",
                                  color:
                                    "semana" === e.seleccionado
                                      ? "success"
                                      : "primary",
                                },
                                on: {
                                  click: function (t) {
                                    e.semana();
                                  },
                                },
                              },
                              [
                                e._v("Esta semana\n          "),
                                a(
                                  "v-icon",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: "semana" === e.seleccionado,
                                        expression: "seleccionado === 'semana'",
                                      },
                                    ],
                                  },
                                  [e._v("check")]
                                ),
                              ],
                              1
                            ),
                            e._v(" "),
                            a(
                              "v-btn",
                              {
                                attrs: {
                                  flat: "mes" === e.seleccionado,
                                  small: "",
                                  color:
                                    "mes" === e.seleccionado
                                      ? "success"
                                      : "primary",
                                },
                                on: {
                                  click: function (t) {
                                    e.mes();
                                  },
                                },
                              },
                              [
                                e._v("Este mes\n          "),
                                a(
                                  "v-icon",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: "mes" === e.seleccionado,
                                        expression: "seleccionado === 'mes'",
                                      },
                                    ],
                                  },
                                  [e._v("check")]
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          staticRenderFns: [],
        },
        i = a("VU/8")(o, n, !1, null, null, null);
      t.a = i.exports;
    },
  },
  ["NHnr"]
);
