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


import com.AssetRegisterBook.domain.core.BuildingOrFloor;


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

@Repository("BuildingOrFloorActivityDao")
public class BuildingOrFloorActivityDao   {

	//private Log log = LogFactory.getLog(getClass());
	private static Logger log = Logger.getLogger(BuildingOrFloorActivityDao.class.getName());

	@Autowired
 	CouchbaseTemplate couchbaseTemplate;

 	@Autowired
 	CouchbaseClient client ;


	// auths not ready at this time

	/**
	*
	*The purpose of Dao method is to perform fetch operation of  BuildingOrFloor noun from  database based on given noun id
	*@param  id
	*@param user
	*@return the_BuildingOrFloor object will return
	*@throws Exception
	*/

	public BuildingOrFloor buildingorfloor_search_for_update(String id) throws Exception {
		  log.setLevel(Level.INFO);
	      log.info("buildingorfloor_search_for_update Dao started operation!");

		   BuildingOrFloor  the_buildingorfloor = couchbaseTemplate.findById(id,BuildingOrFloor.class);
		  return the_buildingorfloor;

	}

	// auths not ready at this time

	/**
	*
	*The purpose of Dao method is to get list of  BuildingOrFloor noun from  database
	*
	*
	*@return List of BuildingOrFloor object will return
	*@throws Exception
	*/

	public ArrayList<BuildingOrFloor> get_all_buildingorfloor() throws Exception {
		  log.setLevel(Level.INFO);
	      log.info("get_all_buildingorfloor Dao started operation!");


		   Query query = new Query();
		   query.setIncludeDocs(true);
		   query.setStale( Stale.FALSE );

		  return (ArrayList<BuildingOrFloor>)  couchbaseTemplate.findByView("dev_buildingorfloor","buildingorfloor_by_name",query,BuildingOrFloor.class);

	}



	//auths not ready at this time

	/**
	*
	*The purpose of Dao method is to perform save operation of  BuildingOrFloor noun into database
	*@param BuildingOrFloor
	*@param user
	*@return BuildingOrFloor object will return
	*@throws Exception
	*/


	public BuildingOrFloor create_buildingorfloor(BuildingOrFloor BuildingOrFloor ) throws Exception {

	 	  log.setLevel(Level.INFO);
	      log.info("create_buildingorfloor Dao started operation!");

 		 String key = "Document_count";
 		 String  clientKey =  Long.toString(client.incr(key,1,1));
 		 BuildingOrFloor.setId(clientKey);
 		 couchbaseTemplate.save(BuildingOrFloor);
 		 String viewName = "buildingorfloor_by_name";
 		  String mapFunction =  "function (doc, meta) {"
 		 +  "if (doc._class == \"com.AssetRegisterBook.domain.core.BuildingOrFloor\") {"
 		  + "emit(null, null);"
 		  +" }"
 		 +"}";
 		 DesignDocument designDoc = new DesignDocument("dev_buildingorfloor");
 		 System.err.println("-- > designDoc - > "+designDoc.getName()+"-> lan - > "+designDoc.getLanguage());
 		 ViewDesign view = new ViewDesign(viewName, mapFunction);
 		 System.err.println("-- > view - > "+view.getName()+"-> lan - > "+view.getReduce().toString());
 		 designDoc.getViews().add(view);
 		 client.createDesignDoc(designDoc);

		  return BuildingOrFloor;

	}

	//auths not ready at this time

	/**
	*
	*The purpose of Dao method is to perform update operation of  BuildingOrFloor noun into database
	*@param BuildingOrFloor
	*@param user
	*@return the_BuildingOrFloor object will return
	*@throws Exception
	*/


	public BuildingOrFloor update_buildingorfloor(BuildingOrFloor BuildingOrFloor) throws Exception {

	 	  log.setLevel(Level.INFO);
	      log.info("update_buildingorfloor Dao started operation!");

 		 couchbaseTemplate.save(BuildingOrFloor);
		  return BuildingOrFloor;

	}

	//auths not ready at this time

	/**
	*
	*The purpose of Dao method is to perform delete operation of  BuildingOrFloor noun from  database based on given noun id
	*@param  id
	*@param user
	*@return the_BuildingOrFloor id deleted based on id
	*@throws Exception
	*/


	public String  delete_buildingorfloor(String  id) throws Exception {

	 	  log.setLevel(Level.INFO);
	      log.info("delete_buildingorfloor Dao started operation!");

 		 client.delete(id);
		  return "{\"status\":\"success\"}";

	}



}