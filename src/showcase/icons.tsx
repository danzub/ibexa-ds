import React from "react";

/* ─── Icon set for Main Menu Items showcase ───
   Representative icons for common menu contexts.
   All icons are 20×20 viewBox, stroke-based where applicable. */

export const DashboardIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M9.637 1.137a.469.469 0 01.663 0l7.5 7.5a.469.469 0 01-.332.8h-1.667a.469.469 0 010-.938h.535L9.97 2.132 3.6 8.5h.535a.469.469 0 010 .938H2.47a.469.469 0 01-.332-.8l7.5-7.5z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M.469 9c.26 0 .469.21.469.469v5.833c0 .318.126.623.35.847.225.225.53.351.847.351h8.333c.318 0 .623-.126.848-.35a1.172 1.172 0 00.35-.848V9.469a.469.469 0 011 0v5.833a2.11 2.11 0 01-.625 1.51 2.11 2.11 0 01-1.51.625H2.135a2.11 2.11 0 01-1.51-.625A2.11 2.11 0 010 15.302V9.469A.469.469 0 01.469 9z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M2.635 10.604c-.318 0-.622.126-.847.35-.225.225-.351.53-.351.847v5a.469.469 0 01-.938 0v-5a2.11 2.11 0 01.625-1.51 2.11 2.11 0 011.51-.625h1.667a2.11 2.11 0 011.51.625 2.11 2.11 0 01.625 1.51v5a.469.469 0 01-.938 0v-5c0-.318-.126-.622-.35-.847a1.172 1.172 0 00-.848-.351H2.635z" fill={color} />
  </svg>
);

export const ContentIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M3.802 1.667h5a.469.469 0 010 .938h-5a1.172 1.172 0 00-.847.35 1.172 1.172 0 00-.351.848v12.5c0 .318.126.623.35.847.225.225.53.351.848.351h12.5c.317 0 .622-.126.847-.35.225-.225.351-.53.351-.848V7.5a.469.469 0 011 0v8.333a2.11 2.11 0 01-.625 1.51 2.11 2.11 0 01-1.51.625H3.802a2.11 2.11 0 01-1.51-.625 2.11 2.11 0 01-.625-1.51V3.802a2.11 2.11 0 01.625-1.51 2.11 2.11 0 011.51-.625z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M17.448.862a.469.469 0 01.69.635l-7.5 8.333a.469.469 0 01-.664.03l-4.167-3.75a.469.469 0 01.628-.697l3.847 3.462L17.448.862z" fill={color} />
  </svg>
);

export const UsersIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M10 4.167a2.344 2.344 0 100 4.688 2.344 2.344 0 000-4.688zm-2.813 2.344a2.813 2.813 0 115.625 0 2.813 2.813 0 01-5.625 0z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M5.833 11.667a2.344 2.344 0 100 4.688 2.344 2.344 0 000-4.688zm-2.813 2.344a2.813 2.813 0 115.625 0 2.813 2.813 0 01-5.625 0z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M14.167 11.667a2.344 2.344 0 100 4.688 2.344 2.344 0 000-4.688zm-2.813 2.344a2.813 2.813 0 115.625 0 2.813 2.813 0 01-5.625 0z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M5.208 10.833c-1.38 0-2.63.56-3.534 1.465a.469.469 0 11-.663-.663A5.208 5.208 0 015.208 9.896h9.584a5.208 5.208 0 013.697 1.532.469.469 0 11-.664.663 4.271 4.271 0 00-3.033-1.258H5.208z" fill={color} />
  </svg>
);

export const ReportsIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M4.167 15.833V6.667a.469.469 0 011 0v9.166c0 .258.21.469.469.469h9.166a.469.469 0 010 .938H5.635a.937.937 0 01-.938-.937z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M7.5 10.833a.469.469 0 01.469.469v3.125a.469.469 0 01-.938 0v-3.125a.469.469 0 01.469-.469z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M10 7.5a.469.469 0 01.469.469v6.25a.469.469 0 01-.938 0v-6.25A.469.469 0 0110 7.5z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M12.5 4.167a.469.469 0 01.469.469v9.583a.469.469 0 01-.938 0V4.636a.469.469 0 01.469-.469z" fill={color} />
  </svg>
);

