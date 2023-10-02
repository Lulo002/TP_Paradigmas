| package |
package := Package name: 'tp'.
package paxVersion: 1;
	basicComment: ''.


package classNames
	add: #Carta;
	add: #Correo;
	add: #Destinatario;
	add: #Destino;
	add: #Encomienda;
	add: #Envio2;
	yourself.

package binaryGlobalNames: (Set new
	yourself).

package globalAliases: (Set new
	yourself).

package setPrerequisites: #(
	'..\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\Base\Dolphin'
	'..\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\Base\Dolphin Legacy Date & Time'
	'..\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\Base\Dolphin Message Box'
	'..\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\MVP\Presenters\Prompters\Dolphin Prompter').

package!

"Class Definitions"!

Object subclass: #Correo
	instanceVariableNames: 'envios destinos destinatarios'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #Destinatario
	instanceVariableNames: 'nombreDestinatario direccionDestinatario destino'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #Destino
	instanceVariableNames: 'localidadDestino codigoPostalDestino paisDestino importeDestino'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Object subclass: #Envio2
	instanceVariableNames: 'fechaEnvio nroEnvio destinatario importeEnvio'
	classVariableNames: 'NroUltimoEnvio'
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Envio2 subclass: #Carta
	instanceVariableNames: 'tipoCarta'
	classVariableNames: 'MontoCartaCertificada'
	poolDictionaries: ''
	classInstanceVariableNames: ''!
Envio2 subclass: #Encomienda
	instanceVariableNames: 'pesoEncomienda'
	classVariableNames: ''
	poolDictionaries: ''
	classInstanceVariableNames: ''!

"Global Aliases"!


"Loose Methods"!

"End of package definition"!

"Source Globals"!

"Classes"!

Correo guid: (GUID fromString: '{1420d264-dda9-4922-96e2-b740bc875a23}')!
Correo comment: ''!
!Correo categoriesForClass!Kernel-Objects! !
!Correo methodsFor!

inicializa

envios := OrderedCollection new.
destinatarios := OrderedCollection new.
destinos := OrderedCollection new.!

menu
|seleccion|

seleccion := -1.
self inicializa.
[seleccion = 0] whileFalse: [
	MessageBox notify: 'Menu de Opciones
	1) Cargar Destinos
	2) Cargar Destinatarios
	3) Crear Envio
	4) Listar Encomiendas
	0) Salir' caption: 'Menu'.
[seleccion < 0 or: [seleccion > 4]] whileTrue: [	seleccion := (Prompter prompt: 'Ingrese su seleccion: ') asNumber asInteger].
(seleccion=1) ifTrue: [self nuevoDestino].
(seleccion=2) ifTrue: [self nuevoDestinatario].
(seleccion=3) ifTrue: [self nuevoEnvio].
(seleccion=4) ifTrue: [self listadoEnvios: Date fromString:  (Prompter prompt: 'Ingrese una fecha (dd/mm/yyyy)') asString ]
 ]



! !
!Correo categoriesForMethods!
inicializa!public! !
menu!public! !
!

Destinatario guid: (GUID fromString: '{309f19a5-9d01-49da-9242-798446cf6378}')!
Destinatario comment: ''!
!Destinatario categoriesForClass!Kernel-Objects! !
!Destinatario methodsFor!

destino
	^destino!

destino: anObject
	destino := anObject!

direccionDestinatario
	^direccionDestinatario!

direccionDestinatario: anObject
	direccionDestinatario := anObject!

nombreDestinatario
	^nombreDestinatario!

nombreDestinatario: anObject
	nombreDestinatario := anObject! !
!Destinatario categoriesForMethods!
destino!accessing!private! !
destino:!accessing!private! !
direccionDestinatario!accessing!private! !
direccionDestinatario:!accessing!private! !
nombreDestinatario!accessing!private! !
nombreDestinatario:!accessing!private! !
!

