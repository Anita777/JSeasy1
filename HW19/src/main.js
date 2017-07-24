/* task 0
Даны строки разделенные различным образом,
верните строки разделенные / или _, в нижнем регистре
solution("ActiveModel::Errors") => active_model/errors"
solution("HelloHowAreYou") => "hello_how_are_you"
solution("MyNAMEIsBOND-JamesBond") => my_name_is_bond_james_bond"
solution("MAINCompany::BEST-MAINUser") => "main_company/best_main_user"
*/

var solution = str => {
  str = str.replace(/::/, '/').replace('-', '_');
  str =  str.replace(/[A-Z]{1}[a-z]/g, function(x) {	 	
    return str = '_' + x.toLowerCase();
  })
  str = str.replace(/[a-z]{1}[A-Z]/g, function(x) {
  	return str =  x[0] + '_' + x[1];
  });
  if(str[0] === '_')  {
    str = str.replace(/[_]/, '');	
  }
  str = str.replace('/_', '/').replace('__', '_').toLowerCase();
  console.log(str);	
}

solution("ActiveModel::Errors");//active_model/errors
solution("MAINCompany::BEST-MAINUser");//"main_company/best_main_user"
solution("HelloHowAreYou") //"hello_how_are_you"
solution("MyNAMEIsBOND-JamesBond")// => my_name_is_bond_james_bond"