export const SettingsIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M10 6.667a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zM5.625 10a4.375 4.375 0 118.75 0 4.375 4.375 0 01-8.75 0z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M8.958 2.396a.937.937 0 011.584 0l.78 1.196c.122.187.324.303.543.32l1.43.114c.673.054 1.12.7.99 1.362l-.255 1.417a.938.938 0 00.16.75l.827 1.158a.937.937 0 01-.758 1.46h-1.442a.937.937 0 00-.757.383l-.874 1.19a.937.937 0 01-1.514 0l-.874-1.19a.937.937 0 00-.757-.383H5.667a.937.937 0 01-.758-1.46l.827-1.158a.938.938 0 00.16-.75l-.255-1.417a.937.937 0 01.99-1.362l1.43-.114a.937.937 0 00.543-.32l.78-1.196zm.792.758l-.78 1.196a1.875 1.875 0 01-1.086.64l-1.43.114a.063.063 0 00-.066.091l.255 1.417a1.875 1.875 0 01-.32 1.5l-.827 1.158a.063.063 0 00.05.1h1.442a1.875 1.875 0 011.515.766l.874 1.19a.063.063 0 00.101 0l.874-1.19a1.875 1.875 0 011.515-.766h1.442a.063.063 0 00.05-.1l-.827-1.159a1.875 1.875 0 01-.32-1.5l.255-1.417a.063.063 0 00-.066-.09l-1.43-.115a1.875 1.875 0 01-1.086-.64l-.78-1.196a.063.063 0 00-.104 0z" fill={color} />
  </svg>
);

export const StoreIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M1.875 3.802a.937.937 0 01.937-.937h14.376a.937.937 0 01.937.937v.573c0 .25-.1.49-.276.666l-3.75 3.75a.937.937 0 01-.663.275H6.146a.937.937 0 01-.663-.275l-3.75-3.75a.937.937 0 01-.277-.666v-.573zm.938-1.875A1.875 1.875 0 000 3.802v.573c0 .5.199.979.554 1.334l3.75 3.75a1.875 1.875 0 001.326.55h7.37c.498 0 .976-.198 1.326-.55l3.75-3.75A1.875 1.875 0 0019.063 4.375v-.573a1.875 1.875 0 00-1.875-1.875H2.813z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M3.333 8.646a.469.469 0 01.469.469v5.208c0 .258.21.469.469.469h11.458a.469.469 0 00.469-.469V9.115a.469.469 0 011 0v5.208a1.406 1.406 0 01-1.406 1.406H4.271a1.406 1.406 0 01-1.407-1.406V9.115a.469.469 0 01.469-.469z" fill={color} />
  </svg>
);

export const MailIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M1.875 5.208a.937.937 0 01.937-.937h14.376a.937.937 0 01.937.937v9.584a.937.937 0 01-.937.937H2.812a.937.937 0 01-.937-.937V5.208zm.937-1.875A1.875 1.875 0 000 5.208v9.584a1.875 1.875 0 001.875 1.875h14.376a1.875 1.875 0 001.875-1.875V5.208A1.875 1.875 0 0016.25 3.333H2.812z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M1.62 5.58a.469.469 0 01.64-.147L10 9.792l7.74-4.36a.469.469 0 01.46.817l-7.74 4.375a.469.469 0 01-.46 0L1.26 6.25a.469.469 0 01-.147-.64z" fill={color} />
  </svg>
);

export const SearchIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M8.542 1.667a6.875 6.875 0 100 13.75 6.875 6.875 0 000-13.75zM.833 8.542a7.708 7.708 0 1113.71 4.81l3.646 3.646a.469.469 0 11-.663.663l-3.646-3.646A7.708 7.708 0 01.833 8.542z" fill={color} />
  </svg>
);

export const ChartIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M1.667 15.833V4.167a.469.469 0 011 0v11.666c0 .258.21.469.469.469h15a.469.469 0 010 .938h-15a.937.937 0 01-.938-.937z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M5.208 10.833a.469.469 0 01.469.469v3.125a.469.469 0 01-.938 0v-3.125a.469.469 0 01.469-.469z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M9.375 7.5a.469.469 0 01.469.469v6.458a.469.469 0 01-.938 0V7.97a.469.469 0 01.469-.469z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M13.542 4.167a.469.469 0 01.469.469v9.791a.469.469 0 01-.938 0V4.636a.469.469 0 01.469-.469z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M17.708 9.375a.469.469 0 01.469.469v4.583a.469.469 0 01-.938 0V9.844a.469.469 0 01.469-.469z" fill={color} />
  </svg>
);

