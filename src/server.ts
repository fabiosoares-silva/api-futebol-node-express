import createApp from './app';

const app = createApp();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Tudo certo!😀\nServidor rodando na porta ${port}!🔥🔥🔥 `);
});
