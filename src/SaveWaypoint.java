

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//import javax.servlet.http.HttpSession;
//import javax.swing.JOptionPane;


public class SaveWaypoint extends HttpServlet {
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String host = "jdbc:mysql://localhost";
		String user = "root";
		String password = "root";

		//String uname = request.getParameter("uname");
		//String pwd = request.getParameter("pwd");
		String data = request.getParameter("data");

		try {

			Class.forName("com.mysql.jdbc.Driver");
			// 1.Get a Connection to Database
			Connection con = DriverManager.getConnection(host, user, password);

			// 2.Create a Statement
			Statement mystmt = con.createStatement();
			
		

			// 3.Execute SQL query
			ResultSet rs = mystmt.executeQuery("update ss.waypoint set value ='"+data+"' ");
			
					if (rs.next()) {
						
						
					}

					else {
						
					}
				

			
		}

		catch (Exception e) {
			e.printStackTrace();
		}

		
	}
}