export const TrashIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.396 2.396a.937.937 0 01.663-.276h3.882a.937.937 0 01.663.276l1.458 1.458h2.97a.469.469 0 010 .938H3.958a.469.469 0 010-.938h2.97l1.468-1.458zm-.19.938h5.588L11.75 2.396a.469.469 0 00-.332-.137H8.583a.469.469 0 00-.332.137l-1.044 1.044v-.063z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M4.063 6.146a.469.469 0 01.469.469v8.333c0 .258.21.469.469.469h9.998a.469.469 0 00.469-.469V6.615a.469.469 0 011 0v8.333a1.406 1.406 0 01-1.406 1.406H5.001a1.406 1.406 0 01-1.407-1.406V6.615a.469.469 0 01.469-.469z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M7.5 7.5a.469.469 0 01.469.469v6.25a.469.469 0 01-.938 0v-6.25A.469.469 0 017.5 7.5z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M10 7.5a.469.469 0 01.469.469v6.25a.469.469 0 01-.938 0v-6.25A.469.469 0 0110 7.5z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M12.5 7.5a.469.469 0 01.469.469v6.25a.469.469 0 01-.938 0v-6.25a.469.469 0 01.469-.469z" fill={color} />
  </svg>
);

export const StarIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M9.54 1.328a.469.469 0 01.92 0l1.56 4.803h5.048a.469.469 0 01.276.847l-4.084 2.967 1.56 4.803a.469.469 0 01-.721.525L10 13.204l-4.098 2.976a.469.469 0 01-.721-.525l1.56-4.803L2.657 6.885a.469.469 0 01.276-.847h5.048L9.54 1.328zm.46 1.495L8.67 6.51a.469.469 0 01-.446.327H3.97l3.278 2.382a.469.469 0 01.17.525l-1.252 3.855 3.28-2.383a.469.469 0 01.553 0l3.28 2.383-1.252-3.855a.469.469 0 01.17-.525l3.278-2.382h-4.254a.469.469 0 01-.446-.327L10 2.823z" fill={color} />
  </svg>
);

export const PinnedIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12.734 1.328a.469.469 0 01.663.663l-2.5 2.5a.937.937 0 00-.275.663v5.416a.469.469 0 01-.938 0V5.154c0-.498.198-.976.55-1.328l2.5-2.5z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M9.375 9.792a.469.469 0 01.469.469v4.166a.469.469 0 01-.938 0v-4.166a.469.469 0 01.469-.469z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M7.396 14.271a.469.469 0 01.469-.469h3.334a.469.469 0 010 .938H7.865a.469.469 0 01-.469-.469z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M9.375 2.396a.469.469 0 01.469.469v2.5a.469.469 0 01-.938 0v-2.5a.469.469 0 01.469-.469z" fill={color} />
  </svg>
);

export const CampaignsIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M15.833 4.167a.469.469 0 01.469.469v10.833a.469.469 0 01-.938 0V4.636a.469.469 0 01.469-.469z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M10.833 7.5a.469.469 0 01.469.469v7.5a.469.469 0 01-.938 0v-7.5a.469.469 0 01.469-.469z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M5.833 10.833a.469.469 0 01.469.469v4.167a.469.469 0 01-.938 0v-4.167a.469.469 0 01.469-.469z" fill={color} />
  </svg>
);

export const BellIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M10 1.667a.469.469 0 01.469.469v.677a5.729 5.729 0 015.26 5.708v3.958l1.406 1.407a.937.937 0 01-.663 1.6H3.528a.937.937 0 01-.663-1.6l1.406-1.407V8.52a5.729 5.729 0 015.26-5.708V2.136a.469.469 0 01.469-.469zm0 1.615a4.792 4.792 0 00-4.792 4.792v4.166l-1.406 1.407h12.396l-1.406-1.407V8.074A4.792 4.792 0 0010 3.282z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M8.125 15.208a.469.469 0 01.469.469 1.406 1.406 0 002.812 0 .469.469 0 011 0 2.344 2.344 0 01-4.688 0 .469.469 0 01.407-.469z" fill={color} />
  </svg>
);

