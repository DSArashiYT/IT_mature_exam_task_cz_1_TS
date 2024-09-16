declare const brand: unique symbol
type Brand<T, K> = T & { [brand]: K }
