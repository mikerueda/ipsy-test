# ipsy-test

Created with CodeSandbox

Consideraciones:

- el api eventualmente falla ante pegadas consecutivas, para lo cual me gustaría con mas tiempo implementar un rollback de los valores de paginación y de cantidad de elementos a ver a su estando anterior, por lo pronto dejé simplemente un mensaje de error correspondiente.

- la imagen de referencia se rompió por alguna razon y no lo pude volver a ver asi que lo hice desde la memoria y por ende me tomé alguna libertad, espero que no sea un problema.

- con un poco mas de tiempo me hubiese gustado ponerle mejores estilos a la navegación y le input de tiles to show.

- me hubiese gustado componetizar un poco mas la prueba pero implicaba implementar un estado global por context y custom hooks o prop drilling, dado lo sencillo del caso preferí dejarlo asi.
