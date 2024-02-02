/* eslint sort-keys: error */
import { useRouter } from "next/router";
import type { DocsThemeConfig } from "nextra-theme-docs";
import { LocaleSwitch, useConfig } from "nextra-theme-docs";
import type { ComponentProps, ReactElement } from "react";

const SWRLogo = (props: ComponentProps<"svg">): ReactElement => (
  <svg viewBox="0 0 291 69" fill="none" {...props}>
    <path
      d="M0 36.53c.07 17.6 14.4 32.01 32.01 32.01a32.05 32.05 0 0032.01-32V32a13.2 13.2 0 0123.4-8.31h20.7A32.07 32.07 0 0077.2 0a32.05 32.05 0 00-32 32.01v4.52A13.2 13.2 0 0132 49.71a13.2 13.2 0 01-13.18-13.18 3.77 3.77 0 00-3.77-3.77H3.76A3.77 3.77 0 000 36.53zM122.49 68.54a32.14 32.14 0 01-30.89-23.7h20.67a13.16 13.16 0 0023.4-8.3V32A32.05 32.05 0 01167.68 0c17.43 0 31.64 14 32 31.33l.1 5.2a13.2 13.2 0 0023.4 8.31h20.7a32.07 32.07 0 01-30.91 23.7c-17.61 0-31.94-14.42-32.01-32l-.1-4.7v-.2a13.2 13.2 0 00-13.18-12.81 13.2 13.2 0 00-13.18 13.18v4.52a32.05 32.05 0 01-32.01 32.01zM247.94 23.7a13.16 13.16 0 0123.4 8.31 3.77 3.77 0 003.77 3.77h11.3a3.77 3.77 0 003.76-3.77A32.05 32.05 0 00258.16 0a32.07 32.07 0 00-30.92 23.7h20.7z"
      fill="currentColor"
    />
  </svg>
);

const Vercel = () => (
  <svg height="20" viewBox="0 0 283 64" fill="none">
    <path
      fill="currentColor"
      d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
    />
  </svg>
);

const TITLE = {
  "en-US": "Learn Web Development",
  am: "ዌብ ደቨሎፕመንት ተማሩ",
  "es-ES": "Biblioteca React Hooks para la obtención de datos",
  ru: "React хуки для выборки данных",
};

const EDIT_TEXT = {
  "en-US": "",
  "es-ES": "",
  ru: "",
};

const FOOTER_LINK = {
  "en-US": "https://vercel.com/?utm_source=swr",
  "es-ES": "https://vercel.com/?utm_source=swr_es-es",
  ru: "https://vercel.com/?utm_source=swr_ru",
};

const FOOTER_LINK_TEXT = {
  "en-US": <>Powered by mind</>,
  "es-ES": (
    <>
      Desarrollado por
      <Vercel />
    </>
  ),
  ru: (
    <>
      Работает на
      <Vercel />
    </>
  ),
};

