const INITIAL_STATE = {
    sections: [
        {
            'id': 1,
            'item': 'hats',
            'imgUrl': 'https://images.unsplash.com/photo-1552399230-e073362b3bf4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            'url': 'shop/hats'
        },
        {
            'id': 2,
            'item': 'jackets',
            'imgUrl': 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            'url': 'shop/jackets'
        },
        {
            'id': 3,
            'item': 'sneakers',
            'imgUrl': 'https://images.unsplash.com/photo-1462927114214-6956d2fddd4e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1349&q=80',
            'url': 'shop/sneakers'
        },
        {
            'id': 4,
            'size': 'large',
            'item': 'womens',
            'imgUrl': 'https://images.unsplash.com/photo-1500643752441-4dc90cda350a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=657&q=80',
            'url': 'shop/womens'
        },
        {
            'id': 5,
            'item': 'mens',
            'size': 'large',
            'imgUrl': 'https://images.unsplash.com/photo-1589270216117-7972b3082c7d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            'url': 'shop/mens'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
};
export default directoryReducer;
