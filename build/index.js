var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// css-bundle-update-plugin-ns:/Users/gerardomartinez/Desktop/aideveloperproject/frontendv2/node_modules/@remix-run/css-bundle/dist/index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:/Users/gerardomartinez/Desktop/aideveloperproject/frontendv2/node_modules/@remix-run/css-bundle/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_css_bundle = __toESM(require_dist()), import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-AK25SMNO.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : [],
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/wedding.chat._index.tsx
var wedding_chat_index_exports = {};
__export(wedding_chat_index_exports, {
  action: () => action,
  default: () => Ai,
  meta: () => meta
});
var import_react4 = require("@remix-run/react");

// app/components/Menubar.tsx
var import_react3 = require("react"), import_react_router_dom = require("react-router-dom"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), Menubar = () => {
  let [isMenuOpen, setIsMenuOpen] = (0, import_react3.useState)(!1), handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "flex items-center justify-between py-4 px-8 bg-gray-900", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "svg",
      {
        className: `h-6 w-6 text-white ${isMenuOpen ? "hidden" : "block md:hidden"}`,
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        onClick: handleMenuToggle,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M4 6h16M4 12h16M4 18h16"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Menubar.tsx",
            lineNumber: 23,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/components/Menubar.tsx",
        lineNumber: 14,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Menubar.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `md:flex ${isMenuOpen ? "block" : "hidden"}`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_router_dom.Link, { to: "/", className: "text-white mx-2", onClick: handleMenuToggle, children: "Home" }, void 0, !1, {
        fileName: "app/components/Menubar.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        import_react_router_dom.Link,
        {
          to: "/about",
          className: "text-white mx-2",
          onClick: handleMenuToggle,
          children: "About"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Menubar.tsx",
          lineNumber: 35,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        import_react_router_dom.Link,
        {
          to: "/services",
          className: "text-white mx-2",
          onClick: handleMenuToggle,
          children: "Services"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Menubar.tsx",
          lineNumber: 42,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        import_react_router_dom.Link,
        {
          to: "/contact",
          className: "text-white mx-2",
          onClick: handleMenuToggle,
          children: "Contact"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Menubar.tsx",
          lineNumber: 49,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Menubar.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Menubar.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}, Menubar_default = Menubar;

// app/components/Send.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Send() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col w-full py-[10px] flex-grow md:py-4 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-xl shadow-xs dark:shadow-xs", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "textarea",
      {
        id: "name",
        name: "name",
        tabIndex: 0,
        "data-id": "request-:R1j9dm:-3",
        rows: 1,
        placeholder: "Send a message",
        className: "m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pr-12 pl-3 md:pl-0",
        style: { maxHeight: "200px", height: "24px", overflowY: "hidden" }
      },
      void 0,
      !1,
      {
        fileName: "app/components/Send.tsx",
        lineNumber: 6,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "button",
      {
        className: "absolute p-1 rounded-md md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple text-white bottom-1.5 transition-colors disabled:opacity-40",
        disabled: !1,
        type: "submit",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "", "data-state": "closed", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 16 16",
            fill: "none",
            className: "h-4 w-4 m-1 md:m-0",
            strokeWidth: "2",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "path",
              {
                d: "M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z",
                fill: "currentColor"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Send.tsx",
                lineNumber: 29,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/Send.tsx",
            lineNumber: 22,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Send.tsx",
          lineNumber: 21,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Send.tsx",
        lineNumber: 16,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Send.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/wedding.chat._index.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
var meta = () => [
  { title: "Steph & Ger Wedding!" },
  {
    name: "description",
    content: "This site is entireley dedicated to talk about Steph and Ger's Wedding."
  }
], action = async ({ request }) => {
  let formData = await request.formData(), values = Object.fromEntries(formData);
  console.log(values);
  let response = await fetch(
    `https://gmarropenai.azurewebsites.net/openai?question=${values.name}`
  );
  if (!response.ok)
    throw new Error(
      `Failed to fetch data from the local server with status ${response.status}`
    );
  let data = await response.json();
  return console.log("\u{1F480}", data), data;
};
function Ai() {
  let data = (0, import_react4.useActionData)(), navigation = (0, import_react4.useNavigation)();
  return console.log("\u{1F93C}", navigation.state), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Menubar_default, {}, void 0, !1, {
      fileName: "app/routes/wedding.chat._index.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex place-content-center py-6 md:py-11", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "text-center text-2xl md:text-4xl font-bold", children: [
      "Boda Steph y Ger",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "bg-yellow-100 rounded-full p-2 md:p-3", children: "\u{1F48D}" }, void 0, !1, {
        fileName: "app/routes/wedding.chat._index.tsx",
        lineNumber: 104,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/wedding.chat._index.tsx",
      lineNumber: 102,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/wedding.chat._index.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex place-items-center px-5", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid sm:grid-cols-1 md:grid-cols-4 px-6 gap-x-3 gap-y-6  md:gap-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "md:col-span-1", children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-left", children: "Gerardo es un \xF1o\xF1azo de primera entonces decidio crear esta seccion para que puedas hablar con un chatbot con Inteligencia Artificial a la cual le podras hacer preguntas de los novios o del evento general." }, void 0, !1, {
            fileName: "app/routes/wedding.chat._index.tsx",
            lineNumber: 112,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/wedding.chat._index.tsx",
          lineNumber: 110,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "md:col-span-3 bg-gray-800 rounded-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col-reverse", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Form, { className: "w-full px-3 pb-3", method: "post", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Send, {}, void 0, !1, {
              fileName: "app/routes/wedding.chat._index.tsx",
              lineNumber: 123,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              "input",
              {
                id: "4567",
                name: "formNum",
                type: "hidden",
                value: "testinghidden"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/wedding.chat._index.tsx",
                lineNumber: 124,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/wedding.chat._index.tsx",
            lineNumber: 122,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/wedding.chat._index.tsx",
            lineNumber: 121,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "shadow-sm p-7", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-white text-left text-lg font-base", children: data ? data.Answer : "" }, void 0, !1, {
              fileName: "app/routes/wedding.chat._index.tsx",
              lineNumber: 133,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-5", children: navigation.state === "submitting" ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-500" }, void 0, !1, {
              fileName: "app/routes/wedding.chat._index.tsx",
              lineNumber: 139,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/routes/wedding.chat._index.tsx",
              lineNumber: 138,
              columnNumber: 21
            }, this) : data && data.party.word === !0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              "iframe",
              {
                src: data.party.address,
                width: "300",
                height: "225",
                style: { border: 0 },
                loading: "lazy",
                allowFullScreen: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/wedding.chat._index.tsx",
                lineNumber: 142,
                columnNumber: 21
              },
              this
            ) : null }, void 0, !1, {
              fileName: "app/routes/wedding.chat._index.tsx",
              lineNumber: 136,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/wedding.chat._index.tsx",
            lineNumber: 132,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/wedding.chat._index.tsx",
          lineNumber: 120,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/wedding.chat._index.tsx",
          lineNumber: 119,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/wedding.chat._index.tsx",
        lineNumber: 109,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/wedding.chat._index.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/wedding.chat._index.tsx",
    lineNumber: 99,
    columnNumber: 5
  }, this);
}

// app/routes/wedding._index.tsx
var wedding_index_exports = {};
__export(wedding_index_exports, {
  default: () => Wedding,
  meta: () => meta2
});
var import_react5 = require("@remix-run/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), meta2 = () => [
  { title: "Steph & Ger Wedding!" },
  {
    name: "description",
    content: "This site is entireley dedicated to talk about Steph and Ger's Wedding."
  }
];
function Wedding() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "text-3xl font-bold underline", children: "Hello!" }, void 0, !1, {
      fileName: "app/routes/wedding._index.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react5.Link, { to: "./ai", children: "Galleta" }, void 0, !1, {
      fileName: "app/routes/wedding._index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/wedding._index.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/posts._index.tsx
var posts_index_exports = {};
__export(posts_index_exports, {
  default: () => Posts
});
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Posts() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: "Holi" }, void 0, !1, {
    fileName: "app/routes/posts._index.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/posts._index.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta3
});
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), meta3 = () => [
  { title: "New Remix App" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "Welcome to Remix" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "a",
        {
          target: "_blank",
          href: "https://remix.run/tutorials/blog",
          rel: "noreferrer",
          children: "15m Quickstart Blog Tutorial"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 16,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "a",
        {
          target: "_blank",
          href: "https://remix.run/tutorials/jokes",
          rel: "noreferrer",
          children: "Deep Dive Jokes App Tutorial"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 25,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { target: "_blank", href: "https://remix.run/docs", rel: "noreferrer", children: "Remix Docs" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-FOMCWYYE.js", imports: ["/build/_shared/chunk-XXJQBYCN.js", "/build/_shared/chunk-4QJKEWZT.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-XEJLYCN4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-J2JYYWOG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts._index": { id: "routes/posts._index", parentId: "root", path: "posts", index: !0, caseSensitive: void 0, module: "/build/routes/posts._index-XHOQAWS2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/wedding._index": { id: "routes/wedding._index", parentId: "root", path: "wedding", index: !0, caseSensitive: void 0, module: "/build/routes/wedding._index-KEZ6SA4V.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/wedding.chat._index": { id: "routes/wedding.chat._index", parentId: "root", path: "wedding/chat", index: !0, caseSensitive: void 0, module: "/build/routes/wedding.chat._index-RL2INOON.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "2e433439", hmr: void 0, url: "/build/manifest-2E433439.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/wedding.chat._index": {
    id: "routes/wedding.chat._index",
    parentId: "root",
    path: "wedding/chat",
    index: !0,
    caseSensitive: void 0,
    module: wedding_chat_index_exports
  },
  "routes/wedding._index": {
    id: "routes/wedding._index",
    parentId: "root",
    path: "wedding",
    index: !0,
    caseSensitive: void 0,
    module: wedding_index_exports
  },
  "routes/posts._index": {
    id: "routes/posts._index",
    parentId: "root",
    path: "posts",
    index: !0,
    caseSensitive: void 0,
    module: posts_index_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/index.js:
  (**
   * @remix-run/css-bundle v1.17.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=index.js.map
