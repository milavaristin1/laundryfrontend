import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'


//member 
import IndexMember from '../components/Member/Index.vue'
import TambahMember from '../components/Member/Tambah.vue'
import EditMember from '../components/Member/Edit.vue'
import DetailMember from '../components/Member/Detail.vue'

//paket
import IndexPaket from '../components/Paket/Index.vue'
import TambahPaket from '../components/Paket/Tambah.vue'
import EditPaket from '../components/Paket/Edit.vue'
import DetailPaket from '../components/Paket/Detail.vue'

//transaksi
import IndexTransaksi from '../components/Transaksi/Index.vue'
import TambahTransaksi from '../components/Transaksi/Tambah.vue'


//detailtransaksi
import DetailTransaksi from '../components/Transaksi/Detail.vue'    
import TambahDetail from '../components/Transaksi/TambahDetail.vue'

//outlet
import IndexOutlet from "../components/Outlet/Index.vue";
import TambahOutlet from "../components/Outlet/Tambah.vue";
import EditOutlet from "../components/Outlet/Edit.vue";

//user
import IndexUser from "../components/User/Index.vue";
import TambahUser from "../components/User/Tambah.vue";
import EditUser from "../components/User/Edit.vue";

//report
import IndexReport from '../components/Report/Index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/',
        name: 'dashboard',
        component: Dashboard,
        meta : {
            requiresAuth : true
        }
    },
    {
        path: '/member',
        name: 'indexmember',
        component: IndexMember,
        meta : {
            requiresAuth : true  
        }
    },
    {
        path: '/member/tambah',
        name: 'tambahmember',
        component: TambahMember,
        meta : {
            requiresAuth : true  
        }
    },
    {
        path: '/member/edit/:id_member',
        name: 'editmember',
        component: EditMember,
        meta : {
            requiresAuth : true  
        }
    },
    {
        path: '/member/detail/:id_member',
        name: 'detailmember',
        component: DetailMember,
        meta : {
            requiresAuth : true  
        }
    },
    {
        path: "/user",
        name: "indexuser",
        component: IndexUser,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/user/tambah",
        name: "tambahuser",
        component: TambahUser,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/user/edit/:id",
        name: "edituser",
        component: EditUser,
        meta: {
          requiresAuth: true,
        },
      },

    {
        path: '/paket',
        name: 'indexpaket',
        component: IndexPaket,
        meta : {
            requiresAuth : true  
        }
    },
    {
        path: '/paket/tambah',
        name: 'tambahpaket',
        component: TambahPaket,
        meta : {
            requiresAuth : true  
        }
    },
    {
        path: '/paket/edit/:id_paket',
        name: 'editpaket',
        component: EditPaket,
        meta : {
            requiresAuth : true  
        }
    },
    {
        path: '/paket/detail/:id_paket',
        name: 'detailpaket',
        component: DetailPaket,
        meta : {
            requiresAuth : true  
        }
    },
    {
        path: '/transaksi',
        name: 'indextransaksi',
        component: IndexTransaksi,
        meta : {
            requiresAuth : true  
        }
    },
    {
        path: '/transaksi/tambah',
        name: 'tambahtransaksi',
        component: TambahTransaksi,
        meta : {
            requiresAuth : true  
        }
    },
    
    {
        path: '/transaksi/detail/:id_transaksi',
        name: 'detailtransaksi',
        component: DetailTransaksi,
        meta : {
            requiresAuth : true  
        }
    },
    {
        path: '/transaksi/detail/tambah',
        name: 'tambahdetail',
        component: TambahDetail,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/outlet",
        name: "indexoutlet",
        component: IndexOutlet,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "/outlet/tambah",
        name: "tambahoutlet",
        component: TambahOutlet,
        meta: {
          requiresAuth: true,
        },
      },
    
      {
        path: "/outlet/edit/:id",
        name: "editoutlet",
        component: EditOutlet,
        meta: {
          requiresAuth: true,
        },
      },

    {
        path: '/report',
        name: 'indexreport',
        component: IndexReport,
        meta: {
            requiresAuth: true
        }
    },
    
]

const router = new VueRouter({
    mode : 'history',
    base : process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if(localStorage.getItem('auth')) {
       next()
    } else {
       next('/login')
    }
 }
 next()
})

export default router
