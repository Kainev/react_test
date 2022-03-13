// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import SvgIconStyle from '../../../components/SvgIconStyle';

import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  booking: getIcon('ic_booking'),
  invoice: getIcon('ic_invoice'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: '',
    items: [
      { title: 'Dashboard', path: PATH_DASHBOARD.general.app, icon: ICONS.dashboard },
      // { title: 'e-commerce', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.ecommerce },
      // { title: 'analytics', path: PATH_DASHBOARD.general.analytics, icon: ICONS.analytics },
      // { title: 'banking', path: PATH_DASHBOARD.general.banking, icon: ICONS.banking },
      // { title: 'booking', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking },
    ],
  },
  


  {
    subheader: 'Tools',
    items: [
      // USER
      {
        title: 'Instruments',
        path: PATH_DASHBOARD.instruments.list,
        icon: <Iconify icon="mdi:tools" width={20} height={20} />,
      },

      // USER
      {
        title: 'Calibrations',
        path: PATH_DASHBOARD.user.list,
        icon: <Iconify icon="mdi:ruler" width={20} height={20} />,
      },

      // USER
      {
        title: 'Actions',
        path: PATH_DASHBOARD.user.list,
        icon: <Iconify icon="mdi:alert" width={20} height={20} />,
      },

      // USER
      {
        title: 'Equipment',
        path: PATH_DASHBOARD.user.list,
        icon: <Iconify icon="mdi:toolbox" width={20} height={20} />,

      },

      // USER
      {
        title: 'Reports',
        path: PATH_DASHBOARD.user.list,
        icon: <Iconify icon="mdi:chart-box" width={20} height={20} />,
      },

    ],
  },


  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'management',
    items: [
      // USER
       // Client
       {
        title: 'Clients',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.user,
        children: [
         // { title: 'list', path: PATH_DASHBOARD.user.profile },
          // { title: 'cards', path: PATH_DASHBOARD.user.cards },
          // { title: 'create', path: PATH_DASHBOARD.user.list },
        ],
      },

      {
        title: 'Database',
        path: PATH_DASHBOARD.user.root,
        icon: <Iconify icon="mdi:database" width={20} height={20} />,
        children: [
          { title: 'instrument models', path: PATH_DASHBOARD.user.profile },
          { title: 'measurement units', path: PATH_DASHBOARD.user.cards },
          { title: 'custom fields', path: PATH_DASHBOARD.user.list },
        ],
      },

      // E-COMMERCE
      /* {
        title: 'e-commerce',
        path: PATH_DASHBOARD.eCommerce.root,
        icon: ICONS.cart,
        children: [
          { title: 'shop', path: PATH_DASHBOARD.eCommerce.shop },
          { title: 'product', path: PATH_DASHBOARD.eCommerce.demoView },
          { title: 'list', path: PATH_DASHBOARD.eCommerce.list },
          { title: 'create', path: PATH_DASHBOARD.eCommerce.new },
          { title: 'edit', path: PATH_DASHBOARD.eCommerce.demoEdit },
          { title: 'checkout', path: PATH_DASHBOARD.eCommerce.checkout },
        ],
      },

      // INVOICE
      {
        title: 'invoice',
        path: PATH_DASHBOARD.invoice.root,
        icon: ICONS.invoice,
        children: [
          { title: 'list', path: PATH_DASHBOARD.invoice.list },
          { title: 'details', path: PATH_DASHBOARD.invoice.demoView },
          { title: 'create', path: PATH_DASHBOARD.invoice.new },
          { title: 'edit', path: PATH_DASHBOARD.invoice.demoEdit },
        ],
      },

      // BLOG
      {
        title: 'blog',
        path: PATH_DASHBOARD.blog.root,
        icon: ICONS.blog,
        children: [
          { title: 'posts', path: PATH_DASHBOARD.blog.posts },
          { title: 'post', path: PATH_DASHBOARD.blog.demoView },
          { title: 'create', path: PATH_DASHBOARD.blog.new },
        ],
      }, */
    ],
  },


  // APP
  // ----------------------------------------------------------------------
  {
    subheader: 'Application',
    items: [
      {
        title: 'users',
        path: PATH_DASHBOARD.mail.root,
        icon: ICONS.user,
      },
      { title: 'settings', path: PATH_DASHBOARD.chat.root, icon: <Iconify icon="mdi:cog" width={20} height={20} /> },
    ],
  },

  /*
  // APP
  // ----------------------------------------------------------------------
  {
    subheader: 'app',
    items: [
      {
        title: 'mail',
        path: PATH_DASHBOARD.mail.root,
        icon: ICONS.mail,
        info: (
          <Label variant="outlined" color="error">
            +32
          </Label>
        ),
      },
      { title: 'chat', path: PATH_DASHBOARD.chat.root, icon: ICONS.chat },
      { title: 'calendar', path: PATH_DASHBOARD.calendar, icon: ICONS.calendar },
      { title: 'kanban', path: PATH_DASHBOARD.kanban, icon: ICONS.kanban },
    ],
  }, */
];

export default navConfig;
