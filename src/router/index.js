import { createRouter, createWebHistory } from "vue-router";
import {auth} from '../firebase'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            alias: "/home",
            name: "Home",
            component: () => import("../views/HomeView.vue")
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFoundView.vue')
        },
        //! ----------------------------Lessons Views routes ----------------------------
        {
            path:'/lessonText',
            name:'lesson-text',
            component:()=>import('../components/LessonTextInterpolation.vue')
        },
        {
            path:'/AfficherLesBaills',
            name:'AfficherLesBails',
            component:()=>import('../components/AfficherLesBaills.vue')
        },
        {
            path:'/EXO_TextInterpolation',
            name:'exercice text interpolation',
            component:()=>import('../views/exos/TextInterpolationEtFonction.vue')
        },
        {
            path:'/Lesson_inline-templating',
            name:'leçon inline templating',
            component:()=>import('../views/lessons/lecon_InlineTemplating.vue')
        },
        {
            path:'/AttributeBinding',
            name:'AttributeBinding',
            component:()=>import('../views/lessons/AttributeBinding.vue')
        },
        {
            path:'/LessonListRendering',
            name:'lesson List rendering',
            component:()=>import('../views/lessons/LessonListRendering.vue')
        },



        // EXO
        {
            path:'/eventbinding',
            name:'exo_evenBinding',
            component:()=>import('../views/exos/EventBinding.vue')
        },
        {
            path:'/twowaybindingevent',
            name:'exo_twowaybindingevent',
            component:()=>import('../views/exos/twowayBindingEvent.vue')
        },
        {
            path:'/exo_bug',
            name:'exo_bug',
            component:()=>import('../views/exos/exo_bug.vue')
        },
        {
            path:'/exo_dynamicstyling',
            name:'exo_dynamic_Styling',
            component:()=>import('../views/exos/exo_DynamicStyling.vue')
        },
        {
            path:'/exo_dynamicstylingclass',
            name:'exo_dynamic_Styling_Class',
            component:()=>import('../views/exos/exo_DynamicStylingClass1.vue')
        },
        {
            path:'/exo_listRendering',
            name:'exo_listRendering',
            component:()=>import('../views/exos/exo_listRendering.vue')
        },
        {
            path:'/exo_parentpropsview',
            name:'exo_parent props view',
            component:()=>import('../views/exos/exo_parentPropsView.vue')
        },
        {
            path:'/exo_onefriend',
            name:'exo_enfant props view',
            component:()=>import('../views/exos/exo_oneFriend.vue')
        },
        {
            path:'/exo_apifetch',
            name:'exo_api fetch',
            component:()=>import('../views/exos/exo_APIFETCH.vue')
        },
        //{
        //     path:'/lesson-router',
        //     name:'lesson router',
        //     component:()=>import('../views/exos/exo_LessonRouterView.vue')
        // },
        {
            path:"/details/:id/:itemName",
            name:'details',
            component:()=>import('../views/exos/DetailsPage.vue'),
            props:true
        },
        {
            path:'/test-lesson-router',
            name:'lesson router',
            component:()=>import('../views/exos/exo_LessonRouterView.vue'),

        },
        {
            path:'/newfriend',
            name:'emot emit part 4',
            component:()=>import('../views/exos/exo_newFriend.vue'),

        },
        


        // TP 
        {
            path:'/tpdatabinding',
            name:'TP_DataBinding',
            component:()=>import('../views/tp/TP_DataBinding.vue')
        },
        {
            path:'/tpeventbinding',
            name:'TP_EventBinding',
            component:()=>import('../views/tp/TP_EventBinding.vue')
        },
        {
            path:'/tpreactivite',
            name:'TP_reactivite',
            component:()=>import('../views/tp/TP_reactivite.vue')
        },
        {
            path:'/tp_dynamicstylingmode',
            name:'TP_dynamicstylingmode',
            component:()=>import('../views/tp/TP_dynamicstylingmode.vue')
        },
        {
            path:'/tp_conditionalrendring',
            name:'TP_conditionalRendring',
            component:()=>import('../views/tp/TP_conditionalRendering_listrendering.vue')
        },
        // REGISTER & LOGIN
        {
            path: "/register",
            name: "Register",
            component: () => import("../views/RegisterPageView.vue")
        },
        {
            path: "/login",
            name: "Login",
            component: () => import("../views/LoginPageView.vue")
        },
        // DashBoard 
        {
            path: "/dashboard",
            name: "Dashboard",
            component: () => import("../views/DashboardView.vue"),
            meta: { requiresAuth: true }, // Route protégée
        },
        // Charts js 
        {
            path: "/chartjs",
            name: "chart js",
            component: () => import("../components/charts/chats_Parent.vue"),
            
        },
        // Pinia
        {
            path: "/counterpinia",
            name: "counter pinia",
            component: () => import("../components/Pinia/CounterPinia.vue"),
            
        },
    ]
});
// Vérification avant chaque navigation
let isAuthChecked = false;

router.beforeEach((to, from, next) => {
  if (!isAuthChecked) {
      auth.onAuthStateChanged((user) => {
          isAuthChecked = true;
          const currentUser = user;

          if (to.matched.some((record) => record.meta.requiresAuth)) {
              if (!currentUser) {
                  next({ name: "Login" });
              } else {
                  next();
              }
          } else {
              next();
          }
      });
  } else {
      next();
  }
});
export default router;