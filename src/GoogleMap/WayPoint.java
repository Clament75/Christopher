package GoogleMap;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.ResultSet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.swing.JFrame;
import javax.swing.JOptionPane;

//import com.mysql.jdbc.PreparedStatement;

public class WayPoint extends HttpServlet

{
	private JFrame frame;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String host = "jdbc:mysql://localhost";
		String user = "root";
		String password = "root";

		String startwp = request.getParameter("startwp");
		String endwp = request.getParameter("endwp");
		String waypoint = request.getParameter("waypoint");
		
		
		try {

			Class.forName("com.mysql.jdbc.Driver");
			// 1.Get a Connection to Database
			Connection con = DriverManager.getConnection(host, user, password);

			// 2.Create a Statement
			Statement mystmt = con.createStatement();
			
		

			// 3.Execute SQL query
			//ResultSet rs = mystmt.executeQuery("select name,value from googlemap.wp where startwp = '"+startwp+"'  and endwp = '"+endwp+"' ");
			ResultSet rs = mystmt.executeQuery("select name,value from googlemap.wp");
					if (rs.next()) {
						
			
						//document.getElementById(waypoint).innerHTML = tambaram_pallikaranai;
						String name = rs.getString("name"); 

						
					}

					else {
						
					}
				

			
		}

		catch (Exception e) {
			e.printStackTrace();
		}

	}

}
