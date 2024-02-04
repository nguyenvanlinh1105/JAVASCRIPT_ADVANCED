function createCounter(){
    let counter = 0 ;
    function increase(){
        return ++ counter;
    }
    return increase;
}


const counter1 = createCounter();
console.log(counter1())
console.log(counter1())
console.log(counter1())
console.log(counter1())


function createLogger (namespace){
    function logger(message){
        console.log(`${namespace} - ${message}`)
    }
    return logger
}
const info = createLogger('info');
console.log(info('Start logging in to server, first time '))
console.log(info('Start logging in to server, 2nd '))
const err = createLogger('error: ')
console.log(err('Đây là lỗi của người dùng'))

function createStorage (key){
    const store = JSON.parse(localStorage.getItem(key))?? {}
    const save =()=>{
        localStorage.setItem(key,JSON.stringify(store))
    }
    const storage ={
        get(key){
            return store[key]
        },
        set(key,value){
            store[key]= value;
            save()
        },
        remove (key){
            delete store[key];
            save()
        }
    }
    return storage;
}
const profileSetting = createStorage('profile-setting')





console.log(profileSetting.set('fullName'))
profileSetting.set('NameSpace', 'Logging in server')
console.log(profileSetting.get('NameSpace'))
// console.log(profileSetting.remove('NameSpace'))


