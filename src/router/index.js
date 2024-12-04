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

        // TP 
        {
            path:'/TP_DataBinding',
            name:'TP_DataBinding',
            component:()=>import('../views/tp/TP_DataBinding.vue')
        },
    ]
});

export default router;