

export default function counter(state=0, action){
    switch(action.type){
        case "click":
            return state + 1;
        case 'again':
            return 0;
        default: 
            return state;
    }
}