/* PrismJS 1.16.0
https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript+bash+json&plugins=toolbar+normalize-whitespace+copy-to-clipboard */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function (g) {
        var c = /\blang(?:uage)?-([\w-]+)\b/i, a = 0, C = {
            manual: g.Prism && g.Prism.manual,
            disableWorkerMessageHandler: g.Prism && g.Prism.disableWorkerMessageHandler,
            util: {
                encode: function (e) {
                    return e instanceof M ? new M(e.type,
                        C.util.encode(e.content),
                        e.alias) : Array.isArray(e) ? e.map(C.util.encode) : e.replace(/&/g,
                        "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                }, type: function (e) {
                    return Object.prototype.toString.call(e).slice(8, -1)
                }, objId: function (e) {
                    return e.__id || Object.defineProperty(e, "__id", { value: ++a }), e.__id
                }, clone: function n(e, t) {
                    var r, a, i = C.util.type(e);
                    switch (t = t || {}, i) {
                        case"Object":
                            if (a = C.util.objId(e), t[a]) return t[a];
                            for (var l in r = {}, t[a] = r, e) e.hasOwnProperty(l) && (r[l] = n(e[l],
                                t));
                            return r;
                        case"Array":
                            return a = C.util.objId(e), t[a] ? t[a] : (r = [], t[a] = r, e.forEach(
                                function (e, a) {
                                    r[a] = n(e, t)
                                }), r);
                        default:
                            return e
                    }
                }
            },
            languages: {
                extend: function (e, a) {
                    var n = C.util.clone(C.languages[e]);
                    for (var t in a) n[t] = a[t];
                    return n
                }, insertBefore: function (n, e, a, t) {
                    var r = (t = t || C.languages)[n], i = {};
                    for (var l in r) if (r.hasOwnProperty(l)) {
                        if (l == e) for (var o in a) a.hasOwnProperty(o) && (i[o] = a[o]);
                        a.hasOwnProperty(l) || (i[l] = r[l])
                    }
                    var s = t[n];
                    return t[n] = i, C.languages.DFS(C.languages, function (e, a) {
                        a === s && e != n && (this[e] = i)
                    }), i
                }, DFS: function e(a, n, t, r) {
                    r = r || {};
                    var i = C.util.objId;
                    for (var l in a) if (a.hasOwnProperty(l)) {
                        n.call(a, l, a[l], t || l);
                        var o = a[l], s = C.util.type(o);
                        "Object" !== s || r[i(o)] ? "Array" !== s || r[i(o)] || (r[i(o)] = !0, e(o,
                            n,
                            l,
                            r)) : (r[i(o)] = !0, e(o, n, null, r))
                    }
                }
            },
            plugins: {},
            highlightAll: function (e, a) {
                C.highlightAllUnder(document, e, a)
            },
            highlightAllUnder: function (e, a, n) {
                var t = {
                    callback: n,
                    selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                };
                C.hooks.run("before-highlightall", t);
                for (var r, i = t.elements || e.querySelectorAll(t.selector), l = 0; r = i[l++];) C.highlightElement(
                    r,
                    !0 === a,
                    t.callback)
            },
            highlightElement: function (e, a, n) {
                for (var t, r = "none", i = e; i && !c.test(i.className);) i = i.parentNode;
                i && (r = (i.className.match(c) || [, "none"])[1].toLowerCase(), t = C.languages[r]), e.className = e.className.replace(
                    c,
                    "").replace(/\s+/g,
                    " ") + " language-" + r, e.parentNode && (i = e.parentNode, /pre/i.test(i.nodeName) && (i.className = i.className.replace(
                    c,
                    "").replace(/\s+/g, " ") + " language-" + r));
                var l = { element: e, language: r, grammar: t, code: e.textContent },
                    o = function (e) {
                        l.highlightedCode = e, C.hooks.run("before-insert",
                            l), l.element.innerHTML = l.highlightedCode, C.hooks.run(
                            "after-highlight",
                            l), C.hooks.run("complete", l), n && n.call(l.element)
                    };
                if (C.hooks.run("before-sanity-check", l), l.code) if (C.hooks.run(
                    "before-highlight",
                    l), l.grammar) if (a && g.Worker) {
                    var s = new Worker(C.filename);
                    s.onmessage = function (e) {
                        o(e.data)
                    }, s.postMessage(JSON.stringify({
                        language: l.language,
                        code: l.code,
                        immediateClose: !0
                    }))
                } else o(C.highlight(l.code,
                    l.grammar,
                    l.language)); else o(C.util.encode(l.code)); else C.hooks.run("complete", l)
            },
            highlight: function (e, a, n) {
                var t = { code: e, grammar: a, language: n };
                return C.hooks.run("before-tokenize", t), t.tokens = C.tokenize(t.code,
                    t.grammar), C.hooks.run("after-tokenize",
                    t), M.stringify(C.util.encode(t.tokens), t.language)
            },
            matchGrammar: function (e, a, n, t, r, i, l) {
                for (var o in n) if (n.hasOwnProperty(o) && n[o]) {
                    if (o == l) return;
                    var s = n[o];
                    s = "Array" === C.util.type(s) ? s : [s];
                    for (var g = 0; g < s.length; ++g) {
                        var c = s[g], u = c.inside, h = !!c.lookbehind, f = !!c.greedy, d = 0,
                            m = c.alias;
                        if (f && !c.pattern.global) {
                            var p = c.pattern.toString().match(/[imuy]*$/)[0];
                            c.pattern = RegExp(c.pattern.source, p + "g")
                        }
                        c = c.pattern || c;
                        for (var y = t, v = r; y < a.length; v += a[y].length, ++y) {
                            var k = a[y];
                            if (a.length > e.length) return;
                            if (!(k instanceof M)) {
                                if (f && y != a.length - 1) {
                                    if (c.lastIndex = v, !(x = c.exec(e))) break;
                                    for (var b = x.index + (h ? x[1].length : 0), w = x.index + x[0].length, A = y, P = v, O = a.length; A < O && (P < w || !a[A].type && !a[A - 1].greedy); ++A) (P += a[A].length) <= b && (++y, v = P);
                                    if (a[y] instanceof M) continue;
                                    N = A - y, k = e.slice(v, P), x.index -= v
                                } else {
                                    c.lastIndex = 0;
                                    var x = c.exec(k), N = 1
                                }
                                if (x) {
                                    h && (d = x[1] ? x[1].length : 0);
                                    w = (b = x.index + d) + (x = x[0].slice(d)).length;
                                    var j = k.slice(0, b), S = k.slice(w), E = [y, N];
                                    j && (++y, v += j.length, E.push(j));
                                    var _ = new M(o, u ? C.tokenize(x, u) : x, m, x, f);
                                    if (E.push(_), S && E.push(S), Array.prototype.splice.apply(a,
                                        E), 1 != N && C.matchGrammar(e, a, n, y, v, !0, o), i) break
                                } else if (i) break
                            }
                        }
                    }
                }
            },
            tokenize: function (e, a) {
                var n = [e], t = a.rest;
                if (t) {
                    for (var r in t) a[r] = t[r];
                    delete a.rest
                }
                return C.matchGrammar(e, n, a, 0, 0, !1), n
            },
            hooks: {
                all: {}, add: function (e, a) {
                    var n = C.hooks.all;
                    n[e] = n[e] || [], n[e].push(a)
                }, run: function (e, a) {
                    var n = C.hooks.all[e];
                    if (n && n.length) for (var t, r = 0; t = n[r++];) t(a)
                }
            },
            Token: M
        };

        function M(e, a, n, t, r) {
            this.type = e, this.content = a, this.alias = n, this.length = 0 | (t || "").length, this.greedy = !!r
        }

        if (g.Prism = C, M.stringify = function (e, a) {
            if ("string" == typeof e) return e;
            if (Array.isArray(e)) return e.map(function (e) {
                return M.stringify(e, a)
            }).join("");
            var n = {
                type: e.type,
                content: M.stringify(e.content, a),
                tag: "span",
                classes: ["token", e.type],
                attributes: {},
                language: a
            };
            if (e.alias) {
                var t = Array.isArray(e.alias) ? e.alias : [e.alias];
                Array.prototype.push.apply(n.classes, t)
            }
            C.hooks.run("wrap", n);
            var r = Object.keys(n.attributes).map(function (e) {
                return e + '="' + (n.attributes[e] || "").replace(/"/g, "&quot;") + '"'
            }).join(" ");
            return "<" + n.tag + ' class="' + n.classes.join(" ") + '"' + (r ? " " + r : "") + ">" + n.content + "</" + n.tag + ">"
        }, !g.document) return g.addEventListener && (C.disableWorkerMessageHandler || g.addEventListener(
            "message",
            function (e) {
                var a = JSON.parse(e.data), n = a.language, t = a.code, r = a.immediateClose;
                g.postMessage(C.highlight(t, C.languages[n], n)), r && g.close()
            },
            !1)), C;
        var e = document.currentScript || [].slice.call(document.getElementsByTagName("script"))
            .pop();
        return e && (C.filename = e.src, C.manual || e.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(
            C.highlightAll) : window.setTimeout(C.highlightAll, 16) : document.addEventListener(
            "DOMContentLoaded",
            C.highlightAll))), C
    }(_self);
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: /<!DOCTYPE[\s\S]+?>/i,
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
        greedy: !0,
        inside: {
            tag: {
                pattern: /^<\/?[^\s>\/]+/i,
                inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ }
            },
            "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
                inside: { punctuation: [/^=/, { pattern: /^(\s*)["']|["']$/, lookbehind: !0 }] }
            },
            punctuation: /\/?>/,
            "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } }
        }
    },
    entity: /&#?[\da-z]{1,8};/i
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add(
    "wrap",
    function (a) {
        "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"))
    }), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
    value: function (a, e) {
        var s = {};
        s["language-" + e] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: !0,
            inside: Prism.languages[e]
        }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var n = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s } };
        n["language-" + e] = { pattern: /[\s\S]+/, inside: Prism.languages[e] };
        var i = {};
        i[a] = {
            pattern: RegExp(
                "(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(
                    /__/g,
                    a),
                "i"), lookbehind: !0, greedy: !0, inside: n
        }, Prism.languages.insertBefore("markup", "cdata", i)
    }
}), Prism.languages.xml = Prism.languages.extend("markup",
    {}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
!function (s) {
    var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
    s.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: { pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/, inside: { rule: /@[\w-]+/ } },
        url: {
            pattern: RegExp("url\\((?:" + t.source + "|[^\n\r()]*)\\)", "i"),
            inside: { function: /^url/i, punctuation: /^\(|\)$/ }
        },
        selector: RegExp("[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"),
        string: { pattern: t, greedy: !0 },
        property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
        important: /!important\b/i,
        function: /[-a-z0-9]+(?=\()/i,
        punctuation: /[(){};:,]/
    }, s.languages.css.atrule.inside.rest = s.languages.css;
    var e = s.languages.markup;
    e && (e.tag.addInlined("style", "css"), s.languages.insertBefore("inside",
        "attr-value",
        {
            "style-attr": {
                pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                inside: {
                    "attr-name": { pattern: /^\s*style/i, inside: e.tag.inside },
                    punctuation: /^\s*=\s*['"]|['"]\s*$/,
                    "attr-value": { pattern: /.+/i, inside: s.languages.css }
                },
                alias: "language-css"
            }
        },
        e.tag))
}(Prism);
Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0
    }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }],
    string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
    "class-name": {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
        lookbehind: !0,
        inside: { punctuation: /[.\\]/ }
    },
    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike",
    {
        "class-name": [Prism.languages.clike["class-name"], {
            pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
            lookbehind: !0
        }],
        keyword: [{
            pattern: /((?:^|})\s*)(?:catch|finally)\b/,
            lookbehind: !0
        }, {
            pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: !0
        }],
        number: /\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
        function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
    }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore(
    "javascript",
    "keyword",
    {
        regex: {
            pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
            lookbehind: !0,
            greedy: !0
        },
        "function-variable": {
            pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
            alias: "function"
        },
        parameter: [{
            pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
            lookbehind: !0,
            inside: Prism.languages.javascript
        }, {
            pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
            inside: Prism.languages.javascript
        }, {
            pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
            lookbehind: !0,
            inside: Prism.languages.javascript
        }, {
            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
            lookbehind: !0,
            inside: Prism.languages.javascript
        }],
        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }), Prism.languages.insertBefore("javascript",
    "string",
    {
        "template-string": {
            pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|[^\\`])*`/,
            greedy: !0,
            inside: {
                interpolation: {
                    pattern: /\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                    inside: {
                        "interpolation-punctuation": {
                            pattern: /^\${|}$/,
                            alias: "punctuation"
                        }, rest: Prism.languages.javascript
                    }
                }, string: /[\s\S]+/
            }
        }
    }), Prism.languages.markup && Prism.languages.markup.tag.addInlined("script",
    "javascript"), Prism.languages.js = Prism.languages.javascript;
!function (e) {
    var a = {
        variable: [{
            pattern: /\$?\(\([\s\S]+?\)\)/,
            inside: {
                variable: [{ pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 }, /^\$\(\(/],
                number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
                operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
                punctuation: /\(\(?|\)\)?|,|;/
            }
        }, {
            pattern: /\$\([^)]+\)|`[^`]+`/,
            greedy: !0,
            inside: { variable: /^\$\(|^`|\)$|`$/ }
        }, /\$(?:[\w#?*!@]+|\{[^}]+\})/i]
    };
    e.languages.bash = {
        shebang: { pattern: /^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/, alias: "important" },
        comment: { pattern: /(^|[^"{\\])#.*/, lookbehind: !0 },
        string: [{
            pattern: /((?:^|[^<])<<\s*)["']?(\w+?)["']?\s*\r?\n(?:[\s\S])*?\r?\n\2/,
            lookbehind: !0,
            greedy: !0,
            inside: a
        }, {
            pattern: /(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,
            greedy: !0,
            inside: a
        }],
        variable: a.variable,
        function: {
            pattern: /(^|[\s;|&])(?:add|alias|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|hash|head|help|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logout|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tail|tar|tee|test|time|timeout|times|top|touch|tr|traceroute|trap|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zip|zypper)(?=$|[\s;|&])/,
            lookbehind: !0
        },
        keyword: {
            pattern: /(^|[\s;|&])(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|[\s;|&])/,
            lookbehind: !0
        },
        boolean: { pattern: /(^|[\s;|&])(?:true|false)(?=$|[\s;|&])/, lookbehind: !0 },
        operator: /&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,
        punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];]/
    };
    var t = a.variable[1].inside;
    t.string = e.languages.bash.string, t.function = e.languages.bash.function, t.keyword = e.languages.bash.keyword, t.boolean = e.languages.bash.boolean, t.operator = e.languages.bash.operator, t.punctuation = e.languages.bash.punctuation, e.languages.shell = e.languages.bash
}(Prism);
Prism.languages.json = {
    property: { pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, greedy: !0 },
    string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0 },
    comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    number: /-?\d+\.?\d*(e[+-]?\d+)?/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:true|false)\b/,
    null: { pattern: /\bnull\b/, alias: "keyword" }
};
!function () {
    if ("undefined" != typeof self && self.Prism && self.document) {
        var r = [], i = {}, n = function () {
        };
        Prism.plugins.toolbar = {};
        var t = Prism.plugins.toolbar.registerButton = function (t, n) {
            var e;
            e = "function" == typeof n ? n : function (t) {
                var e;
                return "function" == typeof n.onClick ? ((e = document.createElement("button")).type = "button", e.addEventListener(
                    "click",
                    function () {
                        n.onClick.call(this, t)
                    })) : "string" == typeof n.url ? (e = document.createElement("a")).href = n.url : e = document.createElement(
                    "span"), e.textContent = n.text, e
            }, t in i ? console.warn('There is a button with the key "' + t + '" registered already.') : r.push(
                i[t] = e)
        }, e = Prism.plugins.toolbar.hook = function (a) {
            var t = a.element.parentNode;
            if (t && /pre/i.test(t.nodeName) && !t.parentNode.classList.contains("code-toolbar")) {
                var e = document.createElement("div");
                e.classList.add("code-toolbar"), t.parentNode.insertBefore(e, t), e.appendChild(t);
                var o = document.createElement("div");
                o.classList.add("toolbar"), document.body.hasAttribute("data-toolbar-order") && (r = document.body.getAttribute(
                    "data-toolbar-order").split(",").map(function (t) {
                    return i[t] || n
                })), r.forEach(function (t) {
                    var e = t(a);
                    if (e) {
                        var n = document.createElement("div");
                        n.classList.add("toolbar-item"), n.appendChild(e), o.appendChild(n)
                    }
                }), e.appendChild(o)
            }
        };
        t("label", function (t) {
            var e = t.element.parentNode;
            if (e && /pre/i.test(e.nodeName) && e.hasAttribute("data-label")) {
                var n, a, o = e.getAttribute("data-label");
                try {
                    a = document.querySelector("template#" + o)
                }
                catch (t) {
                }
                return a ? n = a.content : (e.hasAttribute("data-url") ? (n = document.createElement(
                    "a")).href = e.getAttribute("data-url") : n = document.createElement("span"), n.textContent = o), n
            }
        }), Prism.hooks.add("complete", e)
    }
}();
!function () {
    var i = Object.assign || function (e, n) {
        for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
        return e
    };

    function e(e) {
        this.defaults = i({}, e)
    }

    function l(e) {
        for (var n = 0, t = 0; t < e.length; ++t) e.charCodeAt(t) == "\t".charCodeAt(0) && (n += 3);
        return e.length + n
    }

    e.prototype = {
        setDefaults: function (e) {
            this.defaults = i(this.defaults, e)
        }, normalize: function (e, n) {
            for (var t in n = i(this.defaults, n)) {
                var r = t.replace(/-(\w)/g, function (e, n) {
                    return n.toUpperCase()
                });
                "normalize" !== t && "setDefaults" !== r && n[t] && this[r] && (e = this[r].call(
                    this,
                    e,
                    n[t]))
            }
            return e
        }, leftTrim: function (e) {
            return e.replace(/^\s+/, "")
        }, rightTrim: function (e) {
            return e.replace(/\s+$/, "")
        }, tabsToSpaces: function (e, n) {
            return n = 0 | n || 4, e.replace(/\t/g, new Array(++n).join(" "))
        }, spacesToTabs: function (e, n) {
            return n = 0 | n || 4, e.replace(RegExp(" {" + n + "}", "g"), "\t")
        }, removeTrailing: function (e) {
            return e.replace(/\s*?$/gm, "")
        }, removeInitialLineFeed: function (e) {
            return e.replace(/^(?:\r?\n|\r)/, "")
        }, removeIndent: function (e) {
            var n = e.match(/^[^\S\n\r]*(?=\S)/gm);
            return n && n[0].length ? (n.sort(function (e, n) {
                return e.length - n.length
            }), n[0].length ? e.replace(RegExp("^" + n[0], "gm"), "") : e) : e
        }, indent: function (e, n) {
            return e.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++n).join("\t") + "$&")
        }, breakLines: function (e, n) {
            n = !0 === n ? 80 : 0 | n || 80;
            for (var t = e.split("\n"), r = 0; r < t.length; ++r) if (!(l(t[r]) <= n)) {
                for (var i = t[r].split(/(\s+)/g), o = 0, a = 0; a < i.length; ++a) {
                    var s = l(i[a]);
                    n < (o += s) && (i[a] = "\n" + i[a], o = s)
                }
                t[r] = i.join("")
            }
            return t.join("\n")
        }
    }, "undefined" != typeof module && module.exports && (module.exports = e), "undefined" != typeof Prism && (Prism.plugins.NormalizeWhitespace = new e(
        {
            "remove-trailing": !0,
            "remove-indent": !0,
            "left-trim": !0,
            "right-trim": !0
        }), Prism.hooks.add("before-sanity-check", function (e) {
        var n = Prism.plugins.NormalizeWhitespace;
        if (!e.settings || !1 !== e.settings["whitespace-normalization"]) if (e.element && e.element.parentNode || !e.code) {
            var t = e.element.parentNode, r = /(?:^|\s)no-whitespace-normalization(?:\s|$)/;
            if (e.code && t && "pre" === t.nodeName.toLowerCase() && !r.test(t.className) && !r.test(
                e.element.className)) {
                for (var i = t.childNodes, o = "", a = "", s = !1, l = 0; l < i.length; ++l) {
                    var c = i[l];
                    c == e.element ? s = !0 : "#text" === c.nodeName && (s ? a += c.nodeValue : o += c.nodeValue, t.removeChild(
                        c), --l)
                }
                if (e.element.children.length && Prism.plugins.KeepMarkup) {
                    var u = o + e.element.innerHTML + a;
                    e.element.innerHTML = n.normalize(u, e.settings), e.code = e.element.textContent
                } else e.code = o + e.code + a, e.code = n.normalize(e.code, e.settings)
            }
        } else e.code = n.normalize(e.code, e.settings)
    }))
}();
!function () {
    if ("undefined" != typeof self && self.Prism && self.document) if (Prism.plugins.toolbar) {
        var r = window.ClipboardJS || void 0;
        r || "function" != typeof require || (r = require("clipboard"));
        var i = [];
        if (!r) {
            var o = document.createElement("script"), e = document.querySelector("head");
            o.onload = function () {
                if (r = window.ClipboardJS) for (; i.length;) i.pop()()
            }, o.src = "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js", e.appendChild(
                o)
        }
        Prism.plugins.toolbar.registerButton("copy-to-clipboard", function (e) {
            var t = document.createElement("a");
            return t.textContent = "Copy", r ? o() : i.push(o), t;

            function o() {
                var o = new r(t, {
                    text: function () {
                        return e.code
                    }
                });
                o.on("success", function () {
                    t.textContent = "Copied!", n()
                }), o.on("error", function () {
                    t.textContent = "Press Ctrl+C to copy", n()
                })
            }

            function n() {
                setTimeout(function () {
                    t.textContent = "Copy"
                }, 5e3)
            }
        })
    } else console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.")
}();