const config: DocsThemeConfig = {
  banner: {
    key: "swr-2",
    text: "Welcome to the 3 Month Web Development Course →",
  },
  darkMode: true,
  docsRepositoryBase:
    "https://github.com/shuding/nextra/blob/core/examples/swr-site",
  editLink: {
    text: function useText() {
      const { locale } = useRouter();
      return EDIT_TEXT[locale!]; // eslint-disable-line @typescript-eslint/no-unnecessary-type-assertion
    },
  },
  primaryHue: 146,
  chat: {
    link: "https://t.me/MindLearningEtDiscussion",
    icon: (
      <svg
        height="30"
        width="30"
        xmlns="http://www.w3.org/2000/svg"
        id="Livello_1"
        data-name="Livello 1"
        viewBox="0 0 240 240"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="120"
            y1="240"
            x2="120"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#1d93d2" />
            <stop offset="1" stopColor="#38b0e3" />
          </linearGradient>
        </defs>
        <title>Telegram_logo</title>
        <circle cx="120" cy="120" r="120" fill="url(#linear-gradient)" />
        <path
          d="M81.229,128.772l14.237,39.406s1.78,3.687,3.686,3.687,30.255-29.492,30.255-29.492l31.525-60.89L81.737,118.6Z"
          fill="#c8daea"
        />
        <path
          d="M100.106,138.878l-2.733,29.046s-1.144,8.9,7.754,0,17.415-15.763,17.415-15.763"
          fill="#a9c6d8"
        />
        <path
          d="M81.486,130.178,52.2,120.636s-3.5-1.42-2.373-4.64c.232-.664.7-1.229,2.1-2.2,6.489-4.523,120.106-45.36,120.106-45.36s3.208-1.081,5.1-.362a2.766,2.766,0,0,1,1.885,2.055,9.357,9.357,0,0,1,.254,2.585c-.009.752-.1,1.449-.169,2.542-.692,11.165-21.4,94.493-21.4,94.493s-1.239,4.876-5.678,5.043A8.13,8.13,0,0,1,146.1,172.5c-8.711-7.493-38.819-27.727-45.472-32.177a1.27,1.27,0,0,1-.546-.9c-.093-.469.417-1.05.417-1.05s52.426-46.6,53.821-51.492c.108-.379-.3-.566-.848-.4-3.482,1.281-63.844,39.4-70.506,43.607A3.21,3.21,0,0,1,81.486,130.178Z"
          fill="#fff"
        />
      </svg>
    ),
  },
  search: {
    placeholder: "Search",
  },
  feedback: {
    content: "Question? You can tell us by clicking here →",
    labels: "feedback",
    useLink() {
      const config = useConfig();
      return `https://google.com/search?q=${encodeURIComponent(
        `Feedback for ${config.title}`
      )}`;
    },
  },
  footer: {
    text: function useText() {
      const { locale } = useRouter();
      return (
        <a
          rel="noreferrer"
          target="_blank"
          className="flex items-center gap-2 font-semibold"
          href={FOOTER_LINK[locale!]} // eslint-disable-line @typescript-eslint/no-unnecessary-type-assertion
        >
          {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion */}
          {FOOTER_LINK_TEXT[locale!]}
        </a>
      );
    },
  },
  head: function useHead() {
    const config = useConfig<{ description?: string; image?: string }>();
    const description =
      config.frontMatter.description ||
      "SWR is a React Hooks library for data fetching. SWR first returns the data from cache (stale), then sends the fetch request (revalidate), and finally comes with the up-to-date data again.";
    const image =
      config.frontMatter.image ||
      "https://assets.vercel.com/image/upload/v1572282926/swr/twitter-card.jpg";
    return (
      <>
        {/* Favicons, meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:image" content={image} />
        <meta name="og:title" content={`${config.title} – SWR`} />
        <meta name="og:image" content={image} />
        <meta name="apple-mobile-web-app-title" content="SWR" />
      </>
    );
  },
  i18n: [
    { locale: "en-US", text: "English" },
    { locale: "am", text: "አማረኛ" },
  ],
  logo: function Logo() {
    const { locale } = useRouter();
    return (
      <>
        {/* <SWRLogo className="h-3" /> */}
        <span
          style={{ fontFamily: "Poppins" }}
          className="hidden select-none font-bold ltr:ml-2 rtl:mr-2 md:inline"
          title={`mind: ${TITLE[locale!] || ""}`} // eslint-disable-line @typescript-eslint/no-unnecessary-type-assertion
        >
          mind
        </span>
      </>
    );
  },
  nextThemes: {
    defaultTheme: "dark",
  },
  project: {
    link: "https://github.com/vercel/swr",
  },
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 1,
    titleComponent: ({ title, type }) =>
      type === "separator" ? (
        <div className="flex items-center gap-2">
          <SWRLogo className="h-1.5 shrink-0" />
          {title}
        </div>
      ) : (
        <>{title}</>
      ),
    toggleButton: true,
  },
  toc: {
    backToTop: true,
    // extraContent: (
    //   // eslint-disable-next-line @next/next/no-img-element -- ignore since url is external and dynamic
    //   <img alt="placeholder cat" src="https://placekitten.com/g/300/200" />
    // ),
    float: true,
    headingComponent: function Heading({ id, children }) {
      return (
        <>
          {children}
          {id === "installation" && " 💿"}
        </>
      );
    },
  },

  useNextSeoProps() {
    const { locale } = useRouter();
    return {
      titleTemplate: `%s | Mind (${locale})`,
    };
  },
};

export default config;
