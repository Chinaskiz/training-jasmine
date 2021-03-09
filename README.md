# Training Jasmine

[Jasmine](https://jasmine.github.io/index.html) est une librairie permettant la rédaction et l'exécution de tests unitaires Javascript.

## Installation
### Pré-requis
- Node.js installé (embarque l'installation de npm)
- Repository avec package.json configuré

### Déroulement
- Installer jasmine en tant que dev-dependencies 

```bash
npm install --save-dev jasmine
```
- Créer le fichier de configuration de base de Jasmine

```bash
npx jasmine init
```

- Lancer les tests 

```bash
npx jasmine
```

### Utile à l'installation
- Extension VSCode "Jasmine Test Explorer" : permet de lancer les tests en un clic depuis l'IDE, et d'afficher les résultats dans la gouttière
- Scripter le lancement du test dans package.json

## Utilisation

### Syntaxe de base
- Un test est représenté par une fonction `it(…)`
- Un ensemble de test est créé par une fonction `describe(…)`
- Il est possible de préparer des tests avec `beforeEach(…)` => s'applique sur l'ensemble du bloc describe
- Il est possible de nettoyer après les tests avec `afterEach(…)`
- Pour désactiver un test, on utilise `xit(…)` ou `xdescribe(…)` pour désactiver un ensemble de tests
- Une assertion s'écrit de la forme suivante : `expect(actual).matcherFunction(expected)`

## Matchers de base
- Tous les matchers peuvent être inversés avec `.not.matcherFunction()`
- `toBe(...)` et `toEqual(...)` : matcher d'égalité === ou ==
- `toBeDefined()` : matcher d'existence
- `toBeNull()` : matcher de nullité
- `toBeTrue()`, `toBeFalse()`, `toBeTruthy()`, `toBeFalsy()` : matcher booléen (strict ou non)
- `toBeGreaterThan(...)`, `toBeLessThan(...)`, `toBeGreaterThanOrEqual(...)`, `toBeLessThanOrEqual(...)` : matcher de comparaison
- `toHaveSize(...)` : matcher de taille de collection
- `toContain(...)` : matcher de présence dans une collection
- `toThrow()`, `toThrowError()` : matcher d'exception
- D'autres existent, doc à consulter

## Spies
- Permet de vérifier l'exécution de fonctions, les paramètres utilisés, etc.
- Permet de bouchonner (remplacer la vraie implémentation) une fonction (utile quand on travaille avec des APIs externes, etc.)
- Dispose de matchers spécifiques :
    - `toHaveBeenCalled()` : vérifie que le spy a été appelé
    - `toHaveBeenCalledWith(...)` : vérifie les paramètres utilisés lors de l'appel du spy
    - `toHaveBeenCalledTimes(...)` : vérifie le nombre d'appels au spy (sachant que le spy est détruit dès la sortie du scope)
- Le bouchonnage est permis grâce à un ensemble de functions sur le spy
    - `.and.returnValue(...)` : permet de spécifier la valeur retournée par l'appel
    - `.and.callFake(...)` : appelle une autre fonction à l'appel du spy
    - `.and.callThrough()` : appelle la réelle implémentation de la méthode espionnée
    - `.and.throwError(...)` : lève une exception à l'appel du spy
- Il est possible de créer un spy à partir de rien avec `jasmine.createSpy()`
- Il est aussi possible de créer un objet dont les méthodes sont des spys avec `jasmine.createSpyObj()`

## Gestion de l'horloge
- Pour tous les tests nécessitant la manipulation du temps (vérifier une date précise, vérifier une exécution après un timeout), il est nécessaire d'utiliser les functions de la clock jasmine
- `Jasmine.clock().install()` pour initialiser une horloge spécifique au test
- `Jasmine.clock().mockDate()` pour spécifier une date/heure précise pour le contexte de test
- `Jasmine.clock().uninstall()` pour supprimer l'horloge installé
- `Jasmine.tick()` pour faire avancer l'horloge d'un nombre précis de millisecondes
	