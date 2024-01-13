import { createPrismic } from "@prismicio/vue";

const prismic = createPrismic({
    endpoint: "good-things-fdn", clientConfig: {
        defaultParams: {
            routes: [{
                type: 'banner',
                path: '/'
            }]
        }
    }
})

export default prismic;