export const BrainIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M10 1.667a.469.469 0 01.469.469v2.604a.469.469 0 01-.938 0V2.136a.469.469 0 01.469-.469z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M5.208 4.167a.469.469 0 01.469.469v2.604a.469.469 0 01-.938 0V4.636a.469.469 0 01.469-.469z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M14.792 4.167a.469.469 0 01.469.469v2.604a.469.469 0 01-.938 0V4.636a.469.469 0 01.469-.469z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M3.333 8.542a.469.469 0 01.469.469v2.604a.469.469 0 01-.938 0V9.01a.469.469 0 01.469-.469z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M16.667 8.542a.469.469 0 01.469.469v2.604a.469.469 0 01-.938 0V9.01a.469.469 0 01.469-.469z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M6.146 14.167a.469.469 0 01.469.469v2.604a.469.469 0 01-.938 0v-2.604a.469.469 0 01.469-.469z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M13.854 14.167a.469.469 0 01.469.469v2.604a.469.469 0 01-.938 0v-2.604a.469.469 0 01.469-.469z" fill={color} />
    <path d="M7.5 9.375a.469.469 0 01.469-.469h4.167a.469.469 0 010 .938H7.969a.469.469 0 01-.469-.469z" fill={color} />
    <path d="M9.531 7.344a.469.469 0 01.469.469v4.167a.469.469 0 01-.938 0V7.813a.469.469 0 01.469-.469z" fill={color} />
  </svg>
);

export const BoltIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M11.458 1.667a.469.469 0 01.454.338l2.083 7.292a.469.469 0 01-.45.6H9.948l-1.354 7.083a.469.469 0 01-.912-.174l2.083-7.292a.469.469 0 01.45-.6h3.167L10.98 2.005a.469.469 0 01.478-.338z" fill={color} />
  </svg>
);

export const PuzzleIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M5.208 2.396a.937.937 0 00-.937.937v2.292H3.958a.937.937 0 00-.937.938v.625a.469.469 0 01-.938 0v-.625a1.875 1.875 0 011.875-1.875h.625V3.333a1.875 1.875 0 011.875-1.875h1.25a1.875 1.875 0 011.875 1.875v.625h.625a1.875 1.875 0 011.875 1.875v.625a.469.469 0 01-.938 0v-.625a.937.937 0 00-.937-.938h-.625V3.333a.937.937 0 00-.937-.937h-1.25z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M5.208 10.417a.937.937 0 00-.937.937v5.416c0 .258.21.469.469.469h5.208a.469.469 0 010 .938H4.74a.937.937 0 01-.937-.938v-5.416a1.875 1.875 0 011.875-1.875h5.417a.937.937 0 00.937-.938v-.625a.469.469 0 01.938 0v.625a1.875 1.875 0 01-1.875 1.875H5.208z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M15.833 10.417a.937.937 0 00-.937.937v5.416c0 .258.21.469.469.469h.625a.469.469 0 010 .938h-.625a.937.937 0 01-.937-.938v-5.416a1.875 1.875 0 011.875-1.875h.625V9.688a.469.469 0 01.938 0v1.042h.625a1.875 1.875 0 011.875 1.875v5.416a.937.937 0 01-.937.938h-.625a.469.469 0 010-.938h.625a.469.469 0 00.469-.469v-5.416a.937.937 0 00-.937-.937h-.625V9.688a1.875 1.875 0 00-1.875-1.875h-.625z" fill={color} />
  </svg>
);

export const ShieldIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M10 1.667a.469.469 0 01.294.103l4.167 3.333a.469.469 0 01.18.37v4.167a5.625 5.625 0 01-2.24 4.493l-2.013 1.51a.469.469 0 01-.563 0l-2.013-1.51A5.625 5.625 0 015.625 9.64V5.473a.469.469 0 01.18-.37l4.167-3.333a.469.469 0 01.028-.022l.022-.017a.469.469 0 01.049-.031l.028-.016a.469.469 0 01.054-.023l.03-.01a.469.469 0 01.058-.015l.032-.006a.469.469 0 01.063-.005h.032a.469.469 0 01.063.005l.032.006a.469.469 0 01.058.015l.03.01a.469.469 0 01.054.023l.028.016a.469.469 0 01.049.031l.022.017.028.022zm-.21.877L5.99 5.66v3.98a4.688 4.688 0 001.867 3.744l1.793 1.345 1.793-1.345A4.688 4.688 0 0013.31 9.64V5.66l-3.8-3.042-.72-.574z" fill={color} />
  </svg>
);

