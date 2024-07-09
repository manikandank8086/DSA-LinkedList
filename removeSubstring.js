function remove(str,sub){
    return str.split(sub).join('')
}

const str='halo world'
const sub='world'
const result=remove(str,sub)
console.log(result)