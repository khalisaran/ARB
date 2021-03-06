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


import com.AssetRegisterBook.domain.core.UsedUs;


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

@Repository("UsedUs_ActivityDao")
public class UsedUs_ActivityDao   {

	//private Log log = LogFactory.getLog(getClass());
	private static Logger log = Logger.getLogger(UsedUs_ActivityDao.class.getName());

	@Autowired
 	CouchbaseTemplate couchbaseTemplate;

 	@Autowired
 	CouchbaseClient client ;


	// auths not ready at this time

	/**
	*
	*The purpose of Dao method is to perform fetch operation of  UsedUs noun from  database based on given noun id
	*@param  id
	*@param user
	*@return the_UsedUs object will return
	*@throws Exception
	*/

	public UsedUs usedus_search_for_update(String id) throws Exception {
		  log.setLevel(Level.INFO);
	      log.info("usedus_search_for_update Dao started operation!");

		   UsedUs  the_usedus = couchbaseTemplate.findById(id,UsedUs.class);
		  return the_usedus;

	}

	// auths not ready at this time

	/**
	*
	*The purpose of Dao method is to get list of  UsedUs noun from  database
	*
	*
	*@return List of UsedUs object will return
	*@throws Exception
	*/

	public ArrayList<UsedUs> get_all_usedus() throws Exception {
		  log.setLevel(Level.INFO);
	      log.info("get_all_usedus Dao started operation!");


		   Query query = new Query();
		   query.setIncludeDocs(true);
		   query.setStale( Stale.FALSE );

		  return (ArrayList<UsedUs>)  couchbaseTemplate.findByView("dev_usedus","usedus_by_name",query,UsedUs.class);

	}



	//auths not ready at this time

	/**
	*
	*The purpose of Dao method is to perform save operation of  UsedUs noun into database
	*@param UsedUs
	*@param user
	*@return UsedUs object will return
	*@throws Exception
	*/


	public UsedUs create_usedus(UsedUs UsedUs ) throws Exception {

	 	  log.setLevel(Level.INFO);
	      log.info("create_usedus Dao started operation!");

 		 String key = "Document_count";
 		 String  clientKey =  Long.toString(client.incr(key,1,1));
 		 UsedUs.setId(clientKey);
 		 couchbaseTemplate.save(UsedUs);
 		 String viewName = "usedus_by_name";
 		  String mapFunction =  "function (doc, meta) {"
 		 +  "if (doc._class == \"com.AssetRegisterBook.domain.core.UsedUs\") {"
 		  + "emit(null, null);"
 		  +" }"
 		 +"}";
 		 DesignDocument designDoc = new DesignDocument("dev_usedus");
 		 System.err.println("-- > designDoc - > "+designDoc.getName()+"-> lan - > "+designDoc.getLanguage());
 		 ViewDesign view = new ViewDesign(viewName, mapFunction);
 		 System.err.println("-- > view - > "+view.getName()+"-> lan - > "+view.getReduce().toString());
 		 designDoc.getViews().add(view);
 		 client.createDesignDoc(designDoc);

		  return UsedUs;

	}

	//auths not ready at this time

	/**
	*
	*The purpose of Dao method is to perform update operation of  UsedUs noun into database
	*@param UsedUs
	*@param user
	*@return the_UsedUs object will return
	*@throws Exception
	*/


	public UsedUs update_usedus(UsedUs UsedUs) throws Exception {

	 	  log.setLevel(Level.INFO);
	      log.info("update_usedus Dao started operation!");

 		 couchbaseTemplate.save(UsedUs);
		  return UsedUs;

	}

	//auths not ready at this time

	/**
	*
	*The purpose of Dao method is to perform delete operation of  UsedUs noun from  database based on given noun id
	*@param  id
	*@param user
	*@return the_UsedUs id deleted based on id
	*@throws Exception
	*/


	public String  delete_usedus(String  id) throws Exception {

	 	  log.setLevel(Level.INFO);
	      log.info("delete_usedus Dao started operation!");

 		 client.delete(id);
		  return "{\"status\":\"success\"}";

	}



}