export const FileTextIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M5.208 2.396a.937.937 0 00-.937.937v13.334c0 .258.21.469.469.469h10a.469.469 0 00.469-.469V7.5a.469.469 0 00-.137-.332l-4.167-4.167A.469.469 0 0010.833 2.5l-5.417-.052a.063.063 0 00-.008 0h-.2zm-.937-.937A1.875 1.875 0 015.208 0h5.625c.249 0 .488.099.664.275l4.167 4.167c.176.176.275.415.275.664v10.417a1.406 1.406 0 01-1.406 1.406H4.74a1.406 1.406 0 01-1.407-1.406V3.333a1.875 1.875 0 011.875-1.875h-.937z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M10.625 2.396a.469.469 0 01.469.469v3.958h3.958a.469.469 0 010 .938h-4.167a.469.469 0 01-.469-.469V2.865a.469.469 0 01.469-.469z" fill={color} />
    <path d="M7.188 10.208a.469.469 0 010-.938h5.625a.469.469 0 010 .938H7.188z" fill={color} />
    <path d="M7.188 12.708a.469.469 0 010-.938h5.625a.469.469 0 010 .938H7.188z" fill={color} />
    <path d="M7.188 15.208a.469.469 0 010-.938h3.125a.469.469 0 010 .938H7.188z" fill={color} />
  </svg>
);

export const GlobeIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M10 1.667a8.333 8.333 0 100 16.666 8.333 8.333 0 000-16.666zM.833 10a9.167 9.167 0 1118.334 0A9.167 9.167 0 01.833 10z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M10 1.667a.469.469 0 01.469.469v16.666a.469.469 0 01-.938 0V2.136a.469.469 0 01.469-.469z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M1.667 10a.469.469 0 01.469-.469h16.666a.469.469 0 010 .938H2.136a.469.469 0 01-.469-.469z" fill={color} />
    <path d="M10 2.396c1.36.94 2.5 2.88 3.08 5.208H6.92c.58-2.328 1.72-4.268 3.08-5.208z" fill={color} />
    <path d="M6.4 8.333h7.2c.26 0 .469.21.469.469 0 1.61-.25 3.108-.693 4.375H6.624A12.35 12.35 0 015.931 8.8c0-.26.21-.469.469-.469z" fill={color} />
    <path d="M7.396 14.375h5.208c-.58 2.328-1.72 4.268-3.08 5.208-1.36-.94-2.5-2.88-3.08-5.208z" fill={color} />
  </svg>
);

export const PhoneIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M5.208 2.396a.937.937 0 00-.937.937v13.334c0 .258.21.469.469.469h10a.469.469 0 00.469-.469V3.333a.937.937 0 00-.937-.937H5.208zm-.937-.937A1.875 1.875 0 015.208 0h9.584a1.875 1.875 0 011.875 1.875v14.792a1.406 1.406 0 01-1.406 1.406H4.74a1.406 1.406 0 01-1.407-1.406V1.875a1.875 1.875 0 011.875-1.875h-.937z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M8.542 15.208a.469.469 0 01.469-.469h2.083a.469.469 0 010 .938H9.01a.469.469 0 01-.469-.469z" fill={color} />
  </svg>
);

export const FolderIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M2.813 4.167a.937.937 0 00-.937.937v10a.937.937 0 00.937.937h14.376a.937.937 0 00.937-.937V6.667a.937.937 0 00-.937-.937h-6.459l-1.458-1.458a.937.937 0 00-.663-.275H2.813zm-.937-1.875A1.875 1.875 0 012.812 0h5.625c.498 0 .976.198 1.328.55l1.458 1.458h5.625a1.875 1.875 0 011.875 1.875v8.437a1.875 1.875 0 01-1.875 1.875H2.812a1.875 1.875 0 01-1.875-1.875V5.104a1.875 1.875 0 011.875-1.875h-.937z" fill={color} />
  </svg>
);

export const CartIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M1.667 2.396a.469.469 0 01.469-.469h1.875a.937.937 0 01.896.663l.403 1.21h11.874a.937.937 0 01.896 1.212l-1.562 5.208a.937.937 0 01-.896.663H6.875a.937.937 0 01-.896-.663L4.49 3.8l-.323-.97H2.136a.469.469 0 01-.469-.469zm3.063 1.875l1.354 4.063h9.166l1.25-4.167H4.73z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M6.458 13.333a1.406 1.406 0 100 2.812 1.406 1.406 0 000-2.812zm-1.875 1.406a1.875 1.875 0 113.75 0 1.875 1.875 0 01-3.75 0z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M13.542 13.333a1.406 1.406 0 100 2.812 1.406 1.406 0 000-2.812zm-1.875 1.406a1.875 1.875 0 113.75 0 1.875 1.875 0 01-3.75 0z" fill={color} />
  </svg>
);

