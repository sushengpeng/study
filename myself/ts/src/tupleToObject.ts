const tuple = ['tesla', 'model 3', 'model X', 'model Y']


type TupleToObject<T = {}> = {
    option<K extends string, V>(key: K extends keyof T ? never: K, value: V): TupleToObject<T & Record<K, V>>
    get(): T
  }
// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
type result = TupleToObject<typeof tuple> 