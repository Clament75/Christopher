import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class SavaData extends HttpServlet {


	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String host = "jdbc:mysql://localhost";
		String user = "root";
		String password = "root";

		//String id = request.getParameter("id");
		String name = request.getParameter("name");
		String address = request.getParameter("address");
		String lat = request.getParameter("lat");
		String lng = request.getParameter("lng");
		String type = request.getParameter("type");
		
		
		

		try {
			Class.forName("com.mysql.jdbc.Driver");
			// 1.Get a Connection to Database
			Connection con = DriverManager.getConnection(host, user, password);
			System.out.println("Connected database successfully...");

				// 2.Create a Statement
			Statement mystmt = con.createStatement();

			// 3.Execute SQL query

			String sql = "insert into ss.markers (name,address,lat,lng,type) values"
					+ "('" + name + "','" + address + "','" + lat + "','"
					+ lng + "','" + type + "')";

			mystmt.executeUpdate(sql);

			

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
