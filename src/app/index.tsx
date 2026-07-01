import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Checkbox } from "expo-checkbox";
import { useEffect, useState } from "react";
import { FlatList, Image, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
type TodoType={
  id:number,
  title:string,
  isDone:boolean,
}

export default function Index(){


  const todoData=[
    {
      id:1,
      title:"Todo 1",
      isDone: false,
    },
    {
      id:2,
      title:"Todo 2",
      isDone:false,
    },
    {
      id:3,
      title:"Todo 3",
      isDone:false,

    },
    {
      id:4,
      title:"Todo 4",
      isDone:false,
    },
    {
      id:5,
      title:"Todo 5",
      isDone:false,
    },
{
      id:6,
      title:"Todo 6",
      isDone:false,
    },

  ];

  const [todos, setTodos] = useState<TodoType[]>([]);
  const [todoText, setTodoText] = useState<string>('');
  const [SearchQuery, setSearchQuery] = useState<string>('');
  const [oldTodos, setOldTodos] = useState<TodoType[]>([]);
  useEffect(()=>{
    const getTodos=async()=>{
      try{
        const storedTodos= await AsyncStorage.getItem('my-todos');
        if(storedTodos){
          setTodos(JSON.parse(storedTodos));
          setOldTodos(JSON.parse(storedTodos));
        }
        else{
          setTodos(todoData);
        }
      }
      catch(error){
        console.error('Error loading todos:', error);
      }
    };
    getTodos();
  },[]);
  const addTodo = async () => {
    try {
      const newTodo: TodoType = { id: Math.random(), title: todoText, isDone: false };
      const updated = [...(todos ?? []), newTodo]; // don't push into possibly-undefined state
      setTodos(updated);
      await AsyncStorage.setItem('my-todos', JSON.stringify(updated));
      setTodoText('');
      setOldTodos(updated);
      Keyboard.dismiss();
    } catch (error) {
      console.error('Error saving todo:', error);
    }
  };


  const deleteTodo = async (id: number) => {
      try {
        const newTodos = todos.filter(todo => todo.id !== id);
        await AsyncStorage.setItem('my-todos', JSON.stringify(newTodos));
        setTodos(newTodos);
        setOldTodos(newTodos);
      }
        catch (error) {          console.error('Error deleting todo:', error);
        }
    }


    const handleDone= async (id: number) => {
      try {
        const newTodos = todos.map(todo => {     
             if (todo.id === id) {      
                    return { ...todo, isDone: !todo.isDone };
          }
          return todo;
        });
        await AsyncStorage.setItem('my-todos', JSON.stringify(newTodos));
        setTodos(newTodos);
        setOldTodos(newTodos);
      } 
      catch (error) {
      console.error('Error updating todo:', error);
      }
    };




    const onSearch= (query: string) => {
      const filtered=todos.filter(todo => todo.title.toLowerCase().includes(query.toLowerCase()));
      setSearchQuery(query);
      setTodos(filtered);
      
    };
    useEffect(()=>{
      onSearch(SearchQuery);
      if(SearchQuery === ''){
        setTodos(oldTodos);
      }
    },[SearchQuery]);

  return (
    <SafeAreaView
      style={styles.container}
      >
      <View style={styles.header}>
        <TouchableOpacity onPress={()=> alert('Clicked')}>
          <Ionicons name="menu" size={24} color={'#333'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> alert('Image !')}>
          <Image source={{uri: 'https://img.magnific.com/free-vector/gradient-colored-ui-kit-collection_23-2149195613.jpg?semt=ais_hybrid&w=740&q=80'}} style={{width: 50, height: 50, borderRadius: 200}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> alert('Add Todo !')}>
          <Ionicons name="add" size={24} color={'#333'} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color={'#333'} />
        <TextInput placeholder="Search" value={SearchQuery} onChangeText={(text) => onSearch(text)} style={styles.searchInput} clearButtonMode="always" />
      </View>
      <FlatList
        data={[...todos].reverse()} 
        keyExtractor={(item)=> item.id.toString() } 
        renderItem={({item}) => (
          <ToDoItem todo={item} deleteTodo={deleteTodo} handleDone={handleDone} />
        )} 
      />
      <KeyboardAvoidingView style={styles.footer} behavior='padding' keyboardVerticalOffset={10}>
        <TextInput placeholder="Add new todo" value={todoText} onChangeText={(text) => setTodoText(text)}  style={styles.newTodoInput}/>
        <TouchableOpacity style={styles.addTodoButton} onPress={addTodo} >
          <Ionicons name="add" size={24} color={'#333'} />
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );

}
const ToDoItem= ({todo, deleteTodo, handleDone} : {todo: TodoType, deleteTodo: (id: number) => void, handleDone: (id: number) => void })=>(
  <View style={styles.todoItem}>
    <View style={styles.todoInfoContainer}>
      <Checkbox value={todo.isDone} onValueChange={() => handleDone(todo.id)} color={todo.isDone ? 'green' : undefined} />
      <Text style={[styles.todoText, todo.isDone && {textDecorationLine: 'line-through'}]}>{todo.title}</Text>
    </View>
    <TouchableOpacity onPress={()=> deleteTodo(todo.id)}>
      <Ionicons name="trash" size={20} color={'red'} />
    </TouchableOpacity>
  </View>
);

const styles=StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:16,
    backgroundColor:'#629e6b',
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:20,
    alignItems:'center',
  },
  searchBar:{
    backgroundColor:'#eee',
    flexDirection:'row',
    padding:16,
    borderRadius:10,
    gap: 10,
    marginBottom:20,
  },
  searchInput:{
    backgroundColor:'#fffff3',
    flex:1,
    padding: 10,
    borderRadius:10,
    fontSize:16,
  },
  todoItem:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:'#eee',
    padding:16,
    marginBottom:10,
  },
  todoInfoContainer:{
    flexDirection:'row',
    gap:10,
    alignItems:'center',
  },
  todoText:{
    fontSize: 16,
    color : '#4f3333',
  },
  footer:{
    flexDirection:'row',
    gap:10,
    alignItems:'center',
    justifyContent:'space-between',
  },
  newTodoInput:{
    flex:1,
    backgroundColor:'#eee',
    padding:10,
    borderRadius:10,
    fontSize:16,
  },
  addTodoButton:{
    backgroundColor:'blue',
    padding:10,
    borderRadius:10,  
    marginLeft:10,
  }
});




