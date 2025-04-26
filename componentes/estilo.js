import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  fundoJS: {
    flex: 1,
    flexDirection:"column",
    backgroundColor: '#fff',
    
    
  },

  fundoReact: {
    flex: 1,
    backgroundColor: '#fff'
  },

  fundoNode: {
    flex: 1,
    backgroundColor: '#fff'
  },
  
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    fontWeight: '700',
    flex:1
  },

  logo: {
    width: 100,
    height: 100,
    marginVertical: 20,
    backgroundColor: '#fff',
  },  

  boxBotoes: {
    flexDirection: "row",
    width: 300,
    justifyContent: "space-around"
  },

  titulo: {
    fontSize: 26, 
    marginBottom: 10,
    textAlign: "center",
    fontWeight: 'bold'
  },  

  texto: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center"
  },

  tarefa:{
  flexDirection:"row",
  alignItems:"center",
  border: 1,
  borderColor:"black",
  backgroundColor:"#dce3e8",
  width:"90%",
  height:60,
 margin:10,
  padding:15,
  
  

  }
});

export default estilo;