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


import com.AssetRegisterBook.domain.core.RentalPlan;


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

@Repository("RentalPlanDao")
public class RentalPlanDao   {

	//private Log log = LogFactory.getLog(getClass());
	private static Logger log = Logger.getLogger(RentalPlanDao.class.getName());

	@Autowired
 	CouchbaseTemplate couchbaseTemplate;

 	@Autowired
 	CouchbaseClient client ;


	// auths not ready at this time

	/**
	*
	*The purpose of Dao method is to perform fetch operation of  RentalPlan noun from  database based on given noun id
	*@param  id
	*@param user
	*@return the_RentalPlan object will return
	*@throws Exception
	*/

	public RentalPlan rentalplan_search_for_update(String id) throws Exception {
		  log.setLevel(Level.INFO);
	      log.info("rentalplan_search_for_update Dao started operation!");

		   RentalPlan  the_rentalplan = couchbaseTemplate.findById(id,RentalPlan.class);
		  return the_rentalplan;

	}

	// auths not ready at this time

	/**
	*
	*The purpose of Dao method is to get list of  RentalPlan noun from  database
	*
	*
	*@return List of RentalPlan object will return
	*@throws Exception
	*/

	public ArrayList<RentalPlan> get_all_rentalplan() throws Exception {
		  log.setLevel(Level.INFO);
	      log.info("get_all_rentalplan Dao started operation!");


		   Query query = new Query();
		   query.setIncludeDocs(true);
		   query.setStale( Stale.FALSE );

		  return (ArrayList<RentalPlan>)  couchbaseTemplate.findByView("dev_rentalplan","rentalplan_by_name",query,RentalPlan.class);

	}



	//auths not ready at this time

	/**
	*
	*The purpose of Dao method is to perform save operation of  RentalPlan noun into database
	*@param RentalPlan
	*@param user
	*@return RentalPlan object will return
	*@throws Exception
	*/


	public RentalPlan create_rentalplan(RentalPlan RentalPlan ) throws Exception {

	 	  log.setLevel(Level.INFO);
	      log.info("create_rentalplan Dao started operation!");

 		 String key = "Document_count";
 		 String  clientKey =  Long.toString(client.incr(key,1,1));
 		 RentalPlan.setId(clientKey);
 		 couchbaseTemplate.save(RentalPlan);
 		 String viewName = "rentalplan_by_name";
 		  String mapFunction =  "function (doc, meta) {"
 		 +  "if (doc._class == \"com.AssetRegisterBook.domain.core.RentalPlan\") {"
 		  + "emit(null, null);"
 		  +" }"
 		 +"}";
 		 DesignDocument designDoc = new DesignDocument("dev_rentalplan");
 		 System.err.println("-- > designDoc - > "+designDoc.getName()+"-> lan - > "+designDoc.getLanguage());
 		 ViewDesign view = new ViewDesign(viewName, mapFunction);
 		 System.err.println("-- > view - > "+view.getName()+"-> lan - > "+view.getReduce().toString());
 		 designDoc.getViews().add(view);
 		 client.createDesignDoc(designDoc);

		  return RentalPlan;

	}

	//auths not ready at this time

	/**
	*
	*The purpose of Dao method is to perform update operation of  RentalPlan noun into database
	*@param RentalPlan
	*@param user
	*@return the_RentalPlan object will return
	*@throws Exception
	*/


	public RentalPlan update_rentalplan(RentalPlan RentalPlan) throws Exception {

	 	  log.setLevel(Level.INFO);
	      log.info("update_rentalplan Dao started operation!");

 		 couchbaseTemplate.save(RentalPlan);
		  return RentalPlan;

	}

	//auths not ready at this time

	/**
	*
	*The purpose of Dao method is to perform delete operation of  RentalPlan noun from  database based on given noun id
	*@param  id
	*@param user
	*@return the_RentalPlan id deleted based on id
	*@throws Exception
	*/


	public String  delete_rentalplan(String  id) throws Exception {

	 	  log.setLevel(Level.INFO);
	      log.info("delete_rentalplan Dao started operation!");

 		 client.delete(id);
		  return "{\"status\":\"success\"}";

	}



}