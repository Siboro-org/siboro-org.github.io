(function () {
    'use strict'; google.elements.keyboard.loadme({
        id: "my_myansan", title: "\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c(\u1019\u103c\u1014\u103a\u1005\u1036)", mappings: {
            "": { "": "`\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1040-=\u1006\u1010\u1014\u1019\u1021\u1015\u1000\u1004\u101e\u1005\u101f\u1029\u104f{{\u200c\u1031}}\u103b\u102d\u103a\u102b\u1037\u103c\u102f\u1030\u1038'\u1016\u1011\u1001\u101c\u1018\u100a\u102c\u101a.\u104b" }, "c ": { "": "{{\u1004\u103a\u1039}}" }, "s,sc": { "": '\u100e\u100d{{\u100f\u1039\u100d}}\u100b{{\u1000\u103b\u1015\u103a}}%/\u101b\u1002()x+\u1008\u101d\u1023\u104e\u1024\u104c\u1025\u104d\u103f\u100f\u1027\u102a{{\u100b\u1039\u100c}}\u1017\u103e\u102e\u1039\u103d\u1036\u1032\u1012\u1013\u1038"\u1007\u100c\u1003\u1020\u101a\u1009\u1026\u101a.\u104a' },
            "l,cl": { "": "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./" }, "sl,scl": { "": '~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?' }
        }, transform: {
            "\u200c\u1031([\u1000-\u102a\u103f\u104e])": "$1\u1031", "([\u103c-\u103e]*\u1031)\u001d\u103b": "\u103b$1", "([\u103b]*)([\u103d-\u103e]*)\u1031\u001d\u103c": "$1\u103c$2\u1031", "([\u103b\u103c]*)([\u103e]*)\u1031\u001d\u103d": "$1\u103d$2\u1031", "([\u103b-\u103d]*)\u1031\u001d\u103e": "$1\u103e\u1031", "([\u103c-\u103e]+)\u001d?\u103b": "\u103b$1", "([\u103b]*)([\u103d-\u103e]+)\u001d?\u103c": "$1\u103c$2",
            "([\u103b\u103c]*)([\u103e]+)\u001d?\u103d": "$1\u103d$2", "\u1004\u1031\u001d\u103a": "\u1004\u103a\u1031", "\u1004\u103a\u1031\u001d\u1039": "\u1004\u103a\u1039\u1031", "\u1004\u103a\u1039\u1031\u001d([\u1000-\u102a\u103f\u104e])": "\u1004\u103a\u1039$1\u1031", "([\u1000-\u102a\u103f\u104e])\u1031\u001d\u1039": "$1\u1039\u1031", "\u1039\u1031\u001d([\u1000-\u1019\u101c\u101e\u1020\u1021])": "\u1039$1\u1031", "\u1036([\u102d|\u102d\u1030|\u102f|\u1030])": "$1\u1036", "\u1036([\u103b|\u103c\u103d|\u103e])": "$1\u1036"
        }
    });
}).call(this);
