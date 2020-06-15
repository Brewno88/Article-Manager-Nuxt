export const state = () => ({
  list: [
    {
      id: 0,
      title: 'This is article number one',
      description: `Here we have the description of the article Imperdiet quam torquent semper vehicula tincidunt porta ut magna ad `,
      published: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
      thumbnail: `https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`,
      likes: 0,
      tags: [],
      text: `Cubilia venenatis vehicula lacus eu sit faucibus ligula dis phasellus senectus, dapibus varius velit lorem pellentesque tellus mattis nulla ullamcorper nunc risus, potenti penatibus aenean urna auctor non libero leo integer. Ornare aptent ad luctus sed pharetra lacus torquent cursus class, ac urna hendrerit erat malesuada magna proin tempus, scelerisque natoque sociosqu id cubilia habitant facilisis aenean. Urna penatibus quam nec hac aptent non nunc enim, neque natoque a suscipit luctus dui rutrum nibh, dis facilisi tortor sapien placerat est arcu.

      Semper sollicitudin vivamus magna ut aenean, elit commodo porttitor sed, justo sit ex mollis. Auctor commodo aliquam tincidunt molestie nibh vel per in nascetur nunc tortor, at ultricies quisque ex parturient ligula velit ullamcorper est. Sapien dictumst interdum scelerisque tristique cubilia nibh odio enim lacinia, donec posuere quis tellus quam himenaeos class porta, dis accumsan a volutpat blandit rutrum penatibus varius. Nibh enim tortor mollis hendrerit dignissim ac, quis penatibus luctus amet proin, vel magna at porta placerat. Volutpat amet consequat hac tempus praesent cursus vitae penatibus purus, risus condimentum posuere ornare dignissim ipsum nascetur donec, faucibus elit habitant per montes scelerisque sapien feugiat.`
    },
    {
      id: 1,
      title: 'This is article number 2',
      description: `Here we have the description of the article Imperdiet quam torquent semper vehicula tincidunt porta ut magna ad `,
      published: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
      thumbnail: `https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`,
      likes: 0,
      tags: [],
      text: `Cubilia venenatis vehicula lacus eu sit faucibus ligula dis phasellus senectus, dapibus varius velit lorem pellentesque tellus mattis nulla ullamcorper nunc risus, potenti penatibus aenean urna auctor non libero leo integer. Ornare aptent ad luctus sed pharetra lacus torquent cursus class, ac urna hendrerit erat malesuada magna proin tempus, scelerisque natoque sociosqu id cubilia habitant facilisis aenean. Urna penatibus quam nec hac aptent non nunc enim, neque natoque a suscipit luctus dui rutrum nibh, dis facilisi tortor sapien placerat est arcu.

      Semper sollicitudin vivamus magna ut aenean, elit commodo porttitor sed, justo sit ex mollis. Auctor commodo aliquam tincidunt molestie nibh vel per in nascetur nunc tortor, at ultricies quisque ex parturient ligula velit ullamcorper est. Sapien dictumst interdum scelerisque tristique cubilia nibh odio enim lacinia, donec posuere quis tellus quam himenaeos class porta, dis accumsan a volutpat blandit rutrum penatibus varius. Nibh enim tortor mollis hendrerit dignissim ac, quis penatibus luctus amet proin, vel magna at porta placerat. Volutpat amet consequat hac tempus praesent cursus vitae penatibus purus, risus condimentum posuere ornare dignissim ipsum nascetur donec, faucibus elit habitant per montes scelerisque sapien feugiat.`
    },
    {
      id: 2,
      title: 'This is article number 2',
      description: `Here we have the description of the article Imperdiet quam torquent semper vehicula tincidunt porta ut magna ad `,
      published: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
      thumbnail: `https://images.unsplash.com/photo-1422394866893-d01b99781fcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60`,
      likes: 0,
      tags: [],
      text: `Cubilia venenatis vehicula lacus eu sit faucibus ligula dis phasellus senectus, dapibus varius velit lorem pellentesque tellus mattis nulla ullamcorper nunc risus, potenti penatibus aenean urna auctor non libero leo integer. Ornare aptent ad luctus sed pharetra lacus torquent cursus class, ac urna hendrerit erat malesuada magna proin tempus, scelerisque natoque sociosqu id cubilia habitant facilisis aenean. Urna penatibus quam nec hac aptent non nunc enim, neque natoque a suscipit luctus dui rutrum nibh, dis facilisi tortor sapien placerat est arcu.

      Semper sollicitudin vivamus magna ut aenean, elit commodo porttitor sed, justo sit ex mollis. Auctor commodo aliquam tincidunt molestie nibh vel per in nascetur nunc tortor, at ultricies quisque ex parturient ligula velit ullamcorper est. Sapien dictumst interdum scelerisque tristique cubilia nibh odio enim lacinia, donec posuere quis tellus quam himenaeos class porta, dis accumsan a volutpat blandit rutrum penatibus varius. Nibh enim tortor mollis hendrerit dignissim ac, quis penatibus luctus amet proin, vel magna at porta placerat. Volutpat amet consequat hac tempus praesent cursus vitae penatibus purus, risus condimentum posuere ornare dignissim ipsum nascetur donec, faucibus elit habitant per montes scelerisque sapien feugiat.`
    }
  ]
})

export const mutations = {
  addArticle(state, text) {
    state.articles.push({
      title: '',
      description: '',
      published: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
      thumbnail: '',
      likes: 0,
      tags: [],
      text: ''
    })
  },
  removeArticle(state, { article }) {
    state.articles.splice(state.articles.indexOf(article), 1)
  },
  likeArticle(state) {}
}
