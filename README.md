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