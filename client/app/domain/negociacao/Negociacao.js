System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            let Negociacao = class Negociacao {
                constructor(_data, _quantidade, _valor) {
                    Object.assign(this, { _quantidade, _valor });
                    this._data = new Date(_data.getTime());
                    Object.freeze(this);
                }

                get volume() {
                    return this._quantidade * this._valor;
                }

                get data() {
                    return new Date(this._data.getTime());
                }

                get quantidade() {
                    return this._quantidade;
                }

                get valor() {
                    return this._valor;
                }
            };

            _export("Negociacao", Negociacao);
        }
    };
});
//# sourceMappingURL=Negociacao.js.map