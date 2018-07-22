const validKod =
  kod => !!kod.match(/^\d\d( |-)\d\d\d$/)


console.log(validKod('21-010'))


"aaa".match(/\d\d/)
// null

!!"aaa".match(/\d\d/)
// false

!!"33".match(/\d\d/)
// true

!!"33".match(/\D/)
// false

!!"f".match(/\D/)
// true

!!"f45".match(/^\D/)
// true

!!"f".match(/^\D/)
// true

!!"".match(/^\D/)
// false

!!"ppp".match(/^\D/)
// true

!!"5ppp".match(/^\D/)
// false

!!"5ppp".match(/^\w/)
// true

!!"stop".match(/^\w/)
// true

!!" vstop".match(/^\w/)
// false

!!",,.,. vstop".match(/^\w/)
// false

!!"urtueyt,,.,. vstop".match(/^\w/)
// true

!!"urtueyt,,.,. vstop".match(/^\W/)
// false

!!" urtueyt,,.,. vstop".match(/^\W/)
// true

!!"[],. urtueyt,,.,. vstop".match(/^\W/)
// true

!!"[],. urtueyt,,.,. vstop".match(/^\w \w$/)
// false

!!"s s".match(/^\w \w$/)
// true

!!"ss ss".match(/^\w \w$/)
// false









!!"aaaaa bbbbb".match(/^\w+ \w+$/)
// true

!!" aaaaa bbbbb ".match(/^\w+ \w+$/)
// false

!!"key: 55".match(/^\w+: \d+$/)
// true

!!"key 55".match(/^\w+: \d+$/)
// false

!!"key 55".match(/^\w? \d+$/)
// false

!!"k 55".match(/^\w? \d+$/)
// true




!!" 55".match(/^\w? \d+$/)
// true

!!" 55".match(/^\w* \d+$/)
// true




!!"cc 55".match(/^\w* \d+$/)
// true

!!"ccddddd 55".match(/^\w* \d+$/)
// true

!!". 55".match(/^\w* \d+$/)
// false





!!"455".match(/^\d\d\d$/)
// true

!!" 455".match(/^\d\d\d$/)
// false





!!"Ala ma kota".match(/kot/)
// true

!!"Ala ma kota".match(/^kot$/)
// false

!!"kot".match(/^kot$/)
// true

!!"kot".match(/f/)
// false