export const PersonIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M10 3.333a2.708 2.708 0 100 5.417 2.708 2.708 0 000-5.417zM6.458 6.042a3.646 3.646 0 117.291 0 3.646 3.646 0 01-7.291 0z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M5.208 13.958a.469.469 0 01.469-.469h9.166a.469.469 0 010 .938H5.677a.469.469 0 01-.469-.469z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M3.958 11.667a.469.469 0 01.469-.469h11.25a.469.469 0 010 .938H4.427a.469.469 0 01-.469-.469z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M3.333 15.625a.469.469 0 01.469-.469h12.5a.469.469 0 010 .938H3.802a.469.469 0 01-.469-.469z" fill={color} />
  </svg>
);

export const GiftIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M2.396 7.5a.937.937 0 00-.937.937v1.875c0 .258.21.469.469.469h16.25a.469.469 0 00.469-.469V8.437a.937.937 0 00-.937-.937H2.396zm-.937-1.875A1.875 1.875 0 012.396 3.75h15.417a1.875 1.875 0 011.875 1.875v2.812a1.406 1.406 0 01-1.406 1.406H1.49A1.406 1.406 0 01.083 8.437V5.625a1.875 1.875 0 011.875-1.875h-.499z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M9.531 1.875a.469.469 0 01.469.469v15.208a.469.469 0 01-.938 0V2.344a.469.469 0 01.469-.469z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M5.208 4.167a.937.937 0 00-.937.937v.521h3.125V5.104a.937.937 0 00-.937-.937H5.208zm-.937-1.875A1.875 1.875 0 015.208 0h1.25a1.875 1.875 0 011.875 1.875v1.25a.469.469 0 01-.469.469H4.74a.469.469 0 01-.469-.469v-1.25zm6.25 1.875a.937.937 0 00-.937.937v.521h3.125V5.104a.937.937 0 00-.937-.937h-1.25zm-.937-1.875A1.875 1.875 0 0111.458 0h1.25a1.875 1.875 0 011.875 1.875v1.25a.469.469 0 01-.469.469h-3.125a.469.469 0 01-.469-.469v-1.25z" fill={color} />
  </svg>
);

export const DataIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M10 1.667a.469.469 0 01.469.469v.677c2.96.254 5.26 2.454 5.26 5.208v3.958l1.406 1.407a.937.937 0 01-.663 1.6H3.528a.937.937 0 01-.663-1.6l1.406-1.407V8.52c0-2.754 2.3-4.954 5.26-5.208V2.136a.469.469 0 01.469-.469zm0 1.615c-2.45 0-4.4 1.883-4.792 4.208l-.001.034v4.166l-1.406 1.407h12.396l-1.406-1.407V7.524a4.792 4.792 0 00-4.791-4.242z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M8.125 15.208a.469.469 0 01.469.469 1.406 1.406 0 002.812 0 .469.469 0 011 0 2.344 2.344 0 01-4.688 0 .469.469 0 01.407-.469z" fill={color} />
  </svg>
);

export const EyeIcon: React.FC<{ color?: string }> = ({ color = "currentColor" }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M10 4.167a.469.469 0 01.469.469v.677c2.96.254 5.26 2.454 5.26 5.208v3.958l1.406 1.407a.937.937 0 01-.663 1.6H3.528a.937.937 0 01-.663-1.6l1.406-1.407V8.52c0-2.754 2.3-4.954 5.26-5.208V2.136a.469.469 0 01.469-.469zm0 1.615c-2.45 0-4.4 1.883-4.792 4.208l-.001.034v4.166l-1.406 1.407h12.396l-1.406-1.407V7.524a4.792 4.792 0 00-4.791-4.242z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M10 6.667a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zM6.667 10a4.375 4.375 0 118.75 0 4.375 4.375 0 01-8.75 0z" fill={color} />
  </svg>
);

export const DefaultIcon: React.FC<{ color?: string }> = DashboardIcon;
