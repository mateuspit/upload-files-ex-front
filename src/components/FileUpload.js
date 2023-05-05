import React, { useRef } from 'react'; //importação do hook useRef
import axios from 'axios'; //importação do axios

export default function FileUpload() { 
    const filesElement = useRef(null); //useRef está sendo utilizado para criar uma referência a um input do tipo file
                                       //através da atribuição do valor null ao estado inicial da referência
                                       //(useRef(null))
                                       //Essa referência é então passada como prop para o elemento input através da propriedade ref
                                       //permitindo que possamos acessar e manipular as informações do arquivo selecionado pelo usuário 
                                       //no momento em que ele clica no botão "Send file".
                                       //https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
                                       //https://legacy.reactjs.org/docs/hooks-reference.html#useref

    const sendFile = async () => { //Função chamada ao clicar no botão
        //criando um objeto vazio que será preenchido posteriormente com os dados a serem enviados.
        const dataForm = new FormData();
        //os dados do formulário são os arquivos selecionados pelo usuário no input file 
        //e adicionados à instância de FormData com o método append() em um loop for...of.
        for (const file of filesElement.current.files) {
            dataForm.append('file', file);
        }
        //try catch para verificar erros
        try {
            //requisição post com axios para enviar os dados do arquivos para a API
            //dataForm é o objeto com os dados dos arquivos
            const promise = await axios.post('http://localhost:5005/upload', dataForm);
            const data = promise.data;
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <input type="file" multiple ref={filesElement} />
            <button onClick={sendFile}>Send file</button>
        </div>
    );
}
