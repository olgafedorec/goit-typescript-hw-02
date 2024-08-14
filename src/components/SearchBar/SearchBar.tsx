import { Field, Form, Formik } from "formik";
import { AiOutlineSearch } from "react-icons/ai";
import toast from "react-hot-toast";
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import css from "./SearchBar.module.css";

type FormProps = {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<FormProps> = ({ onSearch }) => {
  return (
<header className={css.container}>
<Formik< {query: string} >
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        if(!values.query.trim()) {
          toast.error('This field can not be empty!');
          return;
        }
          onSearch(values.query);
          actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <Field className={css.input} type="text" name="query" placeholder="Search images..."/>
        <button type="submit" className={css.button}><AiOutlineSearch size={30} className={css.icon}/></button>
        <ErrorMessage/>
      </Form>
    </Formik>
</header>
    
  );
}

export default SearchBar;