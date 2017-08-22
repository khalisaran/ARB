package com.AssetRegisterBook.controller;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.apache.log4j.*;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestBody;

import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;
import com.wordnik.swagger.annotations.ApiParam;
import com.wordnik.swagger.annotations.ApiResponse;
import com.wordnik.swagger.annotations.ApiResponses;


import com.AssetRegisterBook.domain.core.DataTransferLimit;

import com.AssetRegisterBook.config.AssetRegisterBookSwaggerUIConstants;

import com.AssetRegisterBook.service.DataTransferLimitService;



/**
 *
 * @author Geppetto Generated Code</br>
 * Date Created: </br>
 * @since  </br>
   build:   </p>
 *
 * code was generated by the Geppetto System </br>
 * Gepppetto system Copyright - Geppetto LLC 2014 - 2015</br>
 * The generated code is free to use by anyone</p>
 *
 *
 *
*/

@Api(value = "/api/DataTransferLimit", description = "DataTransferLimit of DataTransferLimit",produces = "application/json")
@CrossOrigin
@Controller("DataTransferLimitController")
@RequestMapping("/api/DataTransferLimit")
public class DataTransferLimitController  implements AssetRegisterBookSwaggerUIConstants {

private static Logger log = Logger.getLogger(DataTransferLimitController.class.getName());

 


	private DataTransferLimitService DataTransferLimit_service;


	public DataTransferLimitService get_DataTransferLimit_service() {
		return DataTransferLimit_service;
	}


	@Resource(name="DataTransferLimitService")
	public void set_DataTransferLimit_service(DataTransferLimitService DataTransferLimit_service) {
		this.DataTransferLimit_service = DataTransferLimit_service;
	}




	//auths not ready at this time
	/**
	*The purpose of this method is to perform save operation of  DataTransferLimit noun into database
	* @param the_DataTransferLimit
	*@return DataTransferLimit object will return for mongo
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/create_DataTransferLimit", httpMethod = "POST",notes = "creates a noun of DataTransferLimit",response = DataTransferLimit.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.POST,value = "/create_DataTransferLimit" ,headers="Accept=application/json")
    @ResponseBody
	public DataTransferLimit create_DataTransferLimit(@RequestBody DataTransferLimit the_DataTransferLimit) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("create_DataTransferLimit controller started operation!");

		the_DataTransferLimit.setId(null);

		DataTransferLimit a_DataTransferLimit = DataTransferLimit_service.create_datatransferlimit(the_DataTransferLimit);

		log.info("Object returned from create_DataTransferLimit method !");

 

        return a_DataTransferLimit;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to perform update operation of  DataTransferLimit noun into database
	*@param the_DataTransferLimit
	*@return DataTransferLimitobject will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/update_DataTransferLimit", httpMethod = "PUT",notes = "updates a noun of DataTransferLimit",response = DataTransferLimit.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.PUT,value = "/update_DataTransferLimit" ,headers="Accept=application/json")
    @ResponseBody
	public DataTransferLimit update_DataTransferLimit(@RequestBody DataTransferLimit the_DataTransferLimit) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("update_DataTransferLimit controller started operation!");

		DataTransferLimit a_DataTransferLimit;

		a_DataTransferLimit = DataTransferLimit_service.update_datatransferlimit(the_DataTransferLimit);

		log.info("Object returned from update_DataTransferLimit method !");

 

        return a_DataTransferLimit;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to perform fetch operation of  DataTransferLimit noun from  database based on given noun id
	*@param DataTransferLimit_id
	*@return DataTransferLimitobject will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/search_for_update_DataTransferLimit/{DataTransferLimit_id}", httpMethod = "GET",notes = "updates a noun of DataTransferLimit",response = DataTransferLimit.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.GET,value = "/search_for_update_DataTransferLimit/{DataTransferLimit_id}" ,headers="Accept=application/json")
    @ResponseBody
	public DataTransferLimit search_for_update_DataTransferLimit(@PathVariable("DataTransferLimit_id")String DataTransferLimit_id) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("search_for_update_DataTransferLimit controller started operation!");

		DataTransferLimit the_DataTransferLimit = new DataTransferLimit();

		the_DataTransferLimit = DataTransferLimit_service.datatransferlimit_search_for_update(DataTransferLimit_id);

		log.info("Object returned from search_for_update_DataTransferLimit method !");

 

        return the_DataTransferLimit;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to perform delete operation of  DataTransferLimit noun from  database based on given noun id
	*@param DataTransferLimit_id
	*@return DataTransferLimitobject will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/delete_DataTransferLimit/{DataTransferLimit_id}", httpMethod = "DELETE",notes = "deletes a noun of DataTransferLimit",response = DataTransferLimit.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.DELETE,value = "/delete_DataTransferLimit/{DataTransferLimit_id}" ,headers="Accept=application/json")
    @ResponseBody
	public String  delete_DataTransferLimit(@PathVariable("DataTransferLimit_id")String  DataTransferLimit_id) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("delete_DataTransferLimit controller started operation!");

		String service_return_msg = "";

		service_return_msg = DataTransferLimit_service.delete_datatransferlimit(DataTransferLimit_id);

		log.info("Object returned from delete_DataTransferLimit method !");

 

        return service_return_msg;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to get list of  DataTransferLimit noun from  database
	*
	*@return List of DataTransferLimit objects will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/get_all_DataTransferLimit", httpMethod = "GET",notes = "special search that gets all values of DataTransferLimit",response = DataTransferLimit.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.GET,value = "/get_all_DataTransferLimit" ,headers="Accept=application/json")
    @ResponseBody
	public List<DataTransferLimit> get_all_DataTransferLimit() throws Exception {

		log.setLevel(Level.INFO);
	    log.info("get_all_DataTransferLimit controller started operation!");

		List<DataTransferLimit> DataTransferLimit_list = new ArrayList<DataTransferLimit>();

		DataTransferLimit_list = DataTransferLimit_service.get_all_datatransferlimit();

		log.info("Object returned from get_all_DataTransferLimit method !");

 

        return DataTransferLimit_list;

	}




}