!!"ala (ma) kota".match(/\(/)
// true

!!"ala (ma) + kota".match(/\+/)
// true

!!"ala (ma) + kota".match(/+/)
// SyntaxError: Invalid regular expression: /+/: Nothing to repeat




!!"a".match(/./)
// true

!!"]".match(/./)
// true

!!" ".match(/./)
// true

!!",".match(/./)
// true

!!",".match(/.+/)
// true

!!"ggg".match(/.+/)
// true

!!"(((".match(/.+/)
// true


!!"".match(/^\d\d\d\d-\d\d-\d\d$/)
// false

!!"1982-03-07".match(/^\d\d\d\d-\d\d-\d\d$/)
// true

!!"(82)7458963".match(/^\(\d\d\)\d\d\d\d\d\d\d$/)
// true

!!"(82)7458963".match(/^\(\d\d\)\d{7}$/)
// true

!!"(82)7458963".match(/^\(\d\d\)\d{7,9}$/)
// true

!!"(82)745896311".match(/^\(\d\d\)\d{7,9}$/)
// true

!!"(82)7458963112".match(/^\(\d\d\)\d{7,9}$/)
// false

!!"(00)44-23-74589.63112".match(/[()+-. 0-9]{6,18}/)
// true

!!"074747357553".match(/[()+-. 0-9]{6,18}/)
// true

!!"+4474747357553".match(/[()+-. 0-9]{6,18}/)
// true

!!"(+44)74747357553".match(/[()+-. 0-9]{6,18}/)
// true

!!"(+44)7474 357 553".match(/[()+-. 0-9]{6,18}/)
// true

!!"(+44)7474-357-553".match(/[()+-. 0-9]{6,18}/)
// true

!!"(+44)7474-357-553 wew".match(/[()+-. 0-9]{6,18}/)
// true

!!"(+44)7474-357-553 wew".match(/^[()+-. 0-9]{6,18}$/)
// false

 s.length
32

s.toUpperCase()
// 'DSIFGISDYGF UYDSGYUDSGF UYS GFYU'


s.match(/.+/)
// [ 'dsifgisdygf uydsgyudsgf uys gfyu',
// index: 0,
// input: 'dsifgisdygf uydsgyudsgf uys gfyu' ]

s.match(/ddd/)
// null

!!s.match(/ddd/)
// false

'Ala ma kota'.match(/ma/)
// [ 'ma', index: 4, input: 'Ala ma kota' ]








'Ala ma kota'.match(/^Ala ma (\w+)$/)
// [ 'Ala ma kota', 'kota', index: 0, input: 'Ala ma kota' ]

typeof 'Ala ma kota'.match(/^Ala ma (\w+)$/)
// 'object'

'Ala ma kota'.match(/^Ala ma (\w+)$/).length
// 2



'Ala ma kota'.match(/^Ala ma (\w+)$/)
// [ 'Ala ma kota', 'kota', index: 0, input: 'Ala ma kota' ]



'Ala ma kota i psa'.match(/^Ala ma (\w+) i (\w+)$/)
// [ 'Ala ma kota i psa',
// 'kota',
// 'psa',
// index: 0,
// input: 'Ala ma kota i psa' ]



'Ala ma kota i psa'.match(/^Ala ma (\w+)( i (\w+))?$/)
// [ 'Ala ma kota i psa',
// 'kota',
// ' i psa',
// 'psa',
// index: 0,
// input: 'Ala ma kota i psa' ]



'Ala ma kota'.match(/^Ala ma (\w+)( i (\w+))?$/)
// [ 'Ala ma kota',
// 'kota',
// undefined,
// undefined,
// index: 0,
// input: 'Ala ma kota' ]

'Ala ma kota'.match(/^Ala ma (\w+)( i (\w+))?$/)[2]
// undefined

'Ala ma kota'.match(/^Ala ma (\w+)( i (\w+))?$/)[1]
// 'kota'



var m = 'Ala ma kota'.match(/^Ala ma (\w+)( i (\w+))?$/)
// undefined

[m[1], m[3]]
// [ 'kota', undefined ]

var m = 'Ala ma kota i psa'.match(/^Ala ma (\w+)( i (\w+))?$/)
// undefined

[m[1], m[3]]
// [ 'kota', 'psa' ]



'Ala ma kota'.match(/^Ala ma (kota|psa)$/)
// [ 'Ala ma kota', 'kota', index: 0, input: 'Ala ma kota' ]

!!'Ala ma kota'.match(/^Ala ma (kota|psa)$/)
// true



!!'Ala ma psa'.match(/^Ala ma (kota|psa)$/)
// true

!!'Ala ma muchy'.match(/^Ala ma (kota|psa)$/)
// false



!!'  '.match(/^\s\s$/)
// true

!!``.match(/^\s\s$/)
// false



!!'s'.match(/^\S$/)
// true

!!','.match(/^\S$/)
// true

!!'%5'.match(/^\S$/)
// false

!!' '.match(/^\S$/)
// false




"fff".match(/g/)
// null

/g/.test('dd')
// false

/g/.test('g')
// true

"g".match(/g/)
// [ 'g', index: 0, input: 'g' ]

re.exec("ffff ffff ffff")
// [ 'ffff', index: 0, input: 'ffff ffff ffff' ]

re.exec("ffff ffff ffff")
// [ 'ffff', index: 5, input: 'ffff ffff ffff' ]

re.exec("ffff ffff ffff")
// [ 'ffff', index: 10, input: 'ffff ffff ffff' ]

re.exec("ffff ffff ffff")
// null

