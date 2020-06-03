## Configurações para Redux ->

1. Instale as bibliotecas necessárias> redux e react-redux;

2. Crie uma store que irá retornar o estado da aplicação;

3. Crie um reducer para a store;
    - O reducer é uma função que recebe o state inicial e a action como parâmetros. 
    Ex: 
    ```
    const INITIAL_STATE = {
        todo: "",
        todos: []
    }

    function reducer(state= INITIAL_STATE, action) {
        switch (action.type) {
            case "GET_TODOS":
                return {
                    ...state,
                    todos: ["todos 1", "todos 2"]
                }
            default:
                return state;
        }   
    }
    ```
    - Importe o reducer para seu store: 
        const store = createStore(reducer)
    - Além disso, o useDispatch (hook do react-redux) conecta a action ao reducer e assim permite que haja modificações, quando necessário. Essa manipulação é feita no componente.
    EX: 
    ```
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTodos())
    }, []);
    ```
    **Nesse caso, getTodos é a action contendo o type.** 


4. Passe a store para a app com um Provider; 
    - O Provider é passado no index, onde renderiza o app.

5. Conecte seu componente à store com o useSelector; 
    - useSelector é um hook do react-redux que recebe uma função contendo o state e retorna o state.
    Ex: const store = useSelector((state) => state)

6. Crie uma action para uma modificação;
    - A action é uma função que retorna obrigatoriamente um objeto contendo o type, que foi especificado no reducer com o switch case. 

7. Dispare a action com um dispatch.
    - O valor da action é mandado pelo dispatch.


**obs.:* 
    - **A redux só irá re-renderizar a view se o reducer encontrar o type nas actions** 

