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


import com.AssetRegisterBook.domain.core.CensusCount;


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

@Repository("CensusCountDao")
public class CensusCountDao   {

	//private Log log = LogFactory.getLog(getClass());
	private static Logger log = Logger.getLogger(CensusCountDao.class.getName());

	@Autowired
 	CouchbaseTemplate couchbaseTemplate;

 	@Autowired
 	CouchbaseClient client ;


	// auths not ready at this time

	/**
	*
	*The purpose of Dao method is to perform fetch operation of  CensusCount noun from  database based on given noun id
	*@param  id
	*@param user
	*@return the_CensusCount object will return
	*@throws Exception
	*/

	public CensusCount censuscount_search_for_update(String id) throws Exception {
		  log.setLevel(Level.INFO);
	      log.info("censuscount_search_for_update Dao started operation!");

		   CensusCount  the_censuscount = couchbaseTemplate.findById(id,CensusCount.class);
		  return the_censuscount;

	}

	// auths not ready at this time

	/**
	*
	*The purpose of Dao method is to get list of  CensusCount noun from  database
	*
	*
	*@return List of CensusCount object will return
	*@throws Exception
	*/

	public ArrayList<CensusCount> get_all_censuscount() throws Exception {
		  log.setLevel(Level.INFO);
	      log.info("get_all_censuscount Dao started operation!");


		   Query query = new Query();
		   query.setIncludeDocs(true);
		   query.setStale( Stale.FALSE );

		  return (ArrayList<CensusCount>)  couchbaseTemplate.findByView("dev_censuscount","censuscount_by_name",query,CensusCount.class);

	}



	//auths not ready at this time

	/**
	*
	*The purpose of Dao method is to perform save operation of  CensusCount noun into database
	*@param CensusCount
	*@param user
	*@return CensusCount object will return
	*@throws Exception
	*/


	public CensusCount create_censuscount(CensusCount CensusCount ) throws Exception {

	 	  log.setLevel(Level.INFO);
	      log.info("create_censuscount Dao started operation!");

 		 String key = "Document_count";
 		 String  clientKey =  Long.toString(client.incr(key,1,1));
 		 CensusCount.setId(clientKey);
 		 couchbaseTemplate.save(CensusCount);
 		 String viewName = "censuscount_by_name";
 		  String mapFunction =  "function (doc, meta) {"
 		 +  "if (doc._class == \"com.AssetRegisterBook.domain.core.CensusCount\") {"
 		  + "emit(null, null);"
 		  +" }"
 		 +"}";
 		 DesignDocument designDoc = new DesignDocument("dev_censuscount");
 		 System.err.println("-- > designDoc - > "+designDoc.getName()+"-> lan - > "+designDoc.getLanguage());
 		 ViewDesign view = new ViewDesign(viewName, mapFunction);
 		 System.err.println("-- > view - > "+view.getName()+"-> lan - > "+view.getReduce().toString());
 		 designDoc.getViews().add(view);
 		 client.createDesignDoc(designDoc);

		  return CensusCount;

	}

	//auths not ready at this time

	/**
	*
	*The purpose of Dao method is to perform update operation of  CensusCount noun into database
	*@param CensusCount
	*@param user
	*@return the_CensusCount object will return
	*@throws Exception
	*/


	public CensusCount update_censuscount(CensusCount CensusCount) throws Exception {

	 	  log.setLevel(Level.INFO);
	      log.info("update_censuscount Dao started operation!");

 		 couchbaseTemplate.save(CensusCount);
		  return CensusCount;

	}

	//auths not ready at this time

	/**
	*
	*The purpose of Dao method is to perform delete operation of  CensusCount noun from  database based on given noun id
	*@param  id
	*@param user
	*@return the_CensusCount id deleted based on id
	*@throws Exception
	*/


	public String  delete_censuscount(String  id) throws Exception {

	 	  log.setLevel(Level.INFO);
	      log.info("delete_censuscount Dao started operation!");

 		 client.delete(id);
		  return "{\"status\":\"success\"}";

	}



}