Destino guid: (GUID fromString: '{584df85e-3bf2-4243-a293-23d641c46fec}')!
Destino comment: ''!
!Destino categoriesForClass!Kernel-Objects! !
!Destino methodsFor!

cargaDatos
localidadDestino := Prompter prompt: 'Ingrese una localidad destino'.
codigoPostalDestino := (Prompter prompt: 'Ingrese el cod postal del destino') asNumber.
paisDestino := Prompter prompt: 'Ingrese el pais del destino'.
importeDestino :=(Prompter prompt: 'Ingrese importe destino')asNumber .! !
!Destino categoriesForMethods!
cargaDatos!public! !
!

Envio2 guid: (GUID fromString: '{49401c70-9c9c-422f-aeee-3dd02ce830fe}')!
Envio2 comment: ''!
!Envio2 categoriesForClass!Kernel-Objects! !
!Envio2 methodsFor!

cargaDatos

nroEnvio := NroUltimoEnvio.
Envio2 incrementaNroUltimoEnvio.
fechaEnvio := Date fromString: (Prompter prompt: 'Ingrese fecha de envio DD/MM/YYYY').
destinatario := Prompter prompt: 'Ingrese nombre del destinatario'.
importeEnvio :=(Prompter prompt: 'Ingrese importe destino')asNumber .! !
!Envio2 categoriesForMethods!
cargaDatos!public! !
!

!Envio2 class methodsFor!

incrementaNroUltimoEnvio

NroUltimoEnvio := NroUltimoEnvio + 1.! !
!Envio2 class categoriesForMethods!
incrementaNroUltimoEnvio!public! !
!

Carta guid: (GUID fromString: '{845872db-5784-42fe-a159-623c60aeebe6}')!
Carta comment: ''!
!Carta categoriesForClass!Kernel-Objects! !
!Carta methodsFor!

calcularImporte
(tipoCarta = 2) ifTrue: [importeEnvio := MontoCartaCertificada + destinatario destino importeDestino]!

cargaDatos

super cargaDatos.
tipoCarta := (Prompter prompt: 'Ingrese el tipo de carta (nro)' ) asNumber asInteger.! !
!Carta categoriesForMethods!
calcularImporte!public! !
cargaDatos!public! !
!

!Carta class methodsFor!

montoCartaCertificada

MontoCartaCertificada := (Prompter prompt: 'Ingrese el monto de la carta certificada: ') asNumber asInteger .
!

mostrarMontoCartaCertificada

^MontoCartaCertificada! !
!Carta class categoriesForMethods!
montoCartaCertificada!public! !
mostrarMontoCartaCertificada!public! !
!

Encomienda guid: (GUID fromString: '{8147f310-8cc3-4a4c-9a84-3079ebd316c1}')!
Encomienda comment: ''!
!Encomienda categoriesForClass!Kernel-Objects! !
!Encomienda methodsFor!

calculoImporte
(pesoEncomienda<= 1) ifTrue: [importeEnvio := importeEnvio *1.02].
(pesoEncomienda > 1 and: [pesoEncomienda <= 5]) ifTrue: [importeEnvio := importeEnvio *1.05].
(pesoEncomienda > 5 and: [pesoEncomienda <= 10]) ifTrue: [importeEnvio := importeEnvio *1.07].
(pesoEncomienda > 10) ifTrue: [importeEnvio := importeEnvio *1.10].!

iPesoEncomienda
|seguir|
seguir := true.
[seguir] whileTrue: [
pesoEncomienda := (Prompter prompt: 'Ingrese el peso de la encomienda:' ) asNumber asFloat.
(pesoEncomienda >= 0 and: [pesoEncomienda <= 15]) 
	ifTrue: [seguir := false ]
].!

oPesoEncomienda
^pesoEncomienda! !
!Encomienda categoriesForMethods!
calculoImporte!public! !
iPesoEncomienda!public! !
oPesoEncomienda!public! !
!

"Binary Globals"!

