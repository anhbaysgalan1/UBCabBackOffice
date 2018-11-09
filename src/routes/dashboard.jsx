import Dashboard from 'views/Dashboard/Dashboard.jsx'
import Buttons from 'views/Components/Buttons.jsx'
import GridSystem from 'views/Components/GridSystem.jsx'
import Panels from 'views/Components/Panels.jsx'
import SweetAlert from 'views/Components/SweetAlertPage.jsx'
import Notifications from 'views/Components/Notifications.jsx'
import Icons from 'views/Components/Icons.jsx'
import Typography from 'views/Components/Typography.jsx'
import RegularForms from 'views/Forms/RegularForms.jsx'
import ExtendedForms from 'views/Forms/ExtendedForms.jsx'
import ValidationForms from 'views/Forms/ValidationForms.jsx'
import Wizard from 'views/Forms/Wizard/Wizard.jsx'
import RegularTables from 'views/Tables/RegularTables.jsx'
import ExtendedTables from 'views/Tables/ExtendedTables.jsx'
import ReactTables from 'views/Tables/ReactTables.jsx'
import GoogleMaps from 'views/Maps/GoogleMaps.jsx'
import FullScreenMaps from 'views/Maps/FullScreenMap.jsx'
import Charts from 'views/Charts/Charts.jsx'
import Calendar from 'views/Calendar/Calendar.jsx'
import UserPage from 'views/Pages/UserPage.jsx'

import pagesRoutes from './pages'
import Test from '../views/ubcab/test'

var pages = [{ path: '/user-page', name: 'Хэрэглэгч', mini: 'UP', component: UserPage }].concat(
  pagesRoutes
)

var dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Ерөнхий',
    icon: 'pe-7s-graph',
    component: Dashboard
  },
  {
    collapse: true,
    path: '/forms',
    name: 'Бүртгэл',
    state: 'openForms',
    icon: 'pe-7s-note2',
    views: [
      {
        path: '/forms/regular-forms',
        name: 'Жолооч',
        icon: 'pe-7s-id',
        component: RegularForms
      },
      {
        path: '/forms/extended-forms',
        name: 'Жолоочийн хүсэлт',
        icon: 'pe-7s-check',
        component: ExtendedForms
      },
      {
        path: '/forms/validation-forms',
        name: 'Хэрэглэгч',
        icon: 'pe-7s-users',
        component: ValidationForms
      }
    ]
  },
  {
    collapse: true,
    path: '/tables',
    name: 'Үйлчилгээ',
    state: 'openTables',
    icon: 'pe-7s-map-2',
    views: [
      {
        path: '/tables/regular-tables',
        name: 'Өнөөдөр',
        icon: 'pe-7s-repeat',
        component: RegularTables
      },
      {
        path: '/tables/extended-tables',
        name: 'Түүх',
        icon: 'pe-7s-date',
        component: ExtendedTables
      },
      {
        path: '/tables/react-table',
        name: 'Санал хүсэлт',
        icon: 'pe-7s-add-user',
        component: ReactTables
      }
    ]
  },
  {
    collapse: true,
    path: '/maps',
    name: 'Байршил',
    state: 'openMaps',
    icon: 'pe-7s-map-marker',
    views: [
      {
        path: '/maps/google-maps',
        name: 'Шууд хяналт',
        icon: 'pe-7s-map',
        component: GoogleMaps
      },
      {
        path: '/maps/full-screen-maps',
        name: 'Байршлын түүх',
        icon: 'pe-7s-map-marker',
        component: FullScreenMaps
      }
    ]
  },
  { path: '/charts', name: 'Тайлан', icon: 'pe-7s-graph1', component: Charts },
  {
    collapse: true,
    path: '/pages',
    name: 'Урамшуулал',
    state: 'openPages',
    icon: 'pe-7s-gift',
    views: [
      {
        path: '/components/buttons',
        name: 'Buttons',
        mini: 'B',
        component: Buttons
      },
      {
        path: '/components/grid-system',
        name: 'Grid System',
        mini: 'GS',
        component: GridSystem
      }]
  },
  {
    collapse: true,
    path: '/components',
    name: 'Удирдлага',
    state: 'openComponents',
    icon: 'pe-7s-plugin',
    views: pages
  },
  {
    collapse: true,
    path: '/settings',
    name: 'Тохиргоо',
    state: 'openSettings',
    icon: 'pe-7s-settings',
    views: [
      {
        path: '/settings/company',
        name: 'Нууц үг',
        mini: 'CG',
        component: Buttons
      },
      {
        path: '/settings/account/create',
        name: 'Системийн тохиргоо',
        mini: 'UF',
        invisible: true,
        component: Buttons
      },
      {
        path: '/settings/account/edit/:id',
        name: 'Бусад',
        mini: 'UF',
        invisible: true,
        component: Buttons
      },
      {
        path: '/settings/account',
        name: 'Апп тохиргоо',
        mini: 'FK',
        component: Buttons
      }
    ]
  },
  { redirect: true, path: '/', pathTo: '/dashboard', name: 'Dashboard' }
]
export default dashboardRoutes
