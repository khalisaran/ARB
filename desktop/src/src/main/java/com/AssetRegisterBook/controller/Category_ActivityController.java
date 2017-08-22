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


import com.AssetRegisterBook.domain.core.Category;

import com.AssetRegisterBook.config.AssetRegisterBookSwaggerUIConstants;

import com.AssetRegisterBook.service.Category_ActivityService;



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

@Api(value = "/api/Category_Activity", description = "Category_Activity of Category_Activity",produces = "application/json")
@CrossOrigin
@Controller("Category_ActivityController")
@RequestMapping("/api/Category_Activity")
public class Category_ActivityController  implements AssetRegisterBookSwaggerUIConstants {

private static Logger log = Logger.getLogger(Category_ActivityController.class.getName());

 


	private Category_ActivityService Category_Activity_service;


	public Category_ActivityService get_Category_Activity_service() {
		return Category_Activity_service;
	}


	@Resource(name="Category_ActivityService")
	public void set_Category_Activity_service(Category_ActivityService Category_Activity_service) {
		this.Category_Activity_service = Category_Activity_service;
	}




	//auths not ready at this time
	/**
	*The purpose of this method is to perform save operation of  Category noun into database
	* @param the_Category
	*@return Category object will return for mongo
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/create_Category", httpMethod = "POST",notes = "creates a noun of Category",response = Category.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.POST,value = "/create_Category" ,headers="Accept=application/json")
    @ResponseBody
	public Category create_Category(@RequestBody Category the_Category) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("create_Category controller started operation!");

		the_Category.setId(null);

		Category a_Category = Category_Activity_service.create_category(the_Category);

		log.info("Object returned from create_Category method !");

 

        return a_Category;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to perform update operation of  Category noun into database
	*@param the_Category
	*@return Categoryobject will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/update_Category", httpMethod = "PUT",notes = "updates a noun of Category",response = Category.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.PUT,value = "/update_Category" ,headers="Accept=application/json")
    @ResponseBody
	public Category update_Category(@RequestBody Category the_Category) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("update_Category controller started operation!");

		Category a_Category;

		a_Category = Category_Activity_service.update_category(the_Category);

		log.info("Object returned from update_Category method !");

 

        return a_Category;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to perform fetch operation of  Category noun from  database based on given noun id
	*@param Category_id
	*@return Categoryobject will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/search_for_update_Category/{Category_id}", httpMethod = "GET",notes = "updates a noun of Category",response = Category.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.GET,value = "/search_for_update_Category/{Category_id}" ,headers="Accept=application/json")
    @ResponseBody
	public Category search_for_update_Category(@PathVariable("Category_id")String Category_id) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("search_for_update_Category controller started operation!");

		Category the_Category = new Category();

		the_Category = Category_Activity_service.category_search_for_update(Category_id);

		log.info("Object returned from search_for_update_Category method !");

 

        return the_Category;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to perform delete operation of  Category noun from  database based on given noun id
	*@param Category_id
	*@return Categoryobject will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/delete_Category/{Category_id}", httpMethod = "DELETE",notes = "deletes a noun of Category",response = Category.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.DELETE,value = "/delete_Category/{Category_id}" ,headers="Accept=application/json")
    @ResponseBody
	public String  delete_Category(@PathVariable("Category_id")String  Category_id) throws Exception {

		log.setLevel(Level.INFO);
	    log.info("delete_Category controller started operation!");

		String service_return_msg = "";

		service_return_msg = Category_Activity_service.delete_category(Category_id);

		log.info("Object returned from delete_Category method !");

 

        return service_return_msg;

	}


	//auths not ready at this time
	/**
	*The purpose of this method is to get list of  Category noun from  database
	*
	*@return List of Category objects will return
	*@throws Exception
	*
	*
	*/


	@ApiOperation(value = "/get_all_Category", httpMethod = "GET",notes = "special search that gets all values of Category",response = Category.class)
	@ApiResponses(value = {
		@ApiResponse(code = 200, message = AssetRegisterBookSwaggerUIConstants.SUCCESS),
	    @ApiResponse(code = 404, message = AssetRegisterBookSwaggerUIConstants.NOT_FOUND),
	    @ApiResponse(code = 500, message = AssetRegisterBookSwaggerUIConstants.INTERNAL_SERVER_ERROR),
	    @ApiResponse(code = 400, message = AssetRegisterBookSwaggerUIConstants.BAD_REQUEST),
	    @ApiResponse(code = 412, message = AssetRegisterBookSwaggerUIConstants.PRE_CONDITION_FAILED) })


	@RequestMapping(method = RequestMethod.GET,value = "/get_all_Category" ,headers="Accept=application/json")
    @ResponseBody
	public List<Category> get_all_Category() throws Exception {

		log.setLevel(Level.INFO);
	    log.info("get_all_Category controller started operation!");

		List<Category> Category_list = new ArrayList<Category>();

		Category_list = Category_Activity_service.get_all_category();

		log.info("Object returned from get_all_Category method !");

 

        return Category_list;

	}




}