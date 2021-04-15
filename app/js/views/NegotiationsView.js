System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var View_1, NegotiationsView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            NegotiationsView = class NegotiationsView extends View_1.default {
                template(model) {
                    return `
                <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>DATE</th>
                            <th>QUANTITY</th>
                            <th>VALUE</th>
                            <th>VOLUME</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        ${model.getNegotiations().map(negotiation => (`
                            <tr>
                                <td>${negotiation.date.getDate()}/${negotiation.date.getMonth()}/${negotiation.date.getFullYear()}</td>
                                <td>${negotiation.quantity}</td>
                                <td>${negotiation.value}</td>
                                <td>${negotiation.volume}</td>
                            </tr>
                        `)).join('')}
                    </tbody>
                    
                    <tfoot>
                    </tfoot>
                </table>
            `;
                }
            };
            exports_1("default", NegotiationsView);
        }
    };
});
