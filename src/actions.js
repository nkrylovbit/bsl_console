define(['vs/editor/editor.main'], function () {

    actions = {
        copy_bsl: {
            label: 'Копировать',
            key: monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_C,
            cmd: monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_C),
            order: 1.1,
            callback: function (ed) {
                selectionText = editor.getModel().getValueInRange(editor.getSelection());
                return null;
            }
        },
        paste_bsl: {
            label: 'Вставить',
            key: monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_V,
            cmd: monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_V),
            order: 1.2,
            callback: function (ed) {                
                setText(selectionText, null);                
                return null;
            }
        },
        query_bsl: {
            label: 'Конструктор запроса...',
            key: monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_D,
            cmd: monaco.KeyMod.chord(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_D),
            order: 1.3,
            callback: function (ed) {     
                sendEvent('EVENT_QUERY_CONSTRUCT', getQuery());
                return null;
            }
        },
        formatstr_bsl: {
            label: 'Конструктор форматной строки...',
            key: null,
            cmd: null,
            order: 1.4,
            callback: function (ed) {     
                sendEvent('EVENT_FORMAT_CONSTRUCT', getFormatString());
                return null;
            }
        }
    }

});