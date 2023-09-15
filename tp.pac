| package |
package := Package name: 'tp'.
package paxVersion: 1;
	basicComment: ''.


package classNames
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
	'..\Documents\Dolphin Smalltalk 7\Core\Object Arts\Dolphin\MVP\Presenters\Prompters\Dolphin Prompter').

package!

"Class Definitions"!

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

Destinatario guid: (GUID fromString: '{309f19a5-9d01-49da-9242-798446cf6378}')!
Destinatario comment: ''!
!Destinatario categoriesForClass!Kernel-Objects! !
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
fechaEnvio := Date fromString: (Prompter prompt: 'Ingrese fecha de envio DD/MM/YYYY').
destinatario := Prompter prompt: 'Ingrese nombre del destinatario'.
importeEnvio :=(Prompter prompt: 'Ingrese importe destino')asNumber .! !
!Envio2 categoriesForMethods!
cargaDatos!public! !
!

Encomienda guid: (GUID fromString: '{8147f310-8cc3-4a4c-9a84-3079ebd316c1}')!
Encomienda comment: ''!
!Encomienda categoriesForClass!Kernel-Objects! !
!Encomienda methodsFor!

pesoEncomienda
^pesoEncomienda!

pesoEncomienda: unFloat
pesoEncomienda := unFloat.! !
!Encomienda categoriesForMethods!
pesoEncomienda!public! !
pesoEncomienda:!public! !
!

"Binary Globals"!

