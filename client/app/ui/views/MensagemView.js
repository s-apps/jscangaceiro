System.register(['./View.js'], function (_export, _context) {
    "use strict";

    var View;
    return {
        setters: [function (_ViewJs) {
            View = _ViewJs.View;
        }],
        execute: function () {
            let MensagemView = class MensagemView extends View {
                // constructor(seletor){
                //     this._elemento = document.querySelector(seletor);
                // }

                template(model) {
                    return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;
                }

                // update(model){
                //     this._elemento.innerHTML = this.template(model);
                // }
            };

            _export('MensagemView', MensagemView);
        }
    };
});
//# sourceMappingURL=MensagemView.js.map