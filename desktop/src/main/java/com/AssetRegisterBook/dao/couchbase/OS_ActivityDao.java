package com.AssetRegisterBook.dao.couchbase;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.apache.log4j.*;

import com.couchbase.client.CouchbaseClient;
import com.couchbase.client.protocol.views.DesignDocument;
import com.couchbase.client.protocol.views.Query;
import com.couchbase.client.protocol.views.Stale;

import org.springframework.data.couchbase.core.CouchbaseTemplate;
import com.couchbase.client.protocol.views.ViewDesign;


import com.AssetRegisterBook.domain.core.OS;


/**
 *
 * @author Geppetto Generated Code</br>
 * Date Created: </br>
 * @since  </br>
 * build:   </p>
 *
 * code was generated by the Geppetto System </br>
 * Gepppetto system Copyright - Geppetto LLC 2014 - 2015</br>
 * The generated code is free to use by anyone</p>
 *
 *
 *
*/

@Repository("OS_ActivityDao")
public class OS_ActivityDao   {

	//private Log log = LogFactory.getLog(getClass());
	private static Logger log = Logger.getLogger(OS_ActivityDao.class.getName());

	@Autowired
 	CouchbaseTemplate couchbaseTemplate;

 	@Autowired
 	CouchbaseClient client ;


	// auths not ready at this time

	/**
	*
	*The purpose of Dao method is to perform fetch operation of  OS noun from  database based on given noun id
	*@param  id
	*@param user
	*@return the_OS object will return
	*@throws Exception
	*/

	public OS os_search_for_update(String id) throws Exception {
		  log.setLevel(Level.INFO);
	      log.info("os_search_for_update Dao started operation!");

		   OS  the_os = couchbaseTemplate.findById(id,OS.class);
		  return the_os;

	}

	// auths not ready at this time

	/**
	*
	*The purpose of Dao method is to get list of  OS noun from  database
	*
	*
	*@return List of OS object will return
	*@throws Exception
	*/

	public ArrayList<OS> get_all_os() throws Exception {
		  log.setLevel(Level.INFO);
	      log.info("get_all_os Dao started operation!");


		   Query query = new Query();
		   query.setIncludeDocs(true);
		   query.setStale( Stale.FALSE );

		  return (ArrayList<OS>)  couchbaseTemplate.findByView("dev_os","os_by_name",query,OS.class);

	}



	//auths not ready at this time

	/**
	*
	*The purpose of Dao method is to perform save operation of  OS noun into database
	*@param OS
	*@param user
	*@return OS object will return
	*@throws Exception
	*/


	public OS create_os(OS OS ) throws Exception {

	 	  log.setLevel(Level.INFO);
	      log.info("create_os Dao started operation!");

 		 String key = "Document_count";
 		 String  clientKey =  Long.toString(client.incr(key,1,1));
 		 OS.setId(clientKey);
 		 couchbaseTemplate.save(OS);
 		 String viewName = "os_by_name";
 		  String mapFunction =  "function (doc, meta) {"
 		 +  "if (doc._class == \"com.AssetRegisterBook.domain.core.OS\") {"
 		  + "emit(null, null);"
 		  +" }"
 		 +"}";
 		 DesignDocument designDoc = new DesignDocument("dev_os");
 		 System.err.println("-- > designDoc - > "+designDoc.getName()+"-> lan - > "+designDoc.getLanguage());
 		 ViewDesign view = new ViewDesign(viewName, mapFunction);
 		 System.err.println("-- > view - > "+view.getName()+"-> lan - > "+view.getReduce().toString());
 		 designDoc.getViews().add(view);
 		 client.createDesignDoc(designDoc);

		  return OS;

	}

	//auths not ready at this time

	/**
	*
	*The purpose of Dao method is to perform update operation of  OS noun into database
	*@param OS
	*@param user
	*@return the_OS object will return
	*@throws Exception
	*/


	public OS update_os(OS OS) throws Exception {

	 	  log.setLevel(Level.INFO);
	      log.info("update_os Dao started operation!");

 		 couchbaseTemplate.save(OS);
		  return OS;

	}

	//auths not ready at this time

	/**
	*
	*The purpose of Dao method is to perform delete operation of  OS noun from  database based on given noun id
	*@param  id
	*@param user
	*@return the_OS id deleted based on id
	*@throws Exception
	*/


	public String  delete_os(String  id) throws Exception {

	 	  log.setLevel(Level.INFO);
	      log.info("delete_os Dao started operation!");

 		 client.delete(id);
		  return "{\"status\":\"success\"}";

	}



}