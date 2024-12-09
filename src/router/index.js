import { createRouter, createWebHistory } from "vue-router";

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
            component:()=>import('../views/lessons/lessonlistrendering.vue')
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
        }
    ]
});

export default router;