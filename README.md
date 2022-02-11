## Our project :: Blog website

# the core of the application (core module)

    ****something which is specific to the application itself, deployment, API, and the Developer****

    1- services
        * login.service.ts
        * auth.service.ts
        * base.service.ts

    2- pipes
        * toUpperCase.pipe.ts
        * any custom pipes

    3- guards
        * auth.guard.ts
        * leave-form.guard.ts
        * load-modules.guard.ts

    4- interceptors
        * token.interceptor.ts
        * add-headers.interceptor.ts

    5- interfaces
        * all domain interfaces (Users, blogs, etc...)

    6- utils
        obj-to-array.ts
        add-item-to-object.ts
        clone.ts

# shared components cross the application (shared modules)

    **** reusable components (should be plugged in any application without any problem - with respect of dependancies) ****
    1- form
    2- buttons (primary, secondary)
    3- dropdown
    4- tabs
    5- toast
    6- spinner
    7- table
    8- pagination
    9- cards
    10- img
    11- etc..

# feature modules

    **** specific to our business requirements, module per feature ****
    1- One module can contain components, directives, pipes, services, interfaces, enums, utils.
    2- components are prefix with module name.
    3- component tree should be flat. (no nested directories).

    Users:
        *- components
            1- user-create
            2- user-details
            3- user-list
            4- user-list-item
            5- user-avatar
        *- interfaces:
            1- user.ts
        *- services:
            1- user.service.ts
        *- pipes: (specific to users).
        *- directives: (specific to users).

    Blogs:
        *- components
            1- blog-create
            2- blog-details
            3- blog-list
            4- blog-list-item
            5- blog-header
            6- blog-header-image
        *- interfaces:
            1- blog.ts
        *- services:
            1- blog.service.ts
        *- pipes: (specific to blogs)
        *- directives: (specific to blogs)

    Comments: same as above

    Likes: same as above

        