

export default function counter(state=0, action){
    switch(action.type){
        case "click":
            return state + 1;
        default: 
            return state;
    }
}