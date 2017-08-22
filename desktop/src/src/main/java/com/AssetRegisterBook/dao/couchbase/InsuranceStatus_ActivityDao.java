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


import com.AssetRegisterBook.domain.core.InsuranceStatus;


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

@Repository("InsuranceStatus_ActivityDao")
public class InsuranceStatus_ActivityDao   {

	//private Log log = LogFactory.getLog(getClass());
	private static Logger log = Logger.getLogger(InsuranceStatus_ActivityDao.class.getName());

	@Autowired
 	CouchbaseTemplate couchbaseTemplate;

 	@Autowired
 	CouchbaseClient client ;


	// auths not ready at this time

	/**
	*
	*The purpose of Dao method is to perform fetch operation of  InsuranceStatus noun from  database based on given noun id
	*@param  id
	*@param user
	*@return the_InsuranceStatus object will return
	*@throws Exception
	*/

	public InsuranceStatus insurancestatus_search_for_update(String id) throws Exception {
		  log.setLevel(Level.INFO);
	      log.info("insurancestatus_search_for_update Dao started operation!");

		   InsuranceStatus  the_insurancestatus = couchbaseTemplate.findById(id,InsuranceStatus.class);
		  return the_insurancestatus;

	}

	// auths not ready at this time

	/**
	*
	*The purpose of Dao method is to get list of  InsuranceStatus noun from  database
	*
	*
	*@return List of InsuranceStatus object will return
	*@throws Exception
	*/

	public ArrayList<InsuranceStatus> get_all_insurancestatus() throws Exception {
		  log.setLevel(Level.INFO);
	      log.info("get_all_insurancestatus Dao started operation!");


		   Query query = new Query();
		   query.setIncludeDocs(true);
		   query.setStale( Stale.FALSE );

		  return (ArrayList<InsuranceStatus>)  couchbaseTemplate.findByView("dev_insurancestatus","insurancestatus_by_name",query,InsuranceStatus.class);

	}



	//auths not ready at this time

	/**
	*
	*The purpose of Dao method is to perform save operation of  InsuranceStatus noun into database
	*@param InsuranceStatus
	*@param user
	*@return InsuranceStatus object will return
	*@throws Exception
	*/


	public InsuranceStatus create_insurancestatus(InsuranceStatus InsuranceStatus ) throws Exception {

	 	  log.setLevel(Level.INFO);
	      log.info("create_insurancestatus Dao started operation!");

 		 String key = "Document_count";
 		 String  clientKey =  Long.toString(client.incr(key,1,1));
 		 InsuranceStatus.setId(clientKey);
 		 couchbaseTemplate.save(InsuranceStatus);
 		 String viewName = "insurancestatus_by_name";
 		  String mapFunction =  "function (doc, meta) {"
 		 +  "if (doc._class == \"com.AssetRegisterBook.domain.core.InsuranceStatus\") {"
 		  + "emit(null, null);"
 		  +" }"
 		 +"}";
 		 DesignDocument designDoc = new DesignDocument("dev_insurancestatus");
 		 System.err.println("-- > designDoc - > "+designDoc.getName()+"-> lan - > "+designDoc.getLanguage());
 		 ViewDesign view = new ViewDesign(viewName, mapFunction);
 		 System.err.println("-- > view - > "+view.getName()+"-> lan - > "+view.getReduce().toString());
 		 designDoc.getViews().add(view);
 		 client.createDesignDoc(designDoc);

		  return InsuranceStatus;

	}

	//auths not ready at this time

	/**
	*
	*The purpose of Dao method is to perform update operation of  InsuranceStatus noun into database
	*@param InsuranceStatus
	*@param user
	*@return the_InsuranceStatus object will return
	*@throws Exception
	*/


	public InsuranceStatus update_insurancestatus(InsuranceStatus InsuranceStatus) throws Exception {

	 	  log.setLevel(Level.INFO);
	      log.info("update_insurancestatus Dao started operation!");

 		 couchbaseTemplate.save(InsuranceStatus);
		  return InsuranceStatus;

	}

	//auths not ready at this time

	/**
	*
	*The purpose of Dao method is to perform delete operation of  InsuranceStatus noun from  database based on given noun id
	*@param  id
	*@param user
	*@return the_InsuranceStatus id deleted based on id
	*@throws Exception
	*/


	public String  delete_insurancestatus(String  id) throws Exception {

	 	  log.setLevel(Level.INFO);
	      log.info("delete_insurancestatus Dao started operation!");

 		 client.delete(id);
		  return "{\"status\":\"success\"}";

	}



}