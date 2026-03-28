interface ButtonProps {
  children: string;
  onclick ?: () => void;
  color ?: 'primary' | 'secondary' | 'danger';
}

const Button = ({children, onclick, color="primary"}: ButtonProps) => {
  return (
  <> 
    <button type="button" className={"btn btn-"+color} onClick={onclick}>
      {children}
    </button>
  </>
  );
}

export default Button;











// rafce - shortcut to generate a boilerplate code