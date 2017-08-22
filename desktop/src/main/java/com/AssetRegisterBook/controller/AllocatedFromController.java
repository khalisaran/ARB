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


import com.AssetRegisterBook.domain.core.AllocatedFrom;

import com.AssetRegisterBook.config.AssetRegisterBookSwaggerUIConstants;

import com.AssetRegisterBook.service.AllocatedFromService;



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

@Api(value = "/api/AllocatedFrom", description = "AllocatedFrom of AllocatedFrom",produces = "application/json")
@CrossOrigin
@Controller("AllocatedFromController")
@RequestMapping("/api/AllocatedFrom")
public class AllocatedFromController  implements AssetRegisterBookSwaggerUIConstants {

private static Logger log = Logger.getLogger(AllocatedFromController.class.getName());

 


	private AllocatedFromService AllocatedFrom_service;


	public AllocatedFromService get_AllocatedFrom_service() {
		return AllocatedFrom_service;
	}


	@Resource(name="AllocatedFromService")
	public void set_AllocatedFrom_service(AllocatedFromService AllocatedFrom_service) {
		this.AllocatedFrom_service = AllocatedFrom_service;
	}




	//auths not ready at this time
	/**
	*The purpose of this method is to perform save operation of  AllocatedFrom noun into database
	* @param the_AllocatedFrom
	*@return AllocatedFrom object will return for mongo
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/create_AllocatedFrom", httpMethod = "POST",notes = "creates a noun of AllocatedFrom",response = AllocatedFrom.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.POST,value = "/create_AllocatedFrom" ,headers="Accept=application/json")
    @ResponseBody
	public AllocatedFrom create_AllocatedFrom(@RequestBody AllocatedFrom the_AllocatedFrom) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("create_AllocatedFrom controller started operation!");

		the_AllocatedFrom.setId(null);

		AllocatedFrom a_AllocatedFrom = AllocatedFrom_service.create_allocatedfrom(the_AllocatedFrom);

		log.info("Object returned from create_AllocatedFrom method !");

 

        return a_AllocatedFrom;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to perform update operation of  AllocatedFrom noun into database
	*@param the_AllocatedFrom
	*@return AllocatedFromobject will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/update_AllocatedFrom", httpMethod = "PUT",notes = "updates a noun of AllocatedFrom",response = AllocatedFrom.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.PUT,value = "/update_AllocatedFrom" ,headers="Accept=application/json")
    @ResponseBody
	public AllocatedFrom update_AllocatedFrom(@RequestBody AllocatedFrom the_AllocatedFrom) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("update_AllocatedFrom controller started operation!");

		AllocatedFrom a_AllocatedFrom;

		a_AllocatedFrom = AllocatedFrom_service.update_allocatedfrom(the_AllocatedFrom);

		log.info("Object returned from update_AllocatedFrom method !");

 

        return a_AllocatedFrom;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to perform fetch operation of  AllocatedFrom noun from  database based on given noun id
	*@param AllocatedFrom_id
	*@return AllocatedFromobject will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/search_for_update_AllocatedFrom/{AllocatedFrom_id}", httpMethod = "GET",notes = "updates a noun of AllocatedFrom",response = AllocatedFrom.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.GET,value = "/search_for_update_AllocatedFrom/{AllocatedFrom_id}" ,headers="Accept=application/json")
    @ResponseBody
	public AllocatedFrom search_for_update_AllocatedFrom(@PathVariable("AllocatedFrom_id")String AllocatedFrom_id) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("search_for_update_AllocatedFrom controller started operation!");

		AllocatedFrom the_AllocatedFrom = new AllocatedFrom();

		the_AllocatedFrom = AllocatedFrom_service.allocatedfrom_search_for_update(AllocatedFrom_id);

		log.info("Object returned from search_for_update_AllocatedFrom method !");

 

        return the_AllocatedFrom;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to perform delete operation of  AllocatedFrom noun from  database based on given noun id
	*@param AllocatedFrom_id
	*@return AllocatedFromobject will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/delete_AllocatedFrom/{AllocatedFrom_id}", httpMethod = "DELETE",notes = "deletes a noun of AllocatedFrom",response = AllocatedFrom.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.DELETE,value = "/delete_AllocatedFrom/{AllocatedFrom_id}" ,headers="Accept=application/json")
    @ResponseBody
	public String  delete_AllocatedFrom(@PathVariable("AllocatedFrom_id")String  AllocatedFrom_id) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("delete_AllocatedFrom controller started operation!");

		String service_return_msg = "";

		service_return_msg = AllocatedFrom_service.delete_allocatedfrom(AllocatedFrom_id);

		log.info("Object returned from delete_AllocatedFrom method !");

 

        return service_return_msg;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to get list of  AllocatedFrom noun from  database
	*
	*@return List of AllocatedFrom objects will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/get_all_AllocatedFrom", httpMethod = "GET",notes = "special search that gets all values of AllocatedFrom",response = AllocatedFrom.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.GET,value = "/get_all_AllocatedFrom" ,headers="Accept=application/json")
    @ResponseBody
	public List<AllocatedFrom> get_all_AllocatedFrom() throws Exception {

		log.setLevel(Level.INFO);
	    log.info("get_all_AllocatedFrom controller started operation!");

		List<AllocatedFrom> AllocatedFrom_list = new ArrayList<AllocatedFrom>();

		AllocatedFrom_list = AllocatedFrom_service.get_all_allocatedfrom();

		log.info("Object returned from get_all_AllocatedFrom method !");

 

        return AllocatedFrom_list;

